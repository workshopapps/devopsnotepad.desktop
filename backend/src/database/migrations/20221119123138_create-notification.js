export async function up(knex) {
    return knex.schema.createTable('notifications', table => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
        table.uuid("serverId").notNullable();
        table.foreign("servers");
        table.string('log', 900).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table
            .dateTime('updated_at')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
}


export function down(knex) {
    return knex.schema.dropTable('notifications');
}
