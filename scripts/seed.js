require("dotenv").config({ path: ".env.local" });

const { MongoClient, ServerApiVersion } = require("mongodb"); // Use require instead of import
const { docs } = require("./data"); // Require docs from data.js
const { db } = require("@vercel/postgres");

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@clusterprojectbragi.fulvzjc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectBragi`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const clientMongoDB = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function setMongoDB() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await clientMongoDB.connect();

    // database and collection code goes here
    const db = clientMongoDB.db("Product-DDBB");
    const coll = db.collection("products");

    // insert code goes here
    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);

    console.log("Database seeded. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(`ERROR: MongoDB not set. ${error}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await clientMongoDB.close();
  }
}

async function setPostgresSQL() {
  try {
    const client = await db.connect();

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "favourites" table with a composite primary key
    await client.sql`
    CREATE TABLE IF NOT EXISTS favourites (
      product_id VARCHAR(24) NOT NULL,
      user_id VARCHAR(36) NOT NULL,
      PRIMARY KEY (product_id, user_id)
    );
  `;

    console.log(`Created "favourites" table`);

    // Create the "shoppingList" table with a composite primary key
    await client.sql`
    CREATE TABLE IF NOT EXISTS shoppingList (
      product_id VARCHAR(24) NOT NULL,
      user_id VARCHAR(36) NOT NULL,
      color VARCHAR(255) NOT NULL,
      ear_side VARCHAR(255) NOT NULL,
      guarantee BOOLEAN NOT NULL,
      quantity INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      price DOUBLE PRECISION NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      PRIMARY KEY (product_id, user_id, color, ear_side, guarantee)
    );
  `;

    console.log(`Created "shoppingList" table`);
  } catch (error) {
    console.log(`ERROR: PostgresSQL not set. ${error}`);
  }
}

async function dropTables() {
  try {
    const client = await db.connect();

    // Drop the "favourites" table
    await client.sql`
      DROP TABLE IF EXISTS favourites;
    `;
    console.log(`Dropped "favourites" table`);

    // Drop the "shoppingList" table
    await client.sql`
      DROP TABLE IF EXISTS shoppingList;
    `;
    console.log(`Dropped "shoppingList" table`);
  } catch (error) {
    console.error("Error dropping tables:", error);
  }
}

async function run() {
  await setMongoDB();
  await dropTables();
  await setPostgresSQL();
}

run().catch(console.dir);
