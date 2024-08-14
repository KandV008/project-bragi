'use server';

import { ProductEntity, mapDocumentToProduct } from "@/app/model/entities/Product";

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

export async function getProductsByCategory(category: string | null, start: string | null, end: string | null): Promise<ProductEntity[]> {
  let products: ProductEntity[] = [];
  let startIndex, endIndex

  if (!category) {
    console.log("ERROR: CATEGORY is null")
    return products;
  }

  if(!start || !end){
    console.log("START INDEX:", start, "-> Use default value")
    startIndex = 0
    console.log("END INDEX:", end, "-> Use default value")
    endIndex = 9
  } else {
    startIndex = Number(start);
    endIndex = Number(end);
  
    if (isNaN(startIndex) || isNaN(endIndex)) {
      console.log("ERROR: START or END is not a valid number");
      return products;
    }
  }

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({ category: category })
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
  let products: ProductEntity[] = [];

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

export async function getRelatedProducts(brand: string | null, price: string | null): Promise<ProductEntity[] | null> {
  let products: ProductEntity[] = [];
  let parsedPrice: number

  if (brand == null) {
    console.log("ERROR: BRAND is null")
    return null;
  }

  if (price == null || !(isNaN(parseFloat(price)))) {
    console.log("ERROR: PRICE is null")
    return null;
  }

  parsedPrice = parseFloat(price)

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const pipeline = [
      {
        $match: {
          $or: [
            { brand: { $eq: brand } },
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

export async function getProduct(id: string | null): Promise<ProductEntity | null> {
  if (id == null) {
    console.log("ERROR: ID is null")
    return null;
  }

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const objectId = new ObjectId(id);
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
  let products: ProductEntity[] = [];
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

export async function searchProducts(keyword: string | null,start: string | null, end: string | null): Promise<ProductEntity[]> {
  console.log("KEYWORD: " + keyword);

  let products: ProductEntity[] = [];
  let startIndex, endIndex

  if (!keyword) {
    console.log("ERROR: Keyword is null or empty");
    return products;
  }

  if(!start || !end){
    console.log("START INDEX:", start, "-> Use default value")
    startIndex = 0
    console.log("END INDEX:", end, "-> Use default value")
    endIndex = 9
  } else {
    startIndex = Number(start);
    endIndex = Number(end);
  
    if (isNaN(startIndex) || isNaN(endIndex)) {
      console.log("ERROR: START or END is not a valid number");
      return [];
    }
  }

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
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