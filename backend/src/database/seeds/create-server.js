/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    await knex("servers").insert([
        { name: "server1", ipAddress: "localhost", deviceId: "eugr238yehfwq" },
        { name: "server2", ipAddress: "127:0:0:1", deviceId: "127gudbweif29" },
    ]);
}
