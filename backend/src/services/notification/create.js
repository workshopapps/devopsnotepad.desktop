import NotificationRepo from "../../database/repositories/NotificationRepo.js";
import ServerRepo from "../../database/repositories/ServerRepo.js";
import { ServiceError } from "../../lib/errors/index.js";

export default async function create( params) {
    const { serverId, log } = params;

    const serverExists = await ServerRepo.getServerById(serverId);
    if(!serverExists){
        throw new ServiceError("An error occured while creating new logs, server do not exist");
    }

    await NotificationRepo.create(params);
    
    return{
        serverLog : log
    };
}
