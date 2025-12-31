/**
 * Inserts predefined bargain records into the "bargain" table.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function addBargains(client) { // TODO Check this predefined
  await client.sql`
    INSERT INTO bargain (code, title, description, requirements, status)
    VALUES (
      '70PERC', 
      '30% de descuento por la compra de un audífono', 
      'Si compra mínimo de una unidad de audífono de un modelo, se te cobrará solo el 70% de su valor.',
      ARRAY['Solo audífonos', 'Solo se aplica a uno (el más barato)'],
      true      
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
        code VARCHAR(6),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        requirements TEXT[],
        status BOOLEAN DEFAULT false NOT NULL
      );
    `;

  console.log(`Created "bargain" table`);

  await addBargains(client);
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

