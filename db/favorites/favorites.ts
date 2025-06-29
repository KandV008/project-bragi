'use server';

import { parseProductIds, parseString, parseStartAndEndIndex } from "@/lib/parser/parser";
import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { Logger } from "@/app/config/Logger";
import { productIdName } from "@/app/config/JSONnames";
import { ProductEntity } from "@/app/model/entities/product/Product";
import { getProductsByIds } from "../product/product";
import { FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE, METHOD_CHECK_FAVORITE_LIST, METHOD_DELETE_IN_FAVORITES, METHOD_GET_FAVORITES, METHOD_TOGGLE_FAVORITES } from "../dbConfig";

/**
 * Retrieves the favorite products for the authenticated user within the specified range.
 * @param {string | null} start - The starting index for pagination.
 * @param {string | null} end - The ending index for pagination.
 * @returns {Promise<ProductEntity[]>} A promise resolving to an array of favorite products.
 * @throws {Error} - If an error occurs while retrieving favorites from the database.
 */
export async function getFavorites(start: string | null, end: string | null): Promise<ProductEntity[]> {
    Logger.startFunction(FAVORITES_CONTEXT, METHOD_GET_FAVORITES)

    try {
        const { userId } = auth();
        const parsedUserId = parseString(userId?.toString(), "USER_ID");
        const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
        const limit = endIndex - startIndex + 1;
        const offset = startIndex;

        const result = await sql`
            SELECT product_id
            FROM favourites
            WHERE user_id = ${parsedUserId}
            LIMIT ${limit}
            OFFSET ${offset}
        `;

        const favoriteProductIds: string[] = result.rows.map(row => row.product_id);
        Logger.endFunction(FAVORITES_CONTEXT, METHOD_GET_FAVORITES, favoriteProductIds)
        return await getProductsByIds(favoriteProductIds)

    } catch (error) {
        Logger.errorFunction(FAVORITES_CONTEXT, METHOD_GET_FAVORITES, error)
        throw new Error(`[${METHOD_GET_FAVORITES}] ${error}`)
    }
}

/**
 * Checks if a product is in the user's favorites.
 * @param {string | null} userIdToParse - The user ID.
 * @param {string | null} productIdToParse - The product ID.
 * @returns {Promise<boolean>} A promise resolving to a boolean indicating whether the product is a favorite.
 * @throws {Error} - If an error occurs while checking favorites from the database.
 */
export async function checkFavorite(userIdToParse: string | null, productIdToParse: string | null): Promise<boolean> {
    Logger.startFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE);

    try {
        const productId = parseString(productIdToParse, "PRODUCT_ID");
        const userId = parseString(userIdToParse, "USER_ID");

        const result = await sql`
            SELECT COUNT(*)::int AS count
            FROM favourites
            WHERE product_id = ${productId}
                AND user_id = ${userId}
        `;

        const check = result.rows[0].count !== 0;
        Logger.endFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE, check);
        return check;
    } catch (error) {
        Logger.errorFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE, error);
        throw new Error(`[${METHOD_CHECK_FAVORITE}] ${error}`);
    }
}

/**
 * Checks multiple product IDs to see if they are in the user's favorites.
 * @param {string | null} userIdToParse - The user ID.
 * @param {string[] | undefined} productIdsToParse - An array of product IDs.
 * @returns {Promise<boolean[]>} A promise resolving to an array of booleans indicating favorite status.
 * @throws {Error} - If an error occurs while checking favorites from a list from the database.
 */
export async function checkFavoriteList(
  userIdToParse: string | null,
  productIdsToParse: string[] | undefined
): Promise<boolean[]> {
  Logger.startFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE_LIST);

  try {
    const userId = parseString(userIdToParse, "USER_ID");
    const productIds: string[] = parseProductIds(productIdsToParse);

    if (productIds.length === 0) {
      return [];
    }

    const mappedIds = JSON.stringify(productIds).replace("[", "{").replace("]", "}")

    const result = await sql<{
      product_id: string;
      count: number;
    }>`
      SELECT product_id, COUNT(*) AS count
      FROM favourites
      WHERE product_id = ANY(${mappedIds}::text[]) AND user_id = ${userId}
      GROUP BY product_id
    `;

    const favoritesMap = new Map(
      result.rows.map(row => [row.product_id, Number(row.count) > 0])
    );

    Logger.endFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE_LIST, favoritesMap);

    return productIds.map(productId => favoritesMap.get(productId) || false);
  } catch (error: any) {
    Logger.errorFunction(FAVORITES_CONTEXT, METHOD_CHECK_FAVORITE_LIST, error);
    throw new Error(`[${METHOD_CHECK_FAVORITE_LIST}] ${error?.message || String(error)}`);
  }
}


/**
 * Toggles a product's favorite status for the authenticated user.
 * @param {FormData} formData - The form data containing the product ID.
 * @throws {Error} - If an error occurs while toggling favorites from the database.
 */
export async function toggleFavorites(formData: FormData) {
    Logger.startFunction(FAVORITES_CONTEXT, METHOD_TOGGLE_FAVORITES);

    try {
        const { userId } = auth();
        const productId = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
        const parsedUserId = parseString(userId?.toString(), "USER_ID");

        const result = await sql`
            SELECT COUNT(*)::int AS count
            FROM favourites
            WHERE product_id = ${productId} AND user_id = ${parsedUserId}
        `;

        const isFavorite = result.rows[0].count !== 0;

        if (isFavorite) {
            await sql`
            DELETE FROM favourites
            WHERE product_id = ${productId} AND user_id = ${parsedUserId}
        `;

            Logger.endFunction(
                FAVORITES_CONTEXT,
                METHOD_TOGGLE_FAVORITES,
                `Removed product ${productId} from favourites for user ${parsedUserId}`
            );
        } else {
            await sql`
                INSERT INTO favourites (product_id, user_id)
                VALUES (${productId}, ${parsedUserId})
            `;

            Logger.endFunction(
                FAVORITES_CONTEXT,
                METHOD_TOGGLE_FAVORITES,
                `Added product ${productId} to favourites for user ${parsedUserId}`
            );
        }
    } catch (error) {
        Logger.errorFunction(FAVORITES_CONTEXT, METHOD_TOGGLE_FAVORITES, error);
        throw new Error(`[${METHOD_TOGGLE_FAVORITES}] ${error}`);
    }
}


/**
 * Deletes a product from the authenticated user's favorites.
 * @param {string | null | undefined} productId - The product ID to remove.
 * @throws {Error} - If an error occurs while deleting product from all favorite lists from the database.
 */
export async function deleteProductInFavorites(productId: string | null | undefined) {
    Logger.startFunction(FAVORITES_CONTEXT, METHOD_DELETE_IN_FAVORITES);

    try {
        const id = parseString(productId, "PRODUCT_ID");

        const result = await sql`
            DELETE FROM favourites
            WHERE product_id = ${id}
        `;

        Logger.endFunction(
            FAVORITES_CONTEXT,
            METHOD_DELETE_IN_FAVORITES,
            `Product with ID: ${id} has been removed from ${result.rowCount ?? 0} favorites.`
        );
    } catch (error) {
        Logger.errorFunction(FAVORITES_CONTEXT, METHOD_DELETE_IN_FAVORITES, error);
        throw new Error(`[${METHOD_DELETE_IN_FAVORITES}] ${error}`);
    }
}

