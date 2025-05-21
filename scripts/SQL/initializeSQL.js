require("dotenv").config({ path: ".env.local" });

const {
  createBargainTable,
  dropBargainTable,
} = require("./tables/bargainTable");
const {
  createFavouritesTable,
  dropFavoritesTable,
} = require("./tables/favoritesTable");
const {
  createNoveltyTable,
  dropNoveltyTable,
} = require("./tables/noveltyTable");
const {
  createShoppingListTable,
  dropShoppingListTable,
} = require("./tables/shoppingListTable");

const { db } = require("@vercel/postgres");

/**
 * Asynchronously sets up the PostgreSQL database.
 */
async function setPostgresSQL(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await createFavouritesTable(client);
  await createShoppingListTable(client);
  await createBargainTable(client);
  await createNoveltyTable(client);
}

/**
 * Asynchronously drops existing tables.
 */
async function dropTables(client) {
  await dropFavoritesTable(client);
  await dropShoppingListTable(client);
  await dropBargainTable(client);
  await dropNoveltyTable(client);
}

/**
 * Initializes the SQL database by dropping existing tables and setting up new ones.
 */
async function initializeSQL() {
  let client;
  try {
    client = await db.connect();

    await dropTables(client);
    await setPostgresSQL(client);

    console.log("✅ SQL Database initialized successfully.");
  } catch (error) {
    console.error("❌ Error initializing SQL database:", error);
  } finally {
    if (client) {
      await client.end(); 
    }
  }
}

// Start the SQL database initialization process
initializeSQL().catch(console.dir);

module.exports = { initializeSQL };
