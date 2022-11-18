import knex from "knex";
import { development } from "../../knexfile.js";

const connection = knex(development);

export const migrate = async () => {
    await connection.migrate.latest();
    console.log("Migration complete");
};

export default connection;
