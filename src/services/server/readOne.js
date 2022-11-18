import ServerRepo from "../../database/repositories/ServerRepo.js";
import { NotFoundError } from "../../lib/errors/index.js";

export default async function readMany(params) {
    const { server_id } = params;

    const server = await ServerRepo.getServerById(server_id);
    if (!server) throw new NotFoundError("The server you're requesting does not exist.");

    return {
        server,
    };
}
