'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ProductEntity } from "../model/Product";
import { getProductsByIds } from "./mongoData";

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