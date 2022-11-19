import ServerRepo from "../../database/repositories/ServerRepo.js";
import { NotFoundError } from "../../lib/errors/index.js";

export default async function readMany(params) {
    const { serverId } = params;

    const server = await ServerRepo.getServerById(serverId);
    if (!server) throw new NotFoundError("The server you're requesting does not exist.");

    return {
        server,
    };
}
