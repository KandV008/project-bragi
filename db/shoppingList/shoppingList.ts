'use server';

import { auth } from "@clerk/nextjs/server";
import { sql } from '@vercel/postgres';
import { ShoppingProductDTO, mapDocumentToShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { parseNewProductToShoppingList, parseString, parseUpdateOfShoppingList } from "@/lib/parser/parser";
import { Logger } from "@/app/config/Logger";
import { applyNoveltyToList } from "@/app/model/entities/novelty/Novelty";
import { NoveltyContext } from "@/app/model/entities/novelty/enums/NoveltyContext";
import { METHOD_ADD_PRODUCT_TO_SHOPPING_LIST, METHOD_COUNT_SHOPPING_LIST, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, METHOD_GET_SHOPPING_LIST, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST, SHOPPING_LIST_CONTEXT } from "../dbConfig";
import { getProduct } from "../product/product";
import { checkAccessoryByPairs, checkRemoveAccessoryByPairs } from "@/lib/utils";

/**
 * Retrieves the shopping list for the authenticated user.
 * @returns {Promise<ShoppingProductDTO[]>} A promise that resolves to an array of products.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database.
 */
export async function getShoppingList(): Promise<ShoppingProductDTO[]> {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST);

  try {
    const { userId } = auth();

    const result = await sql`
      SELECT * FROM shoppingList
      WHERE user_id = ${userId}
      ORDER BY product_id
    `;

    const productDTOs = result.rows.map(row => mapDocumentToShoppingProductDTO(row));
    const shoppingList = await applyNoveltyToList(NoveltyContext["SHOPPING-LIST"], productDTOs);

    Logger.endFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST, shoppingList);
    return shoppingList;
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_GET_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_GET_SHOPPING_LIST}] ${error}`);
  }
}

/**
 * Counts the total quantity of products in the shopping list.
 * This function retrieves the shopping list and calculates the sum of all product quantities.
 *
 * @returns {Promise<number>} A promise that resolves to the total quantity of products in the shopping list.
 * @throws {Error} Throws an error if there's an issue fetching the shopping list or calculating the count.
 */
export async function countShoppingList(): Promise<number>{
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_COUNT_SHOPPING_LIST);

    try {
    const shoppingList = await getShoppingList();

    const counter = shoppingList.reduce(((prev, product) => product.quantity + prev), 0)

    Logger.endFunction(SHOPPING_LIST_CONTEXT, METHOD_COUNT_SHOPPING_LIST, counter);
    return counter;
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_COUNT_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_COUNT_SHOPPING_LIST}] ${error}`);
  }
}

/**
 * Deletes a product from all users' shopping lists.
 * @param {string | null | undefined} productId - The ID of the product to be removed.
 * @throws {Error} - If an error occurs while deleting the product from the shopping lists in the database.
 */
export async function deleteProductInShoppingList(productId: string | null | undefined): Promise<void> {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST);

  try {
    const id = parseString(productId, "PRODUCT_ID");

    const result = await sql`
      DELETE FROM shoppingList
      WHERE product_id = ${id}
    `;

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST,
      `Product with ID: ${id} has been removed from ${result.rowCount ?? 0} shopping lists (all users).`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST}] ${error}`);
  }
}

/**
 * Deletes multiple products from all users' shopping lists.
 * @param {string[]} productIds - The IDs of the products to be removed.
 * @throws {Error} - If an error occurs while deleting products from the shopping list in the database.
 */
export async function deleteProductsInShoppingList(productIds: string[]): Promise<void> {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST);

  try {
    if (!Array.isArray(productIds) || productIds.length === 0) {
      throw new Error("No product IDs provided for deletion from shopping lists.");
    }

    const validIds = productIds.map((id) => parseString(id, "PRODUCT_ID"));
    const placeholders = validIds.map((_, i) => `$${i + 1}`).join(", ");

    const query = `
      DELETE FROM shoppingList
      WHERE product_id IN (${placeholders})
    `;
    const result = await sql.query(query, validIds);

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST,
      `Deleted ${result.rowCount ?? 0} shopping list entries for products: ${validIds.join(", ")}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST}] ${error}`);
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
    const parsedProduct = parseNewProductToShoppingList(formData);

    const hasBoth = parsedProduct.earSide === "both"

    if (hasBoth) {
      await handleBothEarSideEarphone(parsedProduct, parsedUserId)
    } else {
      await handleOneEarSideEarphone(parsedProduct, parsedUserId);
    }

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_ADD_PRODUCT_TO_SHOPPING_LIST,
      `Added product ${parsedProduct.productId} to shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_ADD_PRODUCT_TO_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_ADD_PRODUCT_TO_SHOPPING_LIST}] ${error}`);
  }
}

interface AddProductInterface {
  productId: string;
  colorText: string;
  colorHex: string;
  earSide: string;
  earphoneShape: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  imageURL: string;
  accessories: string[];
}

async function handleAddingProduct(parsedProduct: AddProductInterface, parsedUserId: string) {
  await sql`
      INSERT INTO shoppingList (
        product_id,
        user_id,
        color_text,
        color_hex,
        ear_side,
        earphone_shape,
        quantity,
        name,
        category,
        brand,
        price,
        image_url,
        accessories
      )
      VALUES (
        ${parsedProduct.productId},
        ${parsedUserId},
        ${parsedProduct.colorText},
        ${parsedProduct.colorHex},
        ${parsedProduct.earSide},
        ${parsedProduct.earphoneShape},
        1,
        ${parsedProduct.name},
        ${parsedProduct.category},
        ${parsedProduct.brand},
        ${parsedProduct.price},
        ${parsedProduct.imageURL},
        ${toPostgresArray(parsedProduct.accessories || [])}
      )
      ON CONFLICT (product_id, user_id, color_text, color_hex, ear_side)
      DO UPDATE SET quantity = shoppingList.quantity + EXCLUDED.quantity
    `;

  /**
  * Converts a JavaScript string array into a PostgreSQL array literal.
  * Example: ["a", "b", "c"] → '{a,b,c}'
  */
  function toPostgresArray(arr: string[]): string {
    if (!arr || arr.length === 0) return "{}";
    const escaped = arr.map(v =>
      `"${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
    );
    return `{${escaped.join(",")}}`;
  }
}

async function handleOneEarSideEarphone(parsedProduct: AddProductInterface, parsedUserId: string) {
  await handleAddingProduct(parsedProduct, parsedUserId);

  if (parsedProduct.accessories.length === 0) {
    return;
  }

  const accessoryToAdd = parsedProduct.accessories[0]
  const products = await getShoppingList()

  if (!checkAccessoryByPairs(products, parsedProduct.name, accessoryToAdd)) {
    return;
  }

  const parsedAccessory: AddProductInterface = await getParsedAccessory(parsedProduct);
  await handleAddingProduct(parsedAccessory, parsedUserId)
}


async function handleBothEarSideEarphone(parsedProduct: AddProductInterface, parsedUserId: string) {
  const leftSide: AddProductInterface = {
    ...parsedProduct,
    earSide: "left",
  }

  const rightSide: AddProductInterface = {
    ...parsedProduct,
    earSide: "right",
  }

  if (parsedProduct.accessories.length !== 0) {
    const parsedAccessory: AddProductInterface = await getParsedAccessory(parsedProduct);

    await handleAddingProduct(parsedAccessory, parsedUserId)
  }

  await handleAddingProduct(leftSide, parsedUserId)
  await handleAddingProduct(rightSide, parsedUserId)
}

async function getParsedAccessory(parsedProduct: AddProductInterface) {
  const accessoryId = parsedProduct.accessories[0];
  const accessory = await getProduct(accessoryId);

  if (!accessory) {
    throw Error("Accessory not found");
  }

  const parsedAccessory: AddProductInterface = {
    productId: accessoryId,
    colorText: "",
    colorHex: "",
    earSide: "",
    earphoneShape: "",
    name: accessory.name,
    category: accessory.category,
    brand: accessory.brand,
    price: 0,
    imageURL: accessory.imageURL,
    accessories: []
  };
  return parsedAccessory;
}

/**
 * Increments the quantity of a product in the user's shopping list.
 * @param {FormData} formData - The form data containing product details.
 * @throws {Error} - If an error occurs while retrieving products in the shopping list from the database. 
 */
export async function incrementProductInShoppingList(formData: FormData) {
  Logger.startFunction(SHOPPING_LIST_CONTEXT, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST);

  try {
    const { productId, colorText, colorHex, earSide, price } = parseUpdateOfShoppingList(formData);
    const { userId } = auth();
    const parsedUserId = parseString(userId?.toString(), "USER_ID");
    await handleIncrementProduct(productId, parsedUserId, colorText, colorHex, earSide, price);
    await prepareAccessoryAddition(productId, parsedUserId)

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST,
      `Incremented product ${productId} in shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST}] ${error}`);
  }
}

async function prepareAccessoryAddition(productId: string, parsedUserId: string) {
  const product = await getProduct(productId)

  if (!product || !product.earphoneAttributes) {
    return;
  }

  if (product.earphoneAttributes.accessories.length === 0) {
    return;
  }

  const parsedProduct: AddProductInterface = {
    productId: product.id,
    colorText: "",
    colorHex: "",
    earSide: "",
    earphoneShape: "",
    name: product.name,
    category: "",
    brand: "",
    price: 0,
    imageURL: "",
    accessories: product.earphoneAttributes.accessories
  }

  const accessoryToAdd = parsedProduct.accessories[0]
  const products = await getShoppingList()

  if (!checkAccessoryByPairs(products, parsedProduct.name, accessoryToAdd)) {
    return;
  }

  const parsedAccessory: AddProductInterface = await getParsedAccessory(parsedProduct);
  await handleAddingProduct(parsedAccessory, parsedUserId)
}

async function handleIncrementProduct(productId: string, parsedUserId: string, colorText: string, colorHex: string, earSide: string, price: number) {
  await sql`
      UPDATE shoppingList
      SET quantity = quantity + 1
      WHERE product_id = ${productId}
        AND user_id = ${parsedUserId}
        AND color_text = ${colorText}
        AND color_hex = ${colorHex}
        AND ear_side = ${earSide}
        AND price = ${price}
    `;
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
    const { productId, colorText, colorHex, earSide, price } = parseUpdateOfShoppingList(formData);
    const parsedUserId = parseString(userId?.toString(), "USER_ID");
    await handleDecrementProduct(productId, parsedUserId, colorText, colorHex, earSide, price);
    await prepareAccessoryRemoval(productId, parsedUserId)

    Logger.endFunction(
      SHOPPING_LIST_CONTEXT,
      METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST,
      `Decremented product ${productId} in shoppingList for user ${parsedUserId}`
    );
  } catch (error) {
    Logger.errorFunction(SHOPPING_LIST_CONTEXT, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, error);
    throw new Error(`[${METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST}] ${error}`);
  }
}

async function handleDecrementProduct(productId: string, parsedUserId: string, colorText: string, colorHex: string, earSide: string, price: number) {
  await sql`
      UPDATE shoppingList
      SET quantity = quantity - 1
      WHERE product_id = ${productId}
        AND user_id = ${parsedUserId}
        AND color_text = ${colorText}
        AND color_hex = ${colorHex}
        AND ear_side = ${earSide}
        AND price = ${price}
        AND quantity > 0
    `;

  await sql`
      DELETE FROM shoppingList
      WHERE product_id = ${productId}
        AND user_id = ${parsedUserId}
        AND color_text = ${colorText}
        AND color_hex = ${colorHex}
        AND ear_side = ${earSide}
        AND price = ${price}
        AND quantity = 0
    `;
}

async function prepareAccessoryRemoval(productId: string, parsedUserId: string) {
  const product = await getProduct(productId)

  if (!product || !product.earphoneAttributes) {
    return;
  }

  if (product.earphoneAttributes.accessories.length === 0) {
    return;
  }

  const parsedProduct: AddProductInterface = {
    productId: product.id,
    colorText: "",
    colorHex: "",
    earSide: "",
    earphoneShape: "",
    name: product.name,
    category: "",
    brand: "",
    price: 0,
    imageURL: "",
    accessories: product.earphoneAttributes.accessories
  }

  const accessoryToRemove = parsedProduct.accessories[0]
  const products = await getShoppingList()

  if (checkRemoveAccessoryByPairs(products, parsedProduct.name, accessoryToRemove)) {
    return;
  }

  const parsedAccessory: AddProductInterface = await getParsedAccessory(parsedProduct);
  await handleRemovingProduct(parsedAccessory, parsedUserId)
}

async function handleRemovingProduct(parsedProduct: AddProductInterface, parsedUserId: string) {
  await sql`
      UPDATE shoppingList
      SET quantity = quantity - 1
      WHERE product_id = ${parsedProduct.productId}
        AND user_id = ${parsedUserId}
        AND color_text = ${parsedProduct.colorText}
        AND color_hex = ${parsedProduct.colorHex}
        AND ear_side = ${parsedProduct.earSide}
        AND price = ${parsedProduct.price}
        AND quantity > 0
    `;

  await sql`
      DELETE FROM shoppingList
      WHERE product_id = ${parsedProduct.productId}
        AND user_id = ${parsedUserId}
        AND color_text = ${parsedProduct.colorText}
        AND color_hex = ${parsedProduct.colorHex}
        AND ear_side = ${parsedProduct.earSide}
        AND price = ${parsedProduct.price}
        AND quantity = 0
    `;
}
