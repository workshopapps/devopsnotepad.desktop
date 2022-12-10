export async function up(knex) {
    return knex.schema.createTable("contact_us", (table) => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
        table.string("firstname", 100).notNullable();
        table.string("lastname", 100).notNullable();
        table.string("email", 200).notNullable();
        table.string("subject", 255).notNullable();
        table.string("message", 900).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.dateTime("updated_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
}
    
export async function down(knex) {
    return knex.schema.dropTable("contact_us");
}
  