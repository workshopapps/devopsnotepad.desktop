import connection, { migrate } from "../src/database/setup.js";
import Documentator from "../src/utils/documentator/index.js";
import definition from "../src/utils/documentator/config/index.js";

export const mochaHooks = {
    async beforeAll() {
        await migrate();
        Documentator.start(definition);
    },

    async afterAll() {
        Documentator.document();
        await connection.destroy();
    },
};
