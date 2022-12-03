import connection from "../setup.js";
import APIFeatures from "../../utils/apiFeatures.js";

export default class NotificationRepo {
    static create = async (data) => {
        return await connection("notifications").insert(data);
    };

    static getNotifications = async (id, query) => {
        const dbQuery = connection("notifications").where("serverId", id);
        return new APIFeatures(dbQuery, query).paginate().sort().query;
    };

    static getWeeklyNotifications = async (id, query) => {
        const dbQuery = connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`created_at BETWEEN NOW() - INTERVAL 1 WEEK AND NOW()`));
        return new APIFeatures(dbQuery, query).paginate().sort().query;
    };

    static getMonthlyNotifications = async (id, query) => {
        const dbQuery = connection("notifications")
            .where("serverId", id)
            .andWhere(connection.raw(`created_at BETWEEN NOW() - INTERVAL 1 MONTH AND NOW()`));
        return new APIFeatures(dbQuery, query).paginate().sort().query;
    };

    static deleteWeeklyNotifications = async () => {
        const dbQuery = connection("notifications")
            .where(connection.raw(`DATEDIFF(CURDATE(), DATE(created_at)) > 7`))
            .del();

        return dbQuery;
    }
}
 