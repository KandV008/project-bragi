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
        // Ensures that the client will close when you finish/error
        await client.close();
      }

      return products;
}

export async function getProduct(id:string | null): Promise<ProductEntity | null> {
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
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
