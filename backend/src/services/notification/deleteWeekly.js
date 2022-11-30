import NotificationRepo from "../../database/repositories/NotificationRepo.js";
import { ServiceError } from "../../lib/errors/index.js";
import cron from "node-cron";

export default async function deleteWeekly() {
    let notifications = [];
    
    notifications = await NotificationRepo.deleteWeeklyNotifications();
   
    if (!notifications) throw new ServiceError("An error occured while fetching notifications");
    return {
        notifications,
    };
}


cron.schedule('0 0 * * *', deleteWeekly);