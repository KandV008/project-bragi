require("dotenv").config({ path: ".env.local" });

const { createBargainTable, dropBargainTable } = require("./tables/bargainTable");
const { createFavouritesTable, dropFavoritesTable } = require("./tables/favoritesTable");
const { createNoveltyTable, dropNoveltyTable } = require("./tables/noveltyTable");
const { createShoppingListTable, dropShoppingListTable } = require("./tables/shoppingListTable");

const { db } = require("@vercel/postgres");

/**
 * Asynchronously sets up the PostgreSQL database.
 * - Connects to the database.
 * - Ensures the `uuid-ossp` extension is enabled.
 * - Creates necessary tables.
 * Logs errors if the setup fails.
 */
async function setPostgresSQL() {
  try {
    const client = await db.connect();

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    createFavouritesTable(client);
    createShoppingListTable(client);
    createBargainTable(client);
    createNoveltyTable(client);
  } catch (error) {
    console.log(`ERROR: PostgresSQL not set. ${error}`);
  } finally {
    await client.end();
    process.exit(0);
  }
}

/**
 * Asynchronously drops existing tables.
 * Logs errors if the process fails.
 */
async function dropTables() {
  try {
    const client = await db.connect();

    await dropFavoritesTable(client)
    await dropShoppingListTable(client)
    await dropBargainTable(client);
    await dropNoveltyTable(client);
  } catch (error) {
    console.error("Error dropping tables:", error);
  }
}

/**
 * Initializes the SQL database by dropping existing tables and setting up new ones.
 */
async function initializeSQL() {
  await dropTables();
  await setPostgresSQL();
}

// Start the SQL database initialization process
initializeSQL().catch(console.dir)

module.exports = { initializeSQL };