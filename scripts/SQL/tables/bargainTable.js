/**
 * Inserts predefined bargain records into the "bargain" table.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function addBargains(client) {
  await client.sql`
    INSERT INTO bargain (code, title, description)
    VALUES ('3POR2', '3x2 en audífonos de la misma marca', 'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.');
  `;

  await client.sql`
    INSERT INTO bargain (code, title, description)
    VALUES ('4POR3', '4x3 en audífonos de la misma marca', 'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.');
  `;

  await client.sql`
    INSERT INTO bargain (code, title, description)
    VALUES ('5POR4', '5x4 en audífonos de la misma marca', 'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.');
  `;

  await client.sql`
    INSERT INTO bargain (code, title, description)
    VALUES ('6POR5', '6x5 en audífonos de la misma marca', 'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.');
  `;

  await client.sql`
    INSERT INTO bargain (code, title, description)
    VALUES ('7POR6', '7x6 en audífonos de la misma marca', 'Por la compra de dos audífonos de la misma marca, solo te cobraremos uno de ellos.');
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
        description VARCHAR(255) NOT NULL
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

