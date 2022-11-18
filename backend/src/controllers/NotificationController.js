import create from "../services/notification/create.js";

export default class NotificationController {
    static create = async (req, res, next) => {
        try {
            const result = await create(req.body);
            
            res.send({
                success: true,
                message: "successful",
                ...result,
            });

        } catch (error) {
            next(error);
        }
    };
}