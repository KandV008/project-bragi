'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ShoppingProductDTO, mapDocumentToShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList } from "@/lib/parser/parser";
import { Logger } from "@/app/config/Logger";
import { applyNoveltyToList } from "@/app/model/entities/novelty/Novelty";
import { NoveltyContext } from "@/app/model/entities/novelty/enums/NoveltyContext";
import { METHOD_ADD_PRODUCT_TO_SHOPPING_LIST, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, METHOD_GET_SHOPPING_LIST, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST, SHOPPING_LIST_CONTEXT } from "../dbConfig";

/**
 * Retrieves the shopping list for the authenticated user.
 * @returns {Promise<ShoppingProductDTO[]>} A promise that resolves to an array of products.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database.
 */
export async function getShoppingList(): Promise<ShoppingProductDTO[]> {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST);

  try {
    const { userId } = auth();
    const client = await sql.connect();

    const result = await client.query(
      `SELECT * FROM shoppingList WHERE user_id = $1 ORDER BY product_id`,
      [userId]
    );

    const productDTOs = result.rows.map(row => mapDocumentToShoppingProductDTO(row));
    const shoppingList = await applyNoveltyToList(NoveltyContext["SHOPPING-LIST"], productDTOs)
    Logger.endFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST, shoppingList);
    return shoppingList;
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST, error)
    throw new Error(`[${METHOD_GET_SHOPPING_LIST}] ${error}`)
  }
}

/**
 * Deletes a product from the user's shopping list.
 * @param {string | null | undefined} productId - The ID of the product to be removed.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database.
 */
export async function deleteProductInShoppingList(productId: string | null | undefined) {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST);

  try {
    const id = parseString(productId, "PRODUCT_ID");
    const { userId } = auth();
    const client = await sql.connect();

    const result = await client.query(
      `DELETE FROM shoppingList WHERE user_id = $1 AND product_id = $2`,
      [userId, id]
    );

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST,
      `Product with ID: ${id} has been removed from ${result.rowCount ?? 0} shopping lists.`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, error)
    throw new Error(`[${METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST}] ${error}`)
  }
}

/**
 * Adds a product to the user's shopping list.
 * @param {FormData} formData - The form data containing product details.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database. 
*/
export async function addProductToShoppingList(formData: FormData) {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_ADD_PRODUCT_TO_SHOPPING_LIST);

  try {
    const { userId } = auth();
    const parsedUserId = parseString(userId?.toString(), "USER_ID");
    const { productId, colorText, colorHex, earSide, earphoneShape, name, category, brand, price, imageURL } = parseNewProductToShoppingList(formData);
  
    const client = await sql.connect();

    await client.query(
      `INSERT INTO shoppingList (product_id, user_id, color_text, color_hex, ear_side, earphone_shape, quantity, name, category, brand, price, image_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           ON CONFLICT (product_id, user_id, color_text, color_hex, ear_side)
           DO UPDATE SET quantity = shoppingList.quantity + EXCLUDED.quantity`,
      [productId, parsedUserId, colorText, colorHex, earSide, earphoneShape, 1, name, category, brand, price, imageURL]
    );

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_ADD_PRODUCT_TO_SHOPPING_LIST,
      `Added product ${productId} to shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, error)
    throw new Error(`[${METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST}] ${error}`)
  }
}

/**
 * Increments the quantity of a product in the user's shopping list.
 * @param {FormData} formData - The form data containing product details.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database. 
 */
export async function incrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST);

  try {
    const { userId } = auth();
    const { productId, colorText, colorHex, earSide } = parseUpdateOfShoppingList(formData);
    const parsedUserId = parseString(userId?.toString(), "USER_ID");
  
    const client = await sql.connect();

    await client.query(
      `UPDATE shoppingList
           SET quantity = quantity + 1
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5
           RETURNING *`,
      [productId, parsedUserId, colorText, colorHex, earSide]
    );

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST,
      `Incremented product ${productId} in shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST}] ${error}`)
  }
}

/**
 * Decrements the quantity of a product in the user's shopping list.
 * If quantity reaches zero, the product is removed.
 * @param {FormData} formData - The form data containing product details.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database. 
 */
export async function decrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST);

  try {
    const { userId } = auth();
    const { productId, colorText, colorHex, earSide } = parseUpdateOfShoppingList(formData);
    const parsedUserId = parseString(userId?.toString(), "USER_ID");
  
    const client = await sql.connect();

    await client.query(
      `UPDATE shoppingList
           SET quantity = quantity - 1
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5 AND quantity > 0`,
      [productId, parsedUserId, colorText, colorHex, earSide]
    );

    await client.query(
      `DELETE FROM shoppingList
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5 AND quantity = 0`,
      [productId, parsedUserId, colorText, colorHex, earSide]
    );

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST,
      `Decremented product ${productId} in shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST}] ${error}`)
  }
}
