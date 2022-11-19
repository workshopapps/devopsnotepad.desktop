/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    await knex("servers").insert([
        {id: "1", name: "server1", ipAddress: "localhost"},
        {id: "2", name: "server2", ipAddress: "127:0:0:1"},
    ]);
}
