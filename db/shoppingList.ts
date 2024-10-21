'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ProductDTO, mapDocumentToProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList } from "@/lib/parser";

export async function getShoppingList(): Promise<ProductDTO[]> {
  const { userId } = auth();
  const client = await sql.connect()

  const result = await client.query(
    `SELECT * FROM shoppingList WHERE user_id = $1 ORDER BY product_id`,
    [userId]
  )

  return result.rows.map(row => mapDocumentToProductDTO(row))
}

export async function deleteProductInShoppingList(productId: string | null | undefined) {
  const id = parseString(productId, "PRODUCT_ID");

  try {
    const { userId } = auth();
    const client = await sql.connect();

    const result = await client.query(
      `DELETE FROM shoppingList WHERE user_id = $1 AND product_id = $2`,
      [userId, id]
    );

    if (result.rowCount === 1) {
      console.log(`Product with ID: ${id} has been removed from the shopping list.`);
    } else {
      console.error(`Failed to remove product with ID: ${id} from the shopping list. Product not found.`);
    }
  } catch (error) {
    console.error("Error removing product from shopping list:", error);
  }
}

export async function addProductToShoppingList(formData: FormData) {
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

    console.log(`Added product ${productId} to shoppingList for user ${parsedUserId}`);
  } catch (error) {
    console.error('Error adding product to the shopping list:', error);
    throw error;
  }
}

export async function incrementProductInShoppingList(formData: FormData) {
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
      console.log(`Product ${productId} not found in shoppingList for user ${parsedUserId}`);
    } else {
      console.log(`Incremented product ${productId} in shoppingList for user ${parsedUserId}`);
    }
  } catch (error) {
    console.error('Error incrementing product in the shopping list:', error);
    throw error;
  }
}

export async function decrementProductInShoppingList(formData: FormData) {
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

    console.log(`Decremented product ${productId} in shoppingList for user ${parsedUserId}`);
  } catch (error) {
    console.error('Error decrementing product in the shopping list:', error);
    throw error;
  }
}



