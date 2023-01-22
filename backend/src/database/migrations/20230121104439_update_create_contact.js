export async function up(knex) {
    return knex.schema.alterTable("contact_us", (table) => {
        table.dropColumn("subject");
        table.string("message", 900).alter();
        table.string("company", 900).notNullable();
        table.string("role", 900).notNullable();
    });
}
    
export async function down(knex) {
    return knex.schema.dropTable("contact_us");
}
  