import NotificationRepo from "../../database/repositories/notificationRepo.js";
import { NotFoundError } from "../../lib/errors/index.js";

export default async function get(params, query) {
    let notifications;
    switch (query.range) {
    case "weekly":
        notifications = await NotificationRepo.getWeeklyNotifications(params, query);
        break;
    case "monthly":
        notifications = await NotificationRepo.getMonthlyNotifications(params, query);
        break;
    default:
        notifications = await NotificationRepo.getNotifications(params, query);
        break;
    }
    if (!notifications) throw new NotFoundError("An error occured while fetching notifications");
    return {
        notifications,
    };
}
