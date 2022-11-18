import get from "../services/notification/get.js";

export default class NotificationController {
    static get = async (req, res, next) => {
        const { serverId } = req.params;
        const { page, range } = req.query;
        let query = {};
        if (page) {
            query.page = page;
        }
        if (range) {
            query.range = range;
        }
        try {
            const result = await get(serverId, query);
            res.send({
                success: true,
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };
}
