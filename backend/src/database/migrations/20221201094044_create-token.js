export async function up(knex) {
    return knex.schema.createTable("tokens", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
        table.string("userId", 255).notNullable();
        table.string("token", 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}
  
export async function down(knex) {
    return knex.schema.dropTable("tokens");
}