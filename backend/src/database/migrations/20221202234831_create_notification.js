
export async function up (knex) {
    return knex.schema.createTable('notifications', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
        table.uuid('serverId', 255).notNullable();
        table.foreign('servers');
        table.string('logs', 900).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
}


export async function down (knex) {
    return knex.schema.dropTable("notifications");
}
