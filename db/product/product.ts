'use server';

import { parseFilters, parsePrice, parseProductForm, parseStartAndEndIndex, parseString, parseStringList } from "@/lib/parser/parser";
import { redirect } from "next/navigation";
import { Logger } from "@/app/config/Logger";
import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/product/Product";
import { deleteProductInFavorites, deleteProductsInFavorites } from "../favorites/favorites";
import { deleteProductInShoppingList, deleteProductsInShoppingList } from "../shoppingList/shoppingList";
import { METHOD_ACTION_CREATE_PRODUCT, METHOD_ACTION_DELETE_PRODUCT, METHOD_ACTION_UPDATE_PRODUCT, METHOD_CREATE_PRODUCT, METHOD_DELETE_PRODUCT, METHOD_GET_ACCESSORIES_AVAILABLE, METHOD_GET_ALL_PRODUCTS, METHOD_GET_FILTER_INFORMATION, METHOD_GET_LATEST_PRODUCTS, METHOD_GET_PRODUCT, METHOD_GET_PRODUCT_BY_CATEGORY, METHOD_GET_PRODUCTS_BY_IDS, METHOD_GET_RELATED_PRODUCTS, METHOD_SEARCH_PRODUCTS, METHOD_UPDATE_PRODUCT, PRODUCT_CONTEXT } from "../dbConfig";

require("dotenv").config({ path: ".env.local" });

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import { productIdName } from "@/app/config/JSONnames";

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

/**
 * Fetches all products from the database within a specified range.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<ProductEntity[]>} - A list of products.
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getAllProducts(start: string | null, end: string | null): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_ALL_PRODUCTS)

  try {
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find()
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_ALL_PRODUCTS, products.map(product => product.id))
    return products;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_ALL_PRODUCTS, error)
    throw new Error(`[${METHOD_GET_ALL_PRODUCTS}] ${error}`)
  }
}

/**
 * Retrieves products filtered by category, with optional pagination and filters.
 * @param {string | null} categoryToCheck - The category to filter by.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @param {string | null} filters - Additional filters.
 * @returns {Promise<ProductEntity[]>} - A list of products in the specified category.
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getProductsByCategory(categoryToCheck: string | null, start: string | null, end: string | null, filters: string | null): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT_BY_CATEGORY)

  try {
    const checkedCategory = parseString(categoryToCheck, "CATEGORY")
    const categoryFilter = { category: checkedCategory }
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
    const parsedFilters = parseFilters(filters)

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ ...categoryFilter, ...parsedFilters })
      .sort({ _id: -1 })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT_BY_CATEGORY, products.map(product => product.id))
    return products;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT_BY_CATEGORY, error)
    throw new Error(`[${METHOD_GET_PRODUCT_BY_CATEGORY}] ${error}`)
  }
}

/**
 * Fetches the latest product novelties, limited to 4 items.
 * @returns {Promise<ProductEntity[]>} - A list of the latest products.
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getLatestProducts(): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_LATEST_PRODUCTS)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find().sort({ _id: -1 }).limit(4);

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_LATEST_PRODUCTS, products.map(product => product.id))
    return products;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_LATEST_PRODUCTS, error)
    throw new Error(`[${METHOD_GET_LATEST_PRODUCTS}] ${error}`)
  }
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
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getRelatedProducts(
  idToAvoid: string | null,
  brandToCheck: string | null,
  price: string | null
): Promise<ProductEntity[] | null> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_RELATED_PRODUCTS)

  try {
    const productId = parseString(idToAvoid, "PRODUCT_ID");
    const brandChecked = parseString(brandToCheck, "BRAND");
    const parsedPrice = parsePrice(price);

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

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_RELATED_PRODUCTS, products.map(product => product.id))
    return products;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_RELATED_PRODUCTS, error)
    throw new Error(`[${METHOD_GET_RELATED_PRODUCTS}] ${error}`)
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
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getProductsByIds(ids: string[]): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCTS_BY_IDS)

  try {
    const objectIds = ids.map(id => new ObjectId(id));

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ _id: { $in: objectIds } });

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCTS_BY_IDS, products)
    return products
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCTS_BY_IDS, error)
    throw new Error(`[${METHOD_GET_PRODUCTS_BY_IDS}] ${error}`)
  }
}

/**
 * Retrieves a list of accessories available.
 * 
 * The function retrieves all accessories available 
 * It returns an empty array if no accessories are found.
 *
 * @returns {Promise<ProductEntity[]>} A list of matching products.
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getAccessoriesAvailable(): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_ACCESSORIES_AVAILABLE)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ category: "ACCESSORY" });

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_ACCESSORIES_AVAILABLE, products)
    return products
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_ACCESSORIES_AVAILABLE, error)
    throw new Error(`[${METHOD_GET_ACCESSORIES_AVAILABLE}] ${error}`)
  }
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
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function searchProducts(
  keywordToParse: string | null,
  start: string | null,
  end: string | null,
  filters: string | null
): Promise<ProductEntity[]> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_SEARCH_PRODUCTS)

  try {
    const parsedKeyword = parseString(keywordToParse, "KEYWORD");
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end);
    const parsedFilters = parseFilters(filters);

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

    const docs = await cursor.toArray();
    const products: ProductEntity[] = docs.map((doc: any) => mapDocumentToProduct(doc));

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_SEARCH_PRODUCTS, products.map(product => product.id))
    return products;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_SEARCH_PRODUCTS, error)
    throw new Error(`[${METHOD_GET_PRODUCTS_BY_IDS}] ${error}`)
  }
}

/**
 * Retrieves a product by its ID.
 * @param {string | null} productIdToParse - The product ID.
 * @returns {Promise<ProductEntity | null>} - The product entity if found, otherwise null.
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getProduct(productIdToParse: string | null): Promise<ProductEntity | null> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT)

  try {
    const parsedProductId = parseString(productIdToParse, "PRODUCT_ID")

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(parsedProductId);
    const product = await coll.findOne({ _id: objectId });

    const mappedProduct = mapDocumentToProduct(product)
    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT, mappedProduct)
    return mappedProduct
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_PRODUCT, error)
    throw new Error(`[${METHOD_GET_PRODUCT}] ${error}`)
  }
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
 * @throws {Error} - If an error occurs while retrieving products from the database. 
 */
export async function getFilterInformation(category: string | null, elementsToFilter: string | null): Promise<Record<string, Record<string, number>>> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_GET_FILTER_INFORMATION);

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
        if (_id !== null && _id !== "") {
          acc[_id] = count;
        }
        return acc;
      }, {} as Record<string, number>);
    }

    Logger.endFunction(PRODUCT_CONTEXT, METHOD_GET_FILTER_INFORMATION, result);
    return result;
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_GET_FILTER_INFORMATION, error);
    throw new Error(`[${METHOD_GET_FILTER_INFORMATION}] ${error}`)
  }
}

/**
 * Handles the creation of a new product from form data.
 * @param {FormData} formData - The form data containing product details.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - If an error occurs while creating a product to the database. 
 */
export async function actionCreateProduct(formData: FormData): Promise<number> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_ACTION_CREATE_PRODUCT);

  try {
    const newProduct = parseProductForm(formData);
    let status: number = 1

    await createProduct(newProduct)
      .then(() => {
        Logger.endFunction(PRODUCT_CONTEXT, METHOD_ACTION_CREATE_PRODUCT, "void");
        status = 0
      })
      .catch(error => {
        Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_CREATE_PRODUCT, error)
        status = 1
      });

    return status
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_CREATE_PRODUCT, error);
    throw new Error(`[${METHOD_ACTION_CREATE_PRODUCT}] ${error}`)
  }
}

/**
 * Creates a new product in the database.
 * @param {any} productData - The product data to insert.
 * @returns {Promise<void>} - No return value.
 * @throws {Error} - If an error occurs while creating a product to the database. 
 */
async function createProduct(productData: any): Promise<void> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_CREATE_PRODUCT)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const result = await coll.insertOne(productData);
    Logger.endFunction(PRODUCT_CONTEXT, METHOD_CREATE_PRODUCT, `Product added with ID: ${result.insertedId}`)
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_CREATE_PRODUCT, error)
    throw new Error(`[${METHOD_CREATE_PRODUCT}] ${error}`)
  }
}

/**
 * Handles updating a product from form data.
 * @param {FormData} formData - The form data containing updated product details.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - If an error occurs while updating a product to the database. 
 */
export async function actionUpdateProduct(formData: FormData): Promise<number> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_ACTION_UPDATE_PRODUCT);

  try {
    const id = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
    const newProduct = parseProductForm(formData);
    const updatedProduct = { _id: id, ...newProduct };
    let status: number = 1

    await updateProduct(updatedProduct)
      .then(() => {
        Logger.endFunction(PRODUCT_CONTEXT, METHOD_ACTION_UPDATE_PRODUCT, "void");
        status = 0
      })
      .catch(error => {
        Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_UPDATE_PRODUCT, error)
        status = 1
      });

    return status
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_UPDATE_PRODUCT, error)
    throw new Error(`[${METHOD_ACTION_UPDATE_PRODUCT}] ${error}`)
  }
}

/**
 * Updates a product in the database.
 * @param {any} productData - The product data containing the update fields.
 * @returns {Promise<void>} A promise that resolves when the product is updated.
 * @throws {Error} - If an error occurs while updating a product to the database. 
 */
async function updateProduct(productData: any): Promise<void> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_UPDATE_PRODUCT);
  const { _id, ...updateFields } = productData;

  try {
    const productId = parseString(_id, "PRODUCT_ID");

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(productId);
    const result = await coll.updateOne(
      { _id: objectId },
      { $set: updateFields }
    );

    if (result.matchedCount !== 1) {
      throw new Error(`Failed to update product with ID: ${productId}. Product not found.`)
    }

    Logger.endFunction(
      PRODUCT_CONTEXT,
      METHOD_UPDATE_PRODUCT,
      `Product with ID: ${productId} has been updated.`
    );
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_UPDATE_PRODUCT, error);
    throw new Error(`[${METHOD_UPDATE_PRODUCT}] ${error}`)
  }
}

/**
 * Handles deleting a product and related entries.
 * @param {string | undefined | null} productId - The ID of the product to be deleted.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - If an error occurs while deleting a product to the database. 
 */
export async function actionDeleteProduct(productId: string | undefined | null): Promise<number> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_ACTION_DELETE_PRODUCT);

  try {
    const id = parseString(productId, "PRODUCT_ID");

    try {
      await deleteProduct(id);
      await deleteProductInFavorites(id);
      await deleteProductInShoppingList(id);
      Logger.endFunction(PRODUCT_CONTEXT, METHOD_ACTION_DELETE_PRODUCT, "void");
      return 0;
    } catch (error) {
      Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_DELETE_PRODUCT, error);
      return 1;
    }
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_ACTION_DELETE_PRODUCT, error);
    throw new Error(`[${METHOD_ACTION_DELETE_PRODUCT}] ${error}`)
  }
}

/**
 * Deletes a product from the database.
 * @param {string | undefined | null} productId - The ID of the product to be deleted.
 * @returns {Promise<void>} A promise that resolves when the product is deleted.
 * @throws {Error} - If an error occurs while deleting a product to the database. 
 */
async function deleteProduct(productId: string | undefined | null): Promise<void> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_DELETE_PRODUCT);

  try {
    const id = parseString(productId, "PRODUCT_ID");

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(id);
    const result = await coll.deleteOne({ _id: objectId });

    if (result.deletedCount !== 1) {
      throw new Error(`Failed to delete product with ID: ${id}. Product not found.`)
    }

    await db.collection('products').updateMany(
      { accessories: objectId.toString() },
      { $pull: { accessories: objectId.toString() as any } }
    );

    Logger.errorFunction(
      PRODUCT_CONTEXT,
      METHOD_DELETE_PRODUCT,
      `Product with ID: ${id} has been deleted.`
    );
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_DELETE_PRODUCT, error);
    throw new Error(`[${METHOD_DELETE_PRODUCT}] ${error}`)
  }
}

/**
 * Deletes multiple products by their IDs from the database.
 * @param {string[]} productIds - The IDs of the products to be deleted.
 * @returns {Promise<void>} A promise that resolves when all products are deleted.
 * @throws {Error} - If an error occurs while deleting products from the database.
 */
export async function deleteProductsByIds(productIds: string[]): Promise<void> {
  Logger.startFunction(PRODUCT_CONTEXT, METHOD_DELETE_PRODUCT);

  try {
    if (!Array.isArray(productIds) || productIds.length === 0) {
      throw new Error("No product IDs provided for deletion.");
    }

    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectIds = productIds.map((id) => new ObjectId(id));

    const deleteResult = await coll.deleteMany({ _id: { $in: objectIds } });

    if (deleteResult.deletedCount === 0) {
      throw new Error(`No products were deleted. IDs not found: ${productIds.join(", ")}`);
    }

    await db.collection("products").updateMany(
      { accessories: { $in: productIds } },
      { $pull: { accessories: { $in: productIds } } as any }
    );

    await deleteProductsInFavorites(productIds);
    await deleteProductsInShoppingList(productIds);

    Logger.endFunction?.(
      PRODUCT_CONTEXT,
      METHOD_DELETE_PRODUCT,
      `Deleted ${deleteResult.deletedCount} product(s) with IDs: ${productIds.join(", ")}`
    );
  } catch (error) {
    Logger.errorFunction(PRODUCT_CONTEXT, METHOD_DELETE_PRODUCT, error);
    throw new Error(`[${METHOD_DELETE_PRODUCT}] ${error}`);
  } finally {
    await client.close();
  }
}
