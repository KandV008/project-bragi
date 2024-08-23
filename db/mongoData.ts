'use server';

import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/Product";
import { parseFilters, parsePrice, parseStartAndEndIndex, parseString } from "@/lib/parser";

require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); // Use require instead of import

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

export async function getAllProducts(start: string | null, end: string | null) {
  const products: ProductEntity[] = [];
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find()
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } catch (e) {
    console.log(e)
  }

  console.log(products.map(product => product.id))
  return products;
}

export async function getProductsByCategory(categoryToCheck: string | null, start: string | null, end: string | null, filters: string | null): Promise<ProductEntity[]> {
  const products: ProductEntity[] = [];
  const checkedCategory = parseString(categoryToCheck, "CATEGORY")
  const categoryFilter = { category: checkedCategory }
  const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
  const parsedFilters = parseFilters(filters)

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
  } catch (e) {
    console.log(e)
  }

  console.log(products.map(product => product.id))
  return products;
}

export async function getLatestNovelties(): Promise<ProductEntity[]> {
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

  console.log(products.map(product => product.id))
  return products;
}

export async function getRelatedProducts(brandToCheck: string | null, price: string | null): Promise<ProductEntity[] | null> {
  const products: ProductEntity[] = [];
  const brandChecked = parseString(brandToCheck, "BRAND")
  const parsedPrice = parsePrice(price)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const pipeline = [
      {
        $match: {
          $or: [
            { brand: { $eq: brandChecked } },
            { price: { $gte: (parsedPrice - 200), $lte: (parsedPrice + 200) } }
          ]
        }
      },
      { $limit: 4 }
    ];

    const cursor = coll.aggregate(pipeline);

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

  console.log(products.map(product => product.id))
  return products;
}

export async function getProduct(productIdToParse: string | null): Promise<ProductEntity | null> {
  const parsedProductId = parseString(productIdToParse, "PRODUCT_ID")

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(parsedProductId);
    const product = await coll.findOne({ _id: objectId });

    if (!product) {
      console.log("ERROR: Product not found.")
      return null;
    }

    console.log(product)
    return mapDocumentToProduct(product)
  } finally {
    ;
  }
}

export async function getProductsByIds(ids: string[]): Promise<ProductEntity[]> {
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

  return products
}

export async function searchProducts(
  keywordToParse: string | null, 
  start: string | null, 
  end: string | null, 
  filters: string | null
): Promise<ProductEntity[]> {
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
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }

  console.log(products.map(product => product.id));
  return products;
}


export async function createProduct(productData: any): Promise<void> {
  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const result = await coll.insertOne(productData);

    if (result.acknowledged) {
      console.log(`Product added with ID: ${result.insertedId}`);
    } else {
      console.error("Failed to add product.");
    }
  } catch (error) {
    console.error("Error adding product:", error);
  } finally {
    await client.close(); 
  }
}

export async function updateProduct(productData: any): Promise<void> {
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
        console.log(`Product with ID: ${productId} has been updated.`);
      } else {
        console.log(`No changes were made to the product with ID: ${productId}.`);
      }
    } else {
      console.error(`Failed to update product with ID: ${productId}. Product not found.`);
    }
  } catch (error) {
    console.error("Error updating product:", error);
  } finally {
    await client.close();
  }
}

export async function deleteProduct(productId: string | undefined | null): Promise<void> {
  const id = parseString(productId, "PRODUCT_ID");
  
  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(id);
    const result = await coll.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      console.log(`Product with ID: ${id} has been deleted.`);
    } else {
      console.error(`Failed to delete product with ID: ${id}. Product not found.`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  } finally {
    await client.close();
  }
}

