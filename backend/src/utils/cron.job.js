import cron from 'node-cron';
import admin from "firebase-admin"
import fcm from "fcm-notification";
import firebaseConfig from "./firebaseConfig.js";
import connection from '../database/setup.js';
import { ServiceError } from '../lib/errors/index.js';
import { check_ip_status } from './index.js';

const FCM = new fcm(admin.credential.cert(firebaseConfig));

export default function CheckForFailingIpAddresses(){

    //*/5 * * * *
    cron.schedule("*/5 * * * *", async () =>{

        let serversWithToken = await connection('servers').whereNotNull('fcmToken');

        if (serversWithToken.length)

        serversWithToken.forEach(async (e) => {

            if (!await check_ip_status(e.ipAddress)) 
                sendNotification({
                    ipAddress: e.ipAddress, 
                    registraionToken:e.fcmToken
                });

        })
    })
}

function sendNotification(payload){

    try{

        let message = {
            android: {
                notification: {
                    title: "IMPORTANT",
                    body: `Server - ${payload.ipAddress} is down`,
                },
            },
            token: payload.registrationToken
        };
    
        FCM.send(message, (err, response) => {
            if(err)
                throw new ServiceError(err);
        });

    }catch(err){
        throw new ServiceError(err)
    }
}