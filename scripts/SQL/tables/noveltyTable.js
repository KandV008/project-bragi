/**
 * Inserts predefined novelty records into the "novelty" table.
 * 
 * @param {object} client - The PostgreSQL client instance.
 */
async function addNovelties(client) {
  await client.sql`
      INSERT INTO novelty (title, description, promotional_image)
      VALUES ('Novedad 1', 'Esta novedad es muy chula', '/placeholder-carousel.avif');
    `;

  await client.sql`
      INSERT INTO novelty (title, description, promotional_image)
      VALUES ('Novedad 2', 'Esta novedad es mucho más chula', '/placeholder-carousel.avif');
    `;

  await client.sql`
      INSERT INTO novelty (title, description, promotional_image)
      VALUES ('Novedad 3', 'Esta novedad no es muy chula', '/placeholder-carousel.avif');
    `;

  await client.sql`
      INSERT INTO novelty (title, description, promotional_image)
      VALUES ('Novedad 4', 'Esta novedad no es mucho más chula', '/placeholder-carousel.avif');
    `;

    console.log("Inserted rows into 'novelty' table");
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
        description VARCHAR(255) NOT NULL,
        promotional_image VARCHAR(255) NOT NULL
      );
    `;

  console.log(`Created "novelty" table`);

  addNovelties(client);
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
