import ServerRepo from "../../database/repositories/ServerRepo.js";
import ping from "ping";
import admin from "firebase-admin"
import fcm from "fcm-notification";
import cron from "node-cron";
import { NotFoundError, ServiceError } from "../../lib/errors/index.js";
import firebaseConfig from "../../utils/firebaseConfig.js";

export default async function pushNotificationForServer(request){

    const server = await ServerRepo.getServerById(request.params.server_id);

    if (!server) throw new NotFoundError("server not found");

    if(request.body.registrationToken == "") throw new ServiceError("no registration token present");

    cron.schedule("*/5 * * * *", async () =>{
        let ipstatus = await ping.promise.probe(server.ipAddress);
        if (!ipstatus.alive) sendNotification({ipstatus, request})
    })

}

function sendNotification(payload){

    let FCM = new fcm(admin.credential.cert(JSON.stringify(firebaseConfig)));

    let message = {
        android: {
            notification: {
                title: "IMPORTANT",
                body: `Server - ${payload.ipstatus.host} is still down`,
            },
        },
        token: payload.request.body.registrationToken
    };

    FCM.send(message, function(err, resp) {
        if(err)
            console.log("Error sending notification");
    });
}
