export async function up(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('users');
  }