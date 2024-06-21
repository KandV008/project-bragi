// seed.js
require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion } = require("mongodb"); // Use require instead of import
const { docs } = require('./data'); // Require docs from data.js

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@clusterprojectbragi.fulvzjc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectBragi`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // database and collection code goes here
    const db = client.db("Product-DDBB");
    const coll = db.collection("products");

    // insert code goes here
    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);

    console.log("Database seeded. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
