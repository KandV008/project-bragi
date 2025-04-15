'use server';

import { mapDocumentToOrder, OrderEntity } from "@/app/model/entities/order/Order";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { Logger } from "@/app/config/Logger";
import { parseShoppingForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { METHOD_ACTION_CREATE_ORDER, METHOD_CREATE_ORDER, METHOD_GET_ORDER, METHOD_GET_ORDERS, ORDER_CONTEXT } from "../dbConfig";

require("dotenv").config({ path: ".env.local" });

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

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
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("orders");

    const cursor = coll.find()
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
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - If an error occurs while creating an order to the database. 
 */
export async function actionCreateOrder(formData: FormData, products: ShoppingProductDTO[]): Promise<number> {
  Logger.startFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER);

  try {
    const newShopping = parseShoppingForm(formData);
    let status: number = 1

    await createOrder(newShopping, products)
      .then(() => {
        Logger.endFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER, "void");
        status = 0
      })
      .catch(error => {
        Logger.errorFunction(ORDER_CONTEXT, METHOD_ACTION_CREATE_ORDER, error)
        status = 1
      });

    return status
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
async function createOrder(shoppingData: any, products: ShoppingProductDTO[]) {
  Logger.startFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER);

  try {
    const database = client.db("Product-DDBB");
    const ordersCollection = database.collection("orders");

    const newOrder = {
      user_id: shoppingData.userId,
      user_name: shoppingData.userName,
      user_first_name: shoppingData.userFirstName,
      phone_number: shoppingData.phoneNumber,
      email: shoppingData.email,
      address: shoppingData.address,
      products: products.map((product) => ({
        product_id: product.id,
        product_name: product.name,
        category: product.category,
        brand: product.brand,
        price: product.price,
        ear_side: product.earSide,
        earphone_shape: product.earphoneShape,
        color_text: product.colorText,
        color_hex: product.colorHex,
        image_url: product.imageURL,
        quantity: product.quantity,
      })),
      total_price: products.reduce((sum, product) => sum + product.price * product.quantity, 0),
      creation_date: new Date(),
    };

    const result = await ordersCollection.insertOne(newOrder);
    Logger.endFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER, result);
  } catch (error) {
    Logger.errorFunction(ORDER_CONTEXT, METHOD_CREATE_ORDER, error);
    throw new Error(`[${METHOD_CREATE_ORDER}] ${error}`)
  }
}