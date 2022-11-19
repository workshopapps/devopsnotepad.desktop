import connection from "../setup.js";
import APIFeatures from "../../utils/apiFeatures.js";

export default class NotificationRepo {
    static getNotifications = async (id, query) => {
        const dbQuery = connection("notifications")
            .where("serverId", id);
        return new APIFeatures(dbQuery, query)
            .paginate()
            .sort()
            .query; 
    };

    static getWeeklyNotifications = async (id, query) => {
        const dbQuery = connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`createdAt BETWEEN NOW() - INTERVAL 1 WEEK AND NOW()`));
        return new APIFeatures(dbQuery, query)
            .paginate()
            .sort()
            .query;
    };

    static getMonthlyNotifications = async (id, query) => {
        const dbQuery = connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`createdAt BETWEEN NOW() - INTERVAL 1 MONTH AND NOW()`));
        return new APIFeatures(dbQuery, query)
            .paginate()
            .sort()
            .query;
    };
}
