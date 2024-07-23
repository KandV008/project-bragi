'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ProductEntity } from "../model/Product";
import { getProductsByIds } from "./mongoData";
import { mapDocumentToProductDTO, ProductDTO } from "../model/DTOs/ProductDTO";

export async function getFavorites(): Promise<ProductEntity[]>{
    const { userId } = auth();
    const client = await sql.connect()

    const result = await client.query(
        `SELECT product_id FROM favourites WHERE user_id = $1`,
        [userId]
    );

    const favoriteProductIds: string[] = result.rows.map(row => row.product_id);

    return await getProductsByIds(favoriteProductIds)
}

export async function getShoppingList(): Promise<ProductDTO[]>{
    const { userId } = auth();
    const client = await sql.connect()

    const result = await client.query(
        `SELECT * FROM shoppingList WHERE user_id = $1`,
        [userId]
    )

    return result.rows.map(row => mapDocumentToProductDTO(row))
}