/**
 * Creates the "shoppingList" table if it does not exist.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function createShoppingListTable(client) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS shoppingList (
      product_id VARCHAR(24) NOT NULL,
      user_id VARCHAR(36) NOT NULL,
      color_text VARCHAR(50) NOT NULL,
      color_hex VARCHAR(7) NOT NULL,
      ear_side VARCHAR(5) NOT NULL,
      earphone_shape VARCHAR(3) NOT NULL,
      quantity INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(10) NOT NULL,
      brand VARCHAR(50) NOT NULL,
      price DOUBLE PRECISION NOT NULL,
      discound_price DOUBLE PRECISION,
      image_url VARCHAR(255) NOT NULL,
    accessories TEXT[] NOT NULL DEFAULT '{}',
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
