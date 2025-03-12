/**
 * Creates the "favourites" table if it does not exist.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function createFavouritesTable(client) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS favourites (
      product_id VARCHAR(24) NOT NULL,
      user_id VARCHAR(36) NOT NULL,
      PRIMARY KEY (product_id, user_id)
    );
  `;
  console.log(`Created "favourites" table`);
}

/**
 * Drops the "favourites" table if it exists.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function dropFavoritesTable(client) {
  await client.sql`
    DROP TABLE IF EXISTS favourites;
  `;
  console.log(`Dropped "favourites" table`);
}

module.exports = { createFavouritesTable, dropFavoritesTable };
