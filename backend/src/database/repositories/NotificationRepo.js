import knex from "knex";
import connection from "../setup.js";

export default class NotificationRepo {
    static getNotification = async (id, query) => {
        return connection("notifications")
            .where((qb) => {
                qb.where("serverId", id);

                //query notifications based on start and end date, url will be in this format:
                //http://localhost:3000/server/1/notifications?to=2022-11-19T00:57:21:000z&from=2022-11-16
                if (query.range) {
                    qb.where("createdAt", ">", knex.raw(`CURRENT_DATE - '7 DAY'::INTERVAL`));
                    // qb.where("createdAt", [query.from, new Date().toISOString()]);
                }
            })
            .limit(10)
            .offset((parseInt(query.page) - 1) * 10 || 0)
            .orderBy("createdAt", "desc");
    };
}
