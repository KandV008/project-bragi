/**
 * Inserts predefined novelty records into the "novelty" table.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function addNovelties(client) {
  const novelty1 = {
    title: "30% de descuento por la compra de un audífono",
    code: "70PERC",
    description: "Si compra una unidad de audífono de un modelo, se te cobrará solo el 70% de su valor.",
    promotionalImage: "/placeholder-carousel.avif",
    type: "SPECIFIC",
    context: "SHOPPING-LIST",
    endDate: new Date(2026, 9, 14).toISOString()
  };

  await client.sql`
    INSERT INTO novelty (title, code, description, promotional_image, type, context, end_date)
    VALUES (${novelty1.title}, ${novelty1.code}, ${novelty1.description}, 
            ${novelty1.promotionalImage}, ${novelty1.type}, ${novelty1.context}, 
            ${novelty1.endDate});
  `;

  console.log("Inserted novelty into 'novelty' table");
}


/**
 * Creates the "novelty" table if it does not exist and populates it with initial data.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function createNoveltyTable(client) {
  await client.sql`
      CREATE TABLE IF NOT EXISTS novelty (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        code VARCHAR(255),
        description VARCHAR(255) NOT NULL,
        promotional_image VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        context VARCHAR(255) NOT NULL,
        end_date TIMESTAMP NOT NULL
      );
    `;

  console.log(`Created "novelty" table`);

  await addNovelties(client);
}

/**
 * Drops the "novelty" table if it exists.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function dropNoveltyTable(client) {
  await client.sql`
    DROP TABLE IF EXISTS novelty;
  `;
  console.log(`Dropped "novelty" table`);
}

module.exports = { createNoveltyTable, dropNoveltyTable };
