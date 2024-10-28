'use server';

import { parseProductIds, parseString, parseStartAndEndIndex } from "@/lib/parser";
import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { getProductsByIds } from "./product";
import { ProductEntity } from "@/app/model/entities/Product";
import { Logger } from "@/app/model/Logger";

const CONTEXT = "FAVORITES"

export async function getFavorites(start: string | null, end: string | null): Promise<ProductEntity[]> {
    Logger.startFunction(CONTEXT, "getFavorites")
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
    Logger.endFunction(CONTEXT, "getFavorites", favoriteProductIds)
    return await getProductsByIds(favoriteProductIds)
}

export async function checkFavorite(userIdToParse: string | null, productIdToParse: string | null) {
    Logger.startFunction(CONTEXT, "checkFavorite")
    const productId = parseString(productIdToParse, "PRODUCT_ID")
    const userId = parseString(userIdToParse, "USER_ID")
    const client = await sql.connect()

    const result = await client.query(
        `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
        [productId, userId]
    );

    const check = result.rows[0].count != 0
    Logger.endFunction(CONTEXT, "checkFavorite", check)
    return check
}

export async function checkFavoriteList(userIdToParse: string | null, productIdsToParse: string[] | undefined) {
    Logger.startFunction(CONTEXT, "checkFavoriteList")
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
        Logger.endFunction(CONTEXT, "checkFavoriteList", favoritesMap)
        return productIds.map(productId => favoritesMap.get(productId) || false);
    } catch (error) {
        Logger.errorFunction(CONTEXT, "checkFavoriteList", error)
        return [];
    } finally {
        client.release();
    }
}

export async function toggleFavorites(formData: FormData) {
    Logger.startFunction(CONTEXT, "toggleFavorites")
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
            Logger.endFunction(
                CONTEXT,
                "toggleFavorites",
                `Removed product ${productId} from favourites for user ${parsedUserId}`
            )
        } else {
            await client.query(
                `INSERT INTO favourites (product_id, user_id) VALUES ($1, $2)`,
                [productId, parsedUserId]
            );
            Logger.endFunction(
                CONTEXT,
                "toggleFavorites",
                `Added product ${productId} to favourites for user ${parsedUserId}`)
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "toggleFavorites", error)
        throw error;
    }
}

export async function deleteProductInFavorites(productId: string | null | undefined) {
    Logger.startFunction(CONTEXT, "deleteProductInFavorites")

    const id = parseString(productId, "PRODUCT_ID");

    try {
        const { userId } = auth();
        const client = await sql.connect();

        const result = await client.query(
            `DELETE FROM favourites WHERE user_id = $1 AND product_id = $2`,
            [userId, id]
        );

        if (result.rowCount === 1) {
            Logger.endFunction(
                CONTEXT,
                "toggleFavorites",
                `Product with ID: ${id} has been removed from favorites.`
            )
        } else {
            Logger.errorFunction(
                CONTEXT,
                "toggleFavorites",
                `Failed to remove product with ID: ${id} from favorites. Product not found.`
            )
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "toggleFavorites", error)
    }
}

