'use server';

import { parseProductIds, parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList, parsePrice, parseUses, parseInclude, parseWaterDustResistance, parseColors } from "@/lib/parser";
import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { addNewProduct, deleteProduct } from "./mongoData";
import { deleteProductInFavorites, deleteProductInShoppingList } from "./postgresData";
import { redirect } from 'next/navigation';

export async function checkFavorite(userIdToParse: string | null, productIdToParse: string | null) {
    const productId = parseString(productIdToParse, "PRODUCT_ID")
    const userId = parseString(userIdToParse, "USER_ID")
    const client = await sql.connect()

    const result = await client.query(
        `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
        [userId, productId]
    );

    return result.rows[0].count != 0
}

export async function checkFavoriteList(userIdToParse: string | null, productIdsToParse: string[] | undefined) {
    const userId = parseString(userIdToParse, "USER_ID")
    const productIds = parseProductIds(productIdsToParse)
    const client = await sql.connect();

    try {
        const query = `
            SELECT product_id, COUNT(*) AS count
            FROM favourites
            WHERE product_id = ANY($1::text[]) AND user_id = $2
            GROUP BY product_id
        `;

        const result = await client.query(query, [productIds, userId]);
        const favoritesMap = new Map(result.rows.map(row => [row.product_id, row.count > 0]));
        return productIds.map(productId => favoritesMap.get(productId) || false);
    } catch (error) {
        console.error("Error checking favorites:", error);
        return [];
    } finally {
        client.release();
    }
}

export async function toggleFavorites(formData: FormData) {
    const { userId } = auth();
    const productId = parseString(formData.get("id")?.toString(), "PRODUCT_ID");
    const parsedUserId = parseString(userId?.toString(), "USER_ID")

    try {
        const client = await sql.connect()

        const result = await client.query(
            `SELECT COUNT(*) AS count FROM favourites WHERE product_id = $1 AND user_id = $2`,
            [productId, parsedUserId]
        );

        const isFavorite = result.rows[0].count != 0

        if (isFavorite) {
            await client.query(
                `DELETE FROM favourites WHERE product_id = $1 AND user_id = $2`,
                [productId, parsedUserId]
            );
            console.log(`Removed product ${productId} from favourites for user ${parsedUserId}`);
        } else {
            await client.query(
                `INSERT INTO favourites (product_id, user_id) VALUES ($1, $2)`,
                [productId, parsedUserId]
            );
            console.log(`Added product ${productId} to favourites for user ${parsedUserId}`);
        }
    } catch (error) {
        console.error('Error toggling favourites:', error);
        throw error;
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

export async function createProduct(formData: FormData) {
    console.log(formData)
    const newName = parseString(formData.get("name")?.toString(), "NAME")
    const newCategory = parseString(formData.get("category")?.toString(), "CATEGORY")
    const newBrand = parseString(formData.get("brand")?.toString(), "BRAND")
    const newPrice = parsePrice(formData.get("price")?.toString())
    const newDescription = parseString(formData.get("description")?.toString(), "DESCRIPTION")
    const newColors = parseColors(formData)
    const newInclude = parseInclude(formData)
    const newAdaptationRange = parseString(formData.get("adaptation_range")?.toString(), "ADAPTATION_RANGE")
    const newWaterDustResistance = parseWaterDustResistance(formData)
    const newEarLocation = parseString(formData.get("ear_location")?.toString(), "EAR_LOCATION")
    const newLevelOfDiscretion = parseString(formData.get("level_of_discretion")?.toString(), "LEVEL_OF_DISCRETION")
    const newDegreeOfLoss = parseString(formData.get("degree_of_loss")?.toString(), "DEGREE_OF_LOSS")
    const newUses = parseUses(formData)

    const newProduct = {
        name: newName,
        category: newCategory,
        price: newPrice,
        description: newDescription,
        colors: newColors,
        include: newInclude,
        adaptation_range: newAdaptationRange,
        dust_water_resistance: newWaterDustResistance,
        brand: newBrand,
        location: newEarLocation,
        level_of_discretion: newLevelOfDiscretion,
        degree_of_loss: newDegreeOfLoss,
        uses: newUses
    }

    addNewProduct(newProduct)
        .then(() => console.log("Product added successfully"))
        .catch(error => console.error("Error adding product:", error));

    redirect("/admin/products")
}

export async function actionDelete(productId: string | undefined | null) {
    const id = parseString(productId, "PRODUCT_ID");

    deleteProduct(id)
    deleteProductInFavorites(id)
    deleteProductInShoppingList(id)

    redirect("/admin/products")
}