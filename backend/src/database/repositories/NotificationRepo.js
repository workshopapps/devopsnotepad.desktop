import connection from "../setup.js";
import APIFeatures from "../../middleware/application/apiFeatures.js";

export default class NotificationRepo {
    static getNotifications = async (id, query) => {
        return new APIFeatures(connection("notifications")
            .where("serverId", id), query)
            .paginate()
            .sort()
            .query; 
    };

    static getWeeklyNotifications = async (id, query) => {
        return new APIFeatures(connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`createdAt BETWEEN NOW() - INTERVAL 1 WEEK AND NOW()`)),
        query)
            .paginate()
            .sort()
            .query;
    };

    static getMonthlyNotifications = async (id, query) => {
        return new APIFeatures(connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`createdAt BETWEEN NOW() - INTERVAL 1 MONTH AND NOW()`)),
        query)
            .paginate()
            .sort()
            .query;
    };
}
