'use server';

import { parseFilters, parsePrice, parseProductForm, parseStartAndEndIndex, parseString, parseStringList } from "@/lib/parser/parser";
import { redirect } from "next/navigation";
import { deleteProductInShoppingList } from "./shoppingList";
import { deleteProductInFavorites } from "./favorites";
import { Logger } from "@/app/config/Logger";
import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/product/Product";

require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); 

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@clusterprojectbragi.fulvzjc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectBragi`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const CONTEXT = "PRODUCT"

/**
 * Fetches all products from the database within a specified range.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<ProductEntity[]>} - A list of products.
 */
export async function getAllProducts(start: string | null, end: string | null) {
  Logger.startFunction(CONTEXT, "getAllProducts")

  const products: ProductEntity[] = [];
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find()
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } catch (error) {
    Logger.errorFunction(CONTEXT, "getAllProducts", error)
  }

  Logger.endFunction(CONTEXT, "getAllProducts", products.map(product => product.id))
  return products;
}

/**
 * Retrieves products filtered by category, with optional pagination and filters.
 * @param {string | null} categoryToCheck - The category to filter by.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @param {string | null} filters - Additional filters.
 * @returns {Promise<ProductEntity[]>} - A list of products in the specified category.
 */
export async function getProductsByCategory(categoryToCheck: string | null, start: string | null, end: string | null, filters: string | null): Promise<ProductEntity[]> {
  Logger.startFunction(CONTEXT, "getProductsByCategory")

  const products: ProductEntity[] = [];
  const checkedCategory = parseString(categoryToCheck, "CATEGORY")
  const categoryFilter = { category: checkedCategory }
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
  const parsedFilters = parseFilters(filters)
  console.warn(parseFilters)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ ...categoryFilter, ...parsedFilters })
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } catch (error) {
    Logger.errorFunction(CONTEXT, "getProductsByCategory", error)
  }

  Logger.endFunction(CONTEXT, "getProductsByCategory", products.map(product => product.id))
  return products;
}

/**
 * Fetches the latest product novelties, limited to 4 items.
 * @returns {Promise<ProductEntity[]>} - A list of the latest products.
 */
export async function getLatestNovelties(): Promise<ProductEntity[]> {
  Logger.startFunction(CONTEXT, "getLatestNovelties")

  const products: ProductEntity[] = [];

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find().sort({ _id: -1 }).limit(4);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

  Logger.endFunction(CONTEXT, "getLatestNovelties", products.map(product => product.id))
  return products;
}

/**
 * Retrieves a list of related products based on brand and price similarity.
 * 
 * The function retrieves up to 4 products that either match the specified 
 * brand or have a price within ±200 of the given price.
 *
 * @param {string | null} idToAvoid - The product ID to exclude from the results.
 * @param {string | null} brandToCheck - The brand name to match for related products.
 * @param {string | null} price - The price range to consider for related products.
 * @returns {Promise<ProductEntity[] | null>} A list of related products, or null if an error occurs.
 */
export async function getRelatedProducts(
  idToAvoid: string | null,
  brandToCheck: string | null,
  price: string | null
): Promise<ProductEntity[] | null> {
  Logger.startFunction(CONTEXT, "getRelatedProducts")

  const products: ProductEntity[] = [];
  const productId = parseString(idToAvoid, "PRODUCT_ID");
  const brandChecked = parseString(brandToCheck, "BRAND");
  const parsedPrice = parsePrice(price);

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const pipeline = [
      {
        $match: {
          _id: { $ne: new ObjectId(productId) },
          $or: [
            { brand: { $eq: brandChecked } },
            {
              price: {
                $gte: parsedPrice - 200,
                $lte: parsedPrice + 200,
              },
            },
          ],
        },
      },
      { $limit: 4 },
    ];

    const cursor = coll.aggregate(pipeline);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

  Logger.endFunction(CONTEXT, "getRelatedProducts", products.map(product => product.id))
  return products;
}

/**
 * Retrieves a product by its ID.
 * @param {string | null} productIdToParse - The product ID.
 * @returns {Promise<ProductEntity | null>} - The product entity if found, otherwise null.
 */
export async function getProduct(productIdToParse: string | null): Promise<ProductEntity | null> {
  Logger.startFunction(CONTEXT, "getProduct")

  const parsedProductId = parseString(productIdToParse, "PRODUCT_ID")

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(parsedProductId);
    const product = await coll.findOne({ _id: objectId });

    if (!product) {
      Logger.errorFunction(CONTEXT, "getProduct", "Product not found")
      return null;
    }

    Logger.endFunction(CONTEXT, "getProduct", product)
    return mapDocumentToProduct(product)
  } finally {
    ;
  }
}

/**
 * Retrieves a list of products based on their IDs.
 * 
 * The function retrieves all products whose IDs match the provided array. 
 * It returns an empty array if no products are found.
 *
 * @param {string[]} ids - An array of product IDs to fetch from the database.
 * @returns {Promise<ProductEntity[]>} A list of matching products.
 */
export async function getProductsByIds(ids: string[]): Promise<ProductEntity[]> {
  Logger.startFunction(CONTEXT, "getProductsByIds")

  const products: ProductEntity[] = [];
  const objectIds = ids.map(id => new ObjectId(id));

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ _id: { $in: objectIds } });

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

  Logger.endFunction(CONTEXT, "getProductsByIds", products)
  return products
}

/**
 * Searches for products based on a keyword, optional filters, and pagination settings.
 * 
 * This function applies text-based search and optional filters, 
 * and returns a paginated list of products sorted by most recent entries.
 *
 * @param {string | null} keywordToParse - The keyword to search for in product names and descriptions.
 * @param {string | null} start - The starting index for pagination.
 * @param {string | null} end - The ending index for pagination.
 * @param {string | null} filters - JSON string containing additional filtering criteria.
 * @returns {Promise<ProductEntity[]>} A list of products matching the search criteria.
 */
export async function searchProducts(
  keywordToParse: string | null,
  start: string | null,
  end: string | null,
  filters: string | null
): Promise<ProductEntity[]> {
  Logger.startFunction(CONTEXT, "searchProducts")

  const products: ProductEntity[] = [];
  const parsedKeyword = parseString(keywordToParse, "KEYWORD");
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end);
  const parsedFilters = parseFilters(filters);

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({
      $and: [
        {
          $or: [
            { name: { $regex: parsedKeyword, $options: "i" } },
            { description: { $regex: parsedKeyword, $options: "i" } }
          ]
        },
        parsedFilters
      ]
    })
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } catch (error) {
    Logger.errorFunction(CONTEXT, "searchProducts", error)
  } finally {
    await client.close();
  }

  Logger.endFunction(CONTEXT, "searchProducts", products.map(product => product.id))
  return products;
}

/**
 * Retrieves filter information for products based on a category and specified attributes.
 * 
 * The function queries the database for products within the given category and computes the frequency of 
 * different values for each specified filter attribute.
 *
 * @param {string | null} category - The category of products to filter.
 * @param {string | null} elementsToFilter - A JSON string representing the list of attributes to filter by.
 * @returns {Promise<Record<string, Record<string, number>>>} A mapping of filter attributes to their value counts.
 */
export async function getFilterInformation(category: string | null, elementsToFilter: string | null): Promise<Record<string, Record<string, number>>> {
  Logger.startFunction(CONTEXT, "getFilterInformation");

  const parsedCategory = parseString(category, "CATEGORY");
  const parsedElementsToFilter = parseStringList(elementsToFilter, "ELEMENTS_TO_FILTER");
  const result: Record<string, Record<string, number>> = {};

  try {
    await client.connect();
    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const matchStage: Record<string, any> = {};
    if (parsedCategory) {
      matchStage.category = parsedCategory;
    }

    for (const attribute of parsedElementsToFilter) {
      const aggregationPipeline = [
        { $match: matchStage },
        { $group: { _id: `$${attribute}`, count: { $sum: 1 } } }
      ];

      const counts = await coll.aggregate(aggregationPipeline).toArray();

      result[attribute] = counts.reduce((acc: { [x: string]: any; }, { _id, count }: any) => {
        acc[_id] = count;
        return acc;
      }, {} as Record<string, number>);
    }

  } catch (error) {
    Logger.errorFunction(CONTEXT, "getFilterInformation", error);
  } finally {
    await client.close();
  }

  Logger.endFunction(CONTEXT, "getFilterInformation", result);
  return result;
}

/**
 * Creates a new product in the database.
 * @param {any} productData - The product data to insert.
 * @returns {Promise<void>} - No return value.
 */
export async function createProduct(productData: any): Promise<void> {
  Logger.startFunction(CONTEXT, "createProduct")

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const result = await coll.insertOne(productData);

    if (result.acknowledged) {
      Logger.endFunction(CONTEXT, "createProduct", `Product added with ID: ${result.insertedId}`)
    } else {
      Logger.errorFunction(CONTEXT, "createProduct", "Failed to add product.")
      console.error();
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "createProduct", error)
  } finally {
    await client.close();
  }
}

/**
 * Updates a product in the database.
 * @param {any} productData - The product data containing the update fields.
 * @returns {Promise<void>} A promise that resolves when the product is updated.
 */
export async function updateProduct(productData: any): Promise<void> {
  Logger.startFunction(CONTEXT, "updateProduct");

  const { _id, ...updateFields } = productData;
  const productId = parseString(_id, "PRODUCT_ID");

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(productId);
    const result = await coll.updateOne(
      { _id: objectId },
      { $set: updateFields }
    );

    if (result.matchedCount === 1) {
      if (result.modifiedCount === 1) {
        Logger.endFunction(
          CONTEXT,
          "updateProduct",
          `Product with ID: ${productId} has been updated.`
        );
      } else {
        Logger.errorFunction(
          CONTEXT,
          "updateProduct",
          `No changes were made to the product with ID: ${productId}.`
        );
      }
    } else {
      Logger.errorFunction(
        CONTEXT,
        "updateProduct",
        `Failed to update product with ID: ${productId}. Product not found.`
      );
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "updateProduct", error);
  } finally {
    await client.close();
  }
}

/**
 * Deletes a product from the database.
 * @param {string | undefined | null} productId - The ID of the product to be deleted.
 * @returns {Promise<void>} A promise that resolves when the product is deleted.
 */
export async function deleteProduct(productId: string | undefined | null): Promise<void> {
  Logger.startFunction(CONTEXT, "deleteProduct");
  const id = parseString(productId, "PRODUCT_ID");

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(id);
    const result = await coll.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      Logger.errorFunction(
        CONTEXT,
        "deleteProduct",
        `Product with ID: ${id} has been deleted.`
      );
    } else {
      Logger.errorFunction(
        CONTEXT,
        "deleteProduct",
        `Failed to delete product with ID: ${id}. Product not found.`
      );
    }
  } catch (error) {
    Logger.errorFunction(CONTEXT, "deleteProduct", error);
  } finally {
    await client.close();
  }
}

/**
 * Handles the creation of a new product from form data.
 * @param {FormData} formData - The form data containing product details.
 */
export async function actionCreateProduct(formData: FormData) {
  Logger.startFunction(CONTEXT, "actionCreateProduct");
  const newProduct = parseProductForm(formData);

  createProduct(newProduct)
    .then(() => Logger.endFunction(CONTEXT, "actionCreateProduct", "void"))
    .catch(error => Logger.errorFunction(CONTEXT, "actionCreateProduct", error));

  redirect("/admin/products");
}

/**
 * Handles updating a product from form data.
 * @param {FormData} formData - The form data containing updated product details.
 */
export async function actionUpdateProduct(formData: FormData) {
  Logger.startFunction(CONTEXT, "actionUpdateProduct");

  const id = parseString(formData.get("id")?.toString(), "PRODUCT_ID");
  const newProduct = parseProductForm(formData);
  const updatedProduct = { _id: id, ...newProduct };

  updateProduct(updatedProduct)
    .then(() => Logger.endFunction(CONTEXT, "actionUpdateProduct", "void"))
    .catch(error => Logger.errorFunction(CONTEXT, "actionUpdateProduct", error));

  redirect(`/admin/products/${id}`);
}

/**
 * Handles deleting a product and related entries.
 * @param {string | undefined | null} productId - The ID of the product to be deleted.
 */
export async function actionDeleteProduct(productId: string | undefined | null) {
  Logger.startFunction(CONTEXT, "actionDeleteProduct");

  const id = parseString(productId, "BARGAIN_CODE");

  deleteProduct(id);
  deleteProductInFavorites(id);
  deleteProductInShoppingList(id);

  Logger.endFunction(CONTEXT, "actionDeleteProduct", "void");
}