import connection from "../setup.js";

export default class NotificationRepo {
      
    static create = async (data) => {
        return await connection("notifications")
            .insert(data);
    };

    static getNotificationById = async (id) => {
        return connection("notifications").where("notification_id", id).first();
    };

}