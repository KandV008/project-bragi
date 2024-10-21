'use server';

import { parseProductIds, parseString, parseStartAndEndIndex } from "@/lib/parser";
import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { getProductsByIds } from "./product";
import { ProductEntity } from "@/app/model/entities/Product";

export async function getFavorites(start: string | null, end: string | null): Promise<ProductEntity[]> {
    const { userId } = auth();
    const client = await sql.connect()
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
    const limit = endIndex - startIndex + 1;
    const offset = startIndex;

    const result = await client.query(
        `SELECT product_id FROM favourites WHERE user_id = $1 LIMIT $2 OFFSET $3`,
        [userId, limit, offset]
    );

    const favoriteProductIds: string[] = result.rows.map(row => row.product_id);
    console.log(favoriteProductIds)
    return await getProductsByIds(favoriteProductIds)
}

export async function checkFavorite(userIdToParse: string | null, productIdToParse: string | null) {
    const productId = parseString(productIdToParse, "PRODUCT_ID")
    const userId = parseString(userIdToParse, "USER_ID")
    const client = await sql.connect()

    const result = await client.query(
        `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
        [productId, userId]
    );

    return result.rows[0].count != 0
}

export async function checkFavoriteList(userIdToParse: string | null, productIdsToParse: string[] | undefined) {
    const userId = parseString(userIdToParse, "USER_ID")
    const productIds = parseProductIds(productIdsToParse)
    const client = await sql.connect();

    try {
        const query = `
            SELECT product_id, COUNT(*) AS count
            FROM favourites
            WHERE product_id = ANY($1::text[]) AND user_id = $2
            GROUP BY product_id
        `;

        const result = await client.query(query, [productIds, userId]);
        const favoritesMap = new Map(result.rows.map(row => [row.product_id, row.count > 0]));
        return productIds.map(productId => favoritesMap.get(productId) || false);
    } catch (error) {
        console.error("Error checking favorites:", error);
        return [];
    } finally {
        client.release();
    }
}

export async function toggleFavorites(formData: FormData) {
    const { userId } = auth();
    const productId = parseString(formData.get("id")?.toString(), "PRODUCT_ID");
    const parsedUserId = parseString(userId?.toString(), "USER_ID")

    try {
        const client = await sql.connect()

        const result = await client.query(
            `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
            [productId, parsedUserId]
        );

        const isFavorite = result.rows[0].count != 0

        if (isFavorite) {
            await client.query(
                `DELETE FROM favourites WHERE product_id = $1 AND user_id = $2`,
                [productId, parsedUserId]
            );
            console.log(`Removed product ${productId} from favourites for user ${parsedUserId}`);
        } else {
            await client.query(
                `INSERT INTO favourites (product_id, user_id) VALUES ($1, $2)`,
                [productId, parsedUserId]
            );
            console.log(`Added product ${productId} to favourites for user ${parsedUserId}`);
        }
    } catch (error) {
        console.error('Error toggling favourites:', error);
        throw error;
    }
}

export async function deleteProductInFavorites(productId: string | null | undefined) {
    const id = parseString(productId, "PRODUCT_ID");

    try {
        const { userId } = auth();
        const client = await sql.connect();

        const result = await client.query(
            `DELETE FROM favourites WHERE user_id = $1 AND product_id = $2`,
            [userId, id]
        );

        if (result.rowCount === 1) {
            console.log(`Product with ID: ${id} has been removed from favorites.`);
        } else {
            console.error(`Failed to remove product with ID: ${id} from favorites. Product not found.`);
        }
    } catch (error) {
        console.error("Error removing product from favorites:", error);
    }
}

