'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ProductDTO, mapDocumentToProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList } from "@/lib/parser";
import { Logger } from "@/app/model/Logger";
import { applyNoveltyToList } from "@/app/model/entities/novelty/Novelty";
import { NoveltyContext } from "@/app/model/entities/novelty/enums/NoveltyContext";

const CONTEXT = "SHOPPING_LIST";

/**
 * Retrieves the shopping list for the authenticated user.
 * @returns {Promise<ProductDTO[]>} A promise that resolves to an array of products.
 */
export async function getShoppingList(): Promise<ProductDTO[]> {
  Logger.startFunction(CONTEXT, "getShoppingList");

  const { userId } = auth();
  const client = await sql.connect();

  const result = await client.query(
    `SELECT * FROM shoppingList WHERE user_id = $1 ORDER BY product_id`,
    [userId]
  );

  const productDTOs = result.rows.map(row => mapDocumentToProductDTO(row));
  const shoppingList = await applyNoveltyToList(NoveltyContext["SHOPPING-LIST"], productDTOs)
  Logger.endFunction(CONTEXT, "getShoppingList", shoppingList);
  return shoppingList;
}

/**
 * Deletes a product from the user's shopping list.
 * @param {string | null | undefined} productId - The ID of the product to be removed.
 */
export async function deleteProductInShoppingList(productId: string | null | undefined) {
  Logger.startFunction(CONTEXT, "deleteProductInShoppingList");
  const id = parseString(productId, "PRODUCT_ID");

  try {
    const { userId } = auth();
    const client = await sql.connect();

    const result = await client.query(
      `DELETE FROM shoppingList WHERE user_id = $1 AND product_id = $2`,
      [userId, id]
    );

    if (result.rowCount === 1) {
      Logger.endFunction(
        CONTEXT,
        "deleteProductInShoppingList",
        `Product with ID: ${id} has been removed from the shopping list.`
      );
    } else {
      Logger.errorFunction(
        CONTEXT,
        "deleteProductInShoppingList",
        `Failed to remove product with ID: ${id} from the shopping list. Product not found.`
      );
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "deleteProductInShoppingList", error);
  }
}

/**
 * Adds a product to the user's shopping list.
 * @param {FormData} formData - The form data containing product details.
 */
export async function addProductToShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "addProductToShoppingList");

  const { userId } = auth();
  const parsedUserId = parseString(userId?.toString(), "USER_ID");
  const { productId, colorText, colorHex, earSide, guarantee, name, category, brand, price, imageURL } = parseNewProductToShoppingList(formData);

  try {
    const client = await sql.connect();

    await client.query(
      `INSERT INTO shoppingList (product_id, user_id, color_text, color_hex, ear_side, guarantee, quantity, name, category, brand, price, image_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
           ON CONFLICT (product_id, user_id, color_text, color_hex, ear_side, guarantee)
           DO UPDATE SET quantity = shoppingList.quantity + EXCLUDED.quantity`,
      [productId, parsedUserId, colorText, colorHex, earSide, guarantee, 1, name, category, brand, price, imageURL]
    );

    Logger.endFunction(
      CONTEXT,
      "addProductToShoppingList",
      `Added product ${productId} to shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(CONTEXT, "addProductToShoppingList", error);
    throw error;
  }
}

/**
 * Increments the quantity of a product in the user's shopping list.
 * @param {FormData} formData - The form data containing product details.
 */
export async function incrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "incrementProductInShoppingList");

  const { userId } = auth();
  const { productId, colorText, colorHex, earSide, guarantee } = parseUpdateOfShoppingList(formData);
  const parsedUserId = parseString(userId?.toString(), "USER_ID");

  try {
    const client = await sql.connect();

    const result = await client.query(
      `UPDATE shoppingList
           SET quantity = quantity + 1
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5 AND guarantee = $6
           RETURNING *`,
      [productId, parsedUserId, colorText, colorHex, earSide, guarantee]
    );

    if (result.rowCount === 0) {
      Logger.endFunction(
        CONTEXT,
        "incrementProductInShoppingList",
        `Product ${productId} not found in shoppingList for user ${parsedUserId}`
      );
    } else {
      Logger.endFunction(
        CONTEXT,
        "incrementProductInShoppingList",
        `Incremented product ${productId} in shoppingList for user ${parsedUserId}`
      );
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "incrementProductInShoppingList", error);
    throw error;
  }
}

/**
 * Decrements the quantity of a product in the user's shopping list.
 * If quantity reaches zero, the product is removed.
 * @param {FormData} formData - The form data containing product details.
 */
export async function decrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "decrementProductInShoppingList");

  const { userId } = auth();
  const { productId, colorText, colorHex, earSide, guarantee } = parseUpdateOfShoppingList(formData);
  const parsedUserId = parseString(userId?.toString(), "USER_ID");

  try {
    const client = await sql.connect();

    await client.query(
      `UPDATE shoppingList
           SET quantity = quantity - 1
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5 AND guarantee = $6 AND quantity > 0`,
      [productId, parsedUserId, colorText, colorHex, earSide, guarantee]
    );

    await client.query(
      `DELETE FROM shoppingList
           WHERE product_id = $1 AND user_id = $2 AND color_text = $3 AND color_hex = $4 AND ear_side = $5 AND guarantee = $6 AND quantity = 0`,
      [productId, parsedUserId, colorText, colorHex, earSide, guarantee]
    );

    Logger.endFunction(
      CONTEXT,
      "decrementProductInShoppingList",
      `Decremented product ${productId} in shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(CONTEXT, "decrementProductInShoppingList", error);
    throw error;
  }
}
