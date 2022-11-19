export async function up(knex) {
  return knex.schema.createTable('servers', (table) => {
<<<<<<< HEAD
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
=======
    table.uuid('id').primary().defaultTo(knex.schema.raw('(UUID())'));
>>>>>>> b53b0f9a0aab2ad9fdde4ade15a9e81503e0269c
    table.string('name', 255).notNullable();
    table.string('ipAddress', 255).notNullable();
    table.string('deviceId', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export function down(knex) {
  return knex.schema.dropTable('servers');
}
