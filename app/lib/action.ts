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