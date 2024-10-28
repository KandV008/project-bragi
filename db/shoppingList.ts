'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ProductDTO, mapDocumentToProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList } from "@/lib/parser";
import { Logger } from "@/app/model/Logger";

const CONTEXT = "SHOPPING_LIST"

export async function getShoppingList(): Promise<ProductDTO[]> {
  Logger.startFunction(CONTEXT, "getShoppingList")

  const { userId } = auth();
  const client = await sql.connect()

  const result = await client.query(
    `SELECT * FROM shoppingList WHERE user_id = $1 ORDER BY product_id`,
    [userId]
  )

  const shoppinList = result.rows.map(row => mapDocumentToProductDTO(row))
  Logger.endFunction(CONTEXT, "getShoppingList", shoppinList)
  return shoppinList
}

export async function deleteProductInShoppingList(productId: string | null | undefined) {
  Logger.startFunction(CONTEXT, "deleteProductInShoppingList")
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
      )
    } else {
      Logger.errorFunction(
        CONTEXT,
        "deleteProductInShoppingList",
        `Failed to remove product with ID: ${id} from the shopping list. Product not found.`
      )
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "deleteProductInShoppingList", error)
  }
}

export async function addProductToShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "addProductToShoppingList")

  const { userId } = auth();
  const parsedUserId = parseString(userId?.toString(), "USER_ID")
  const { productId, color, earSide, guarantee, name, brand, price, imageURL } = parseNewProductToShoppingList(formData)

  try {
    const client = await sql.connect()

    await client.query(
      `INSERT INTO shoppingList (product_id, user_id, color, ear_side, guarantee, quantity, name, brand, price, image_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
           ON CONFLICT (product_id, user_id, color, ear_side, guarantee)
           DO UPDATE SET quantity = shoppingList.quantity + EXCLUDED.quantity`,
      [productId, parsedUserId, color, earSide, guarantee, 1, name, brand, price, imageURL]
    );

    Logger.endFunction(
      CONTEXT,
      "addProductToShoppingList",
      `Added product ${productId} to shoppingList for user ${parsedUserId}`
    )
  } catch (error) {
    Logger.errorFunction(CONTEXT, "addProductToShoppingList", error)
    throw error;
  }
}

export async function incrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "incrementProductInShoppingList")

  const { userId } = auth();
  const { productId, color, earSide, guarantee } = parseUpdateOfShoppingList(formData)
  const parsedUserId = parseString(userId?.toString(), "USER_ID")

  try {
    const client = await sql.connect();

    const result = await client.query(
      `UPDATE shoppingList
           SET quantity = quantity + 1
           WHERE product_id = $1 AND user_id = $2 AND color = $3 AND ear_side = $4 AND guarantee = $5
           RETURNING *`,
      [productId, parsedUserId, color, earSide, guarantee]
    );

    if (result.rowCount === 0) {
      Logger.endFunction(
        CONTEXT,
        "incrementProductInShoppingList",
        `Product ${productId} not found in shoppingList for user ${parsedUserId}`
      )
    } else {
      Logger.endFunction(
        CONTEXT,
        "incrementProductInShoppingList",
        `Incremented product ${productId} in shoppingList for user ${parsedUserId}`
      )
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "incrementProductInShoppingList", error)
    throw error;
  }
}

export async function decrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(CONTEXT, "decrementProductInShoppingList")

  const { userId } = auth();
  const { productId, color, earSide, guarantee } = parseUpdateOfShoppingList(formData)
  const parsedUserId = parseString(userId?.toString(), "USER_ID")

  try {
    const client = await sql.connect();

    await client.query(
      `UPDATE shoppingList
           SET quantity = quantity - 1
           WHERE product_id = $1 AND user_id = $2 AND color = $3 AND ear_side = $4 AND guarantee = $5 AND quantity > 0`,
      [productId, parsedUserId, color, earSide, guarantee]
    );

    await client.query(
      `DELETE FROM shoppingList
           WHERE product_id = $1 AND user_id = $2 AND color = $3 AND ear_side = $4 AND guarantee = $5 AND quantity = 0`,
      [productId, parsedUserId, color, earSide, guarantee]
    );

    Logger.endFunction(
      CONTEXT,
      "decrementProductInShoppingList",
      `Decremented product ${productId} in shoppingList for user ${parsedUserId}`
    )
  } catch (error) {
    Logger.errorFunction(CONTEXT, "decrementProductInShoppingList", error)
    throw error;
  }
}



