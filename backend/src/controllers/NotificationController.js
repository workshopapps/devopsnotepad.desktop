import get from "../services/notification/get.js";

export default class NotificationController {
    static get = async (req, res, next) => {
        const { serverId } = req.params;

        let query = {};
        for (let queryParameter of Object.keys(req.query)) {
            if (queryParameter === "limit" || 
            queryParameter === "page" || 
            queryParameter === "range" || 
            queryParameter === "range");
            query[queryParameter] = req.query[queryParameter];
        }

        try {
            const result = await get(serverId, query);
            res.send({
                success: true,
                ...result,
                page: query.page || 1,
            });
        } catch (error) {
            next(error);
        }
    };
}
