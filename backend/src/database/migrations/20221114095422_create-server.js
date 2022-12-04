export async function up(knex) {
  return knex.schema.createTable('servers', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('name', 255).notNullable();
    table.string('ipAddress', 255).notNullable();
    table.uuid("userId").notNullable();
    table.foreign("users");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export function down(knex) {
  return knex.schema.dropTable('servers');
}
