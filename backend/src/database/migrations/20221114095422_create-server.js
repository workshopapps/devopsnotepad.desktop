
export async function up(knex) {
    return knex.schema.createTable('servers', table => {
        table.uuid("id").primary().defaultTo(knex.schema.raw("(UUID())"));
        table.string('name', 255).notNullable();
        table.string('ipAddress', 255).notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table
            .dateTime('updatedAt')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
}


export function down(knex) {
    return knex.schema.dropTable('servers');
}
