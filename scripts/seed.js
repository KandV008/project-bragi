const { initializeNoSQL } = require("./NoSQL/initializeNoSQL");
const { initializeSQL } = require("./SQL/initializeSQL");

/**
 * Initializes the NoSQL database setup by calling setMongoDB.
 *
 * @async
 * @function initializeNoSQL
 */
async function run() {
  await initializeNoSQL();
  await initializeSQL();
}

run().catch(console.dir);
