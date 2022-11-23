export async function up(knex) {
    return knex.schema.createTable('notifications', table => {
<<<<<<< HEAD
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
        table.uuid("serverId").notNullable();
        table.foreign("servers");
=======
        table.uuid("notificationId").primary().defaultTo(knex.schema.raw("(UUID())"));
        table.uuid("serverId").defaultTo(knex.schema.raw("(UUID())"));
        table.foreign("serverId");
>>>>>>> 0840880f6416fea392b33501883bb1def77c9b78
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
