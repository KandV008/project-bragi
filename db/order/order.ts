'use server';

import { mapDocumentToOrder, OrderEntity } from "@/app/model/entities/order/Order";
import { mapShoppingProductToDocument, ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { Logger } from "@/app/config/Logger";
import { parseShoppingForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { METHOD_ACTION_CREATE_ORDER, METHOD_CREATE_ORDER, METHOD_GET_NEXT_SEQUENCE_VALUE, METHOD_GET_ORDER, METHOD_GET_ORDERS, METHOD_UPDATE_ORDER_STATUS, ORDER_CONTEXT } from "../dbConfig";

require("dotenv").config({ path: ".env.local" });

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import { auth } from "@clerk/nextjs/server";

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@clusterprojectbragi.fulvzjc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectBragi`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/**
 * Fetches orders from the database within a specified range.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<OrderEntity[]>} - A list of orders.
 * @throws {Error} - If an error occurs while retrieving orders from the database. 
 */
export async function getOrders(start: string | null, end: string | null): Promise<OrderEntity[]> {
  Logger.startFunction(ORDER_CONTEXT, METHOD_GET_ORDERS);

  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error(`[auth] Not authenticated user`)
    }

    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("orders");

    const cursor = coll.find({ user_id: userId })
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    const docs = await cursor.toArray();
    const orders: OrderEntity[] = docs.map((doc: any) => mapDocumentToOrder(doc));

    Logger.endFunction(ORDER_CONTEXT, METHOD_GET_ORDERS, orders.map(order => order.id))
    return orders;
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_GET_ORDERS, error)
    throw new Error(`[${METHOD_GET_ORDERS}] ${error}`)
  }
}

/**
 * Retrieves an order by its ID.
 * @param {string | null} orderIdToParse - The order ID.
 * @returns {Promise<OrderEntity>} - The order entity if found, otherwise null.
 * @throws {Error} - If an error occurs while retrieving orders from the database. 
 */
export async function getOrder(orderIdToParse: string | null): Promise<OrderEntity> {
  Logger.startFunction(ORDER_CONTEXT, METHOD_GET_ORDER)

  try {
    const parsedOrderId = parseString(orderIdToParse, "ORDER_ID")

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("orders");

    const objectId = new ObjectId(parsedOrderId);
    const order = await coll.findOne({ _id: objectId });

    const mappedOrder = mapDocumentToOrder(order)
    Logger.endFunction(ORDER_CONTEXT, METHOD_GET_ORDER, order)
    return mappedOrder
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_GET_ORDER, error)
    throw new Error(`[${METHOD_GET_ORDER}] ${error}`)
  }
}

/**
 * Handles the creation of a new order from form data.
 * @param {FormData} formData - The form data containing order details.
 * @returns {Promise<Object>} - Status code (0 for success, 1 for failure) and the id of the new order.
 * @throws {Error} - If an error occurs while creating an order to the database. 
 */
export async function actionCreateOrder(formData: FormData, products: ShoppingProductDTO[], bargainCode: string | undefined = undefined): Promise<any> {
  Logger.startFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER);

  try {
    const newShopping = parseShoppingForm(formData);
    let status: number = 1
    let id: string | null = null
    let orderNumber: number = 1

    await createOrder(newShopping, products, bargainCode)
      .then((data) => {
        Logger.endFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER, "void");
        status = 0
        id = data.orderId
        orderNumber = data.orderNum
      })
      .catch(error => {
        Logger.errorFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER, error)
        status = 1
      });

    return { status, id, orderNumber }
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER, error);
    throw new Error(`[${METHOD_ACTION_CREATE_ORDER}] ${error}`)
  }
}

/**
 * Creates a new order in the database.
 * @param {Object} shoppingData - Data from the form to create the order.
 * @param {Array} products - List of products associated with the order.
 * @throws {Error} - If an error occurs while creating an order to the database. 
 */
async function createOrder(shoppingData: any, products: ShoppingProductDTO[], bargainCode: string | undefined) {
  Logger.startFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER);

  const invalidProducts = getInvalidProducts(products);

  try {
    const database = client.db("Product-DDBB");
    const ordersCollection = database.collection("orders");
    const orderNumber = await getNextSequenceValue("orderId");

    const audiometryFile = shoppingData.audiometryFile as File;
    const audiometryBuffer = Buffer.from(await audiometryFile.arrayBuffer());
    const originalFileName = `audiometria-${shoppingData.userName}_${shoppingData.userFirstName}`;
    const sanitizedFileName = originalFileName.replace(/[^\w.-]/g, '_');

    const newOrder = {
      order_number: orderNumber,
      status: "IN-PROCESS",
      user_id: shoppingData.userId,
      user_name: shoppingData.userName,
      user_first_name: shoppingData.userFirstName,
      user_dni: shoppingData.userDNI,
      phone_number: shoppingData.phoneNumber,
      email: shoppingData.email,
      address: shoppingData.address,
      audiometry_file: {
        buffer: audiometryBuffer,
        type: audiometryFile.type,
        name: sanitizedFileName,
      },
      products: products.map((product) => (mapShoppingProductToDocument(product))),
      bargain_applied: bargainCode ? bargainCode : null,
      invalid_products: invalidProducts.map((product) => (mapShoppingProductToDocument(product))),
      total_price: products.reduce((sum, product) => sum + product.price * product.quantity, 0),
      creation_date: new Date(),
    };

    const result = await ordersCollection.insertOne(newOrder);
    Logger.endFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER, result);
    return { orderId: result.insertedId.toString(), orderNum: orderNumber }
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER, error);
    throw new Error(`[${METHOD_CREATE_ORDER}] ${error}`)
  }
}

/**
 * Get the invalid products from a list of product 
 * @param products List of products to check
 * @returns All the invalids productos in the list
 */
function getInvalidProducts(products: ShoppingProductDTO[]) {
  return products.filter((product: ShoppingProductDTO) => {
    return product.earphoneShape === "BTE" || product.earphoneShape === "CIC";
  })
}

/**
 * Get the next sequence value for the elemene
 * @param sequenceName Sequence to use for the counter
 * @returns The next number in the sequence
 */
async function getNextSequenceValue(sequenceName: string) {
  Logger.startFunction(ORDER_CONTEXT, METHOD_GET_NEXT_SEQUENCE_VALUE);
  const database = client.db("Product-DDBB");
  const countersCollection = database.collection("counters");

  const sequenceDocument = await countersCollection.findOneAndUpdate(
    { _id: sequenceName } as any,
    { $inc: { sequence_value: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  const counter = sequenceDocument?.sequence_value

  Logger.endFunction(ORDER_CONTEXT, METHOD_GET_NEXT_SEQUENCE_VALUE, counter);
  return counter || 1;
}

/**
 * Update the status of an order in the database and return its ID.
 * @param {number} orderNumber - Number of the order to identify.
 * @param {string} status - New status of the order.
 * @returns {Promise<string>} The ID of the updated order.
 * @throws {Error} If the order is not found or an error occurs.
 */
export async function updateOrderStatus(orderNumber: number, status: string) {
  Logger.startFunction(ORDER_CONTEXT, METHOD_UPDATE_ORDER_STATUS);

  try {
    const database = client.db("Product-DDBB");
    const ordersCollection = database.collection("orders");

    const result = await ordersCollection.findOneAndUpdate(
      { order_number: orderNumber },
      { $set: { status } },
      { returnDocument: "after" }
    );

    if (!result) {
      throw new Error(`Order with number ${orderNumber} not found.`);
    }

    const orderId = result._id.toString();

    Logger.endFunction(ORDER_CONTEXT, METHOD_UPDATE_ORDER_STATUS, { orderId, status });
    return orderId;
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_UPDATE_ORDER_STATUS, error);
    throw new Error(`[${METHOD_UPDATE_ORDER_STATUS}] ${error}`);
  }
}
