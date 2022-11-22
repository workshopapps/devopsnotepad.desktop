import ServerRepo from "../../database/repositories/ServerRepo.js";
import { NotFoundError, ServiceError } from "../../lib/errors/index.js";
import CheckForFailingIpAddresses from "../../utils/cron.job.js";


export default async function pushNotificationForServer(request){

    const server = await ServerRepo.getServerById(request.params.server_id);

    if (!server) throw new NotFoundError("server not found");

    if(request.body.registrationToken == "") throw new ServiceError("no registration token present");

    await ServerRepo.updateById(request.params.server_id, {fcmToken: request.body.registrationToken});
    
    return;

}


