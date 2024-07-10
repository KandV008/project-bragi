import { ProductEntity, mapDocumentToProduct } from "../model/Product";

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

export async function getAllProducts(): Promise<ProductEntity[]> {
  let products: ProductEntity[] = [];

  try {
    await client.connect();

    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    const cursor = coll.find();

    await cursor.forEach((doc: any) => {
      products.push(mapDocumentToProduct(doc));
    });
  } finally {
    await client.close();
  }

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
