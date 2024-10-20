'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { getProductsByIds } from "./mongoData";
import { ProductDTO, mapDocumentToProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { ProductEntity } from "@/app/model/entities/Product";
import { parseStartAndEndIndex, parseString } from "@/lib/parser";
import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/Bargain";

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

export async function getShoppingList(): Promise<ProductDTO[]> {
  const { userId } = auth();
  const client = await sql.connect()

  const result = await client.query(
    `SELECT * FROM shoppingList WHERE user_id = $1 ORDER BY product_id`,
    [userId]
  )

  return result.rows.map(row => mapDocumentToProductDTO(row))
}

export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]> {
  const client = await sql.connect()
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
  const limit = endIndex - startIndex + 1;
  const offset = startIndex;

  const result = await client.query(
    `SELECT * FROM bargain LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  const bargains: BargainEntity[] = result.rows.map(mapDocumentToBargain);
  console.log(bargains)
  return bargains
}

export async function getBargain(code: string | null): Promise<BargainEntity> {
  const client = await sql.connect()

  const result = await client.query(
    `SELECT * FROM bargain WHERE code = $1`,
    [code]
  )

  return mapDocumentToBargain(result.rows[0])
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

export async function createBargain(bargainData: any): Promise<void> {
  const { code, title, description } = bargainData;

  try {
    const client = await sql.connect();

    await client.query(
      'INSERT INTO bargain (code, title, description) VALUES ($1, $2, $3)',
      [code, title, description]
    );
  } catch (error) {
    console.error('Error creating bargain:', error);
    throw new Error('Could not create bargain');
  }
}

export async function updateBargain(bargainData: { code: string, title: string, description: string }, prevCode: string): Promise<void> {
  const { code, title, description } = bargainData;

  try {
    const client = await sql.connect();

    await client.query(
      'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE code = $4',
      [code, title, description, prevCode]
    );
  } catch (error) {
    console.error('Error updating bargain:', error);
    throw new Error('Could not update bargain');
  }
}

export async function deleteBargain(bargainCode: any): Promise<void> {
  try {
    const client = await sql.connect();

    const result = await client.query(
      'DELETE FROM bargain WHERE code = $1', 
      [bargainCode]
    );

    if (result.rowCount === 1) {
      console.log(`Bargain with code: ${bargainCode} has been removed from the bargain.`);
    } else {
      console.error(`Failed to remove bargain with code: ${bargainCode} from the bargain. Bargain not found.`);
    }
  } catch (error) {
    console.error('Error creating bargain:', error);
    throw new Error('Could not create bargain');
  }
}

