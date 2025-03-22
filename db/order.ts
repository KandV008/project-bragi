'use server';

import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { Logger } from "@/app/model/Logger";
import { parseShoppingForm } from "@/lib/parser";
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
 * Fetches all orders from the database.
 */
export async function getAllOrders() {
    Logger.startFunction(CONTEXT, "getAllOrders");

    try {
        const database = client.db("ordersDb");
        const ordersCollection = database.collection("orders");
        const orders = await ordersCollection.find().toArray();

        Logger.endFunction(CONTEXT, "getAllOrders", orders);
        return orders;
    } catch (error) {
        Logger.errorFunction(CONTEXT, "getAllOrders", error);
        throw new Error("Error fetching all orders.");
    }
}

/**
 * Fetches a specific order by orderId.
 */
export async function getOrder(orderId: string) {
    Logger.startFunction(CONTEXT, "getOrder");

    try {
        const database = client.db("ordersDb");
        const ordersCollection = database.collection("orders");
        const order = await ordersCollection.findOne({ _id: new ObjectId(orderId) });

        Logger.endFunction(CONTEXT, "getOrder", order);
        return order;
    } catch (error) {
        Logger.errorFunction(CONTEXT, "getOrder", error);
        throw new Error(`Error fetching order with id ${orderId}`);
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