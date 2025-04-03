'use server';

import { mapDocumentToOrder, OrderEntity } from "@/app/model/entities/order/Order";
import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/product/Product";
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { Logger } from "@/app/config/Logger";
import { parseShoppingForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { redirect } from "next/navigation";

require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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

const CONTEXT = "ORDER";

/**
 * Fetches orders from the database within a specified range.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<OrderEntity[]>} - A list of orders.
 */
export async function getOrders(start: string | null, end: string | null): Promise<OrderEntity[]> {
    Logger.startFunction(CONTEXT, "getOrders");

  const orders: OrderEntity[] = [];
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("orders");

    const cursor = coll.find()
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    await cursor.forEach((doc: any) => {
      orders.push(mapDocumentToOrder(doc));
    });
  } catch (error) {
    Logger.errorFunction(CONTEXT, "getOrders", error)
  }

  Logger.endFunction(CONTEXT, "getOrders", orders.map(product => product.id))
  return orders;
}

/**
 * Retrieves an order by its ID.
 * @param {string | null} orderIdToParse - The order ID.
 * @returns {Promise<OrderEntity | null>} - The order entity if found, otherwise null.
 */
export async function getOrder(orderIdToParse: string | null): Promise<OrderEntity | null> {
    Logger.startFunction(CONTEXT, "getOrder")
  
    const parsedOrderId = parseString(orderIdToParse, "ORDER_ID")
  
    try {
      await client.connect();
  
      const db = client.db("Product-DDBB");
      const coll = db.collection("orders");
  
      const objectId = new ObjectId(parsedOrderId);
      const order = await coll.findOne({ _id: objectId });
  
      if (!order) {
        Logger.errorFunction(CONTEXT, "getOrder", "Order not found")
        return null;
      }
  
      Logger.endFunction(CONTEXT, "getOrder", order)
      return mapDocumentToOrder(order)
    } finally {
      ;
    }
  }

/**
 * Handles the creation of a new order from form data.
 * @param {FormData} formData - The form data containing order details.
 */
export async function actionCreateOrder(formData: FormData, products: ShoppingProductDTO[]) {
    Logger.startFunction(CONTEXT, "actionCreateOrder");

    const newShopping = parseShoppingForm(formData);

    try {
        await createOrder(newShopping, products);
        Logger.endFunction(CONTEXT, "actionCreateOrder", "void");
        redirect("/admin/products");
    } catch (error) {
        Logger.errorFunction(CONTEXT, "actionCreateOrder", error);
    }
}

/**
 * Creates a new order in the database.
 * @param {Object} shoppingData - Data from the form to create the order.
 * @param {Array} products - List of products associated with the order.
 */
export async function createOrder(shoppingData: any, products: ShoppingProductDTO[]) {
    Logger.startFunction(CONTEXT, "createOrder");

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
        Logger.endFunction(CONTEXT, "createOrder", result);
    } catch (error) {
        Logger.errorFunction(CONTEXT, "createOrder", error);
        throw new Error("Error creating the order.");
    }
}