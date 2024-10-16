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

export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]>{
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

