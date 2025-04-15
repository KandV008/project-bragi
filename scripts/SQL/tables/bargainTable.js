/**
 * Inserts predefined bargain records into the "bargain" table.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function addBargains(client) { // TODO Check this predefined
  await client.sql`
    INSERT INTO bargain (code, title, description, requirements)
    VALUES (
      '2POR1', 
      '2x1 en audífonos de la misma marca', 
      'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.',
      ARRAY['Solo audífonos de la misma marca', 'Han de ser el mismo modelo o CROS', 'Han de ser de oídos distintos']      
    );
  `;

  console.log("Inserted rows into 'bargain' table");
}

/**
 * Creates the "bargain" table if it does not exist and populates it with initial data.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function createBargainTable(client) {
  await client.sql`
      CREATE TABLE IF NOT EXISTS bargain (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        code VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        requirements TEXT[]
      );
    `;

  console.log(`Created "bargain" table`);

  addBargains(client);
}

/**
 * Drops the "bargain" table if it exists.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function dropBargainTable(client) {
  await client.sql`
    DROP TABLE IF EXISTS bargain;
  `;
  console.log(`Dropped "bargain" table`);
}

module.exports = { createBargainTable, dropBargainTable };

