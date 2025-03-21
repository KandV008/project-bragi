/**
 * Creates the "shoppingList" table if it does not exist.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function createShoppingListTable(client) {
  // TODO: Optimize space
  await client.sql`
    CREATE TABLE IF NOT EXISTS shoppingList (
      product_id VARCHAR(24) NOT NULL,
      user_id VARCHAR(36) NOT NULL,
      color_text VARCHAR(255) NOT NULL,
      color_hex VARCHAR(255) NOT NULL,
      ear_side VARCHAR(255) NOT NULL,
      earphone_shape VARCHAR(255) NOT NULL,
      quantity INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      price DOUBLE PRECISION NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      PRIMARY KEY (product_id, user_id, color_text, color_hex, ear_side)
    );
  `;
  console.log(`Created "shoppingList" table`);
}

/**
 * Drops the "shoppingList" table if it exists.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function dropShoppingListTable(client) {
  await client.sql`
    DROP TABLE IF EXISTS shoppingList;
  `;
  console.log(`Dropped "shoppingList" table`);
}

module.exports = { createShoppingListTable, dropShoppingListTable };
