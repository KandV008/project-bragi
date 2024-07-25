'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
 
export async function checkFavorite(userId: string | null, productId: string | null){
    if (!userId || !productId){
        return;
    }
    
    const client = await sql.connect()

    const result = await client.query(
        `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
        [productId, userId]
    );

    return result.rows[0].count != 0
}

export async function toggleFavorites(formData: FormData){
    const { userId } = auth();
    const productId = formData.get("id");

    if (!userId || !productId){
        return;
    }

    try {
        const client = await sql.connect()

        const result = await client.query(
            `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
            [productId, userId]
        );

        const isFavorite = result.rows[0].count != 0

        if (isFavorite){
            await client.query(
                `DELETE FROM favourites WHERE product_id = $1 AND user_id = $2`,
                [productId, userId]
            );
            console.log(`Removed product ${productId} from favourites for user ${userId}`);
        } else {
            await client.query(
                `INSERT INTO favourites (product_id, user_id) VALUES ($1, $2)`,
                [productId, userId]
            );
            console.log(`Added product ${productId} to favourites for user ${userId}`);
        }    
    } catch (error) {
        console.error('Error toggling favourites:', error);
        throw error;
    }
}

export async function addProductToShoppingList(formData: FormData){
    const { userId } = auth();
    const productId = formData.get("id");
    const color = formData.get("color");
    const earSide = formData.get("earSide");
    const guarantee = formData.get("guarantee");
    const name = formData.get("name")
    const brand = formData.get("brand")
    const price = formData.get("price")
    const imageURL = formData.get("imageURL")

    console.log("USER ID: " + userId)
    console.log("PRODUCT ID: " + productId)
    console.log("COLOR: " + color)
    console.log("EAR SIDE: " + earSide)
    console.log("GUARANTEE: " + guarantee)
    console.log("NAME: " + name)
    console.log("BRAND: " + brand)
    console.log("PRICE: " + price)
    console.log("IMAGE URL: " + imageURL)

    if (!userId || !productId || !color || !earSide || !guarantee || !name || !brand || !price || !imageURL){
        return;
    }

    const parsedPrice = parseFloat(price.toString())

    console.log("PARSED PRICE: " + parsedPrice)

    if (!parsedPrice){
        return;
    }

    try {
        const client = await sql.connect()
        
        await client.query(
            `INSERT INTO shoppingList (product_id, user_id, color, ear_side, guarantee, quantity, name, brand, price, image_url)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             ON CONFLICT (product_id, user_id, color, ear_side, guarantee)
             DO UPDATE SET quantity = shoppingList.quantity + EXCLUDED.quantity`,
            [productId, userId, color, earSide, guarantee, 1, name, brand, parsedPrice, imageURL]
          );
          
        console.log(`Added product ${productId} to shoppingList for user ${userId}`);
    } catch (error) {
        console.error('Error toggling favourites:', error);
        throw error;
    }
}