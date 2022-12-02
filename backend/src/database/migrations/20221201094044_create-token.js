export async function up(knex) {
    return knex.schema.createTable("tokens", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
        table.string("userId", 255).notNullable();
        table.string("token", 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("expires_at").defaultTo(knex.raw("SELECT date_add(?, INTERVAL ? hour)", [knex.fn.now(), 1]));
    });
}
  
export async function down(knex) {
    return knex.schema.dropTable("tokens");
}