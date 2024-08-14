'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { getProductsByIds } from "./mongoData";
import { ProductDTO, mapDocumentToProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import { ProductEntity } from "@/app/model/entities/Product";
import { parseStartAndEndIndex } from "@/lib/parser";

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
    `SELECT * FROM shoppingList WHERE user_id = $1`,
    [userId]
  )

  return result.rows.map(row => mapDocumentToProductDTO(row))
}