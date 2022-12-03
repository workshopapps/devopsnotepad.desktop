export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.boolean('email_verified', 255).notNullable().defaultTo(false);
    table.string('password', 255);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}
  
export async function down(knex) {
    return knex.schema.dropTable("users");
}
