import NotificationRepo from "../../database/repositories/notificationRepo.js";
import { NotFoundError } from "../../lib/errors/index.js";

export default async function get(params, query) {
    const notifications = await NotificationRepo.getNotification(params, query);
    if (!notifications) throw new NotFoundError("An error occured while fetching notifications");
    return {
        notifications,
    };
}
