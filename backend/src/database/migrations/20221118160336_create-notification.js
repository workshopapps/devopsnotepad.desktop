/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export async function up(knex) {
    return knex.schema.createTable('notifications', (table) => {
        table.uuid('id').primary().defaultTo(knex.schema.raw('(UUID())'));
        table.string('notificationLog', 900).notNullable();
        table.uuid('serverId').references('id').inTable('servers').onUpdate('CASCADE').onDelete('CASCADE');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('notifications');
  }
  
