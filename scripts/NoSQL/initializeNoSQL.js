require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion } = require("mongodb"); 
const { phonakProducts, phonakAccessories } = require("./PHONAK/PHONAK-data");

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@clusterprojectbragi.fulvzjc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectBragi`;

const clientMongoDB = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/**
 * Connects to MongoDB, inserts product data into the "products" collection, and logs results.
 *
 * @async
 * @function setMongoDB
 * @throws Will log an error if the connection or insertion fails.
 */
async function setMongoDB() {
  try {
    await clientMongoDB.connect();

    const db = clientMongoDB.db("Product-DDBB");
    const coll = db.collection("products");

    const earphonesResult = await coll.insertMany(phonakProducts);
    console.log(earphonesResult.insertedIds);

    const accessoriesResult = await coll.insertMany(phonakAccessories);
    console.log(accessoriesResult.insertedIds);

    console.log("Database seeded. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(`ERROR: MongoDB not set. ${error}`);
  } finally {
    await clientMongoDB.close();
  }
}

/**
 * Initializes the NoSQL database setup by calling setMongoDB.
 *
 * @async
 * @function initializeNoSQL
 */
async function initializeNoSQL() {
    await setMongoDB();
} 

// Start the NoSQL database initialization process
initializeNoSQL().catch(console.dir)

module.exports = { initializeNoSQL };
