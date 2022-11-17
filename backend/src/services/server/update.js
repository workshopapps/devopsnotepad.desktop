import ServerRepo from "../../database/repositories/ServerRepo.js";
import { NotFoundError } from "../../lib/errors/index.js";

export default async function update(params) {
    const { id } = params;

    const server = await ServerRepo.getServerById(id);
    if (!server) throw new NotFoundError("Server does not exist");

    await ServerRepo.updateById(id, params);

    return {
        message: "Server updated successfully",
    };
}
