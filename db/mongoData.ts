'use server';

import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/Product";
import { parseBrand, parsePrice, parseProductCategory, parseStartAndEndIndex, parseKeyword, parseProductId } from "@/lib/parser";

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

export async function getProductsByCategory(categoryToCheck: string | null, start: string | null, end: string | null): Promise<ProductEntity[]> {
  const products: ProductEntity[] = [];
  const checkedCategory = parseProductCategory(categoryToCheck)
  const {startIndex, endIndex } = parseStartAndEndIndex(start, end)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ category: checkedCategory })
      .skip(startIndex)
      .limit(endIndex - startIndex + 1);
      
    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } catch (e){
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
  const brandChecked = parseBrand(brandToCheck)
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
  const parsedProductId = parseProductId(productIdToParse)

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

export async function searchProducts(keywordToParse: string | null, start: string | null, end: string | null): Promise<ProductEntity[]> {
  const products: ProductEntity[] = [];
  const parsedKeyword = parseKeyword(keywordToParse)
  const {startIndex, endIndex } = parseStartAndEndIndex(start, end)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({
      $or: [
        { name: { $regex: parsedKeyword, $options: "i" } },
        { description: { $regex: parsedKeyword, $options: "i" } }
      ]
    })
    .skip(startIndex)
    .limit(endIndex - startIndex + 1);;

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

  console.log(products.map(product => product.id))
  return products;
}