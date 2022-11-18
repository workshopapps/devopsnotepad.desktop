import create from "../services/server/create.js";
import readMany from "../services/server/readMany.js";
import readOne from "../services/server/readOne.js";
import update from "../services/server/update.js";

export default class ServerController {
    static create = async (req, res, next) => {
        try {
            const result = await create(req.body);

            res.send({
                success: true,
                message: "server created successfully",
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };

    static readMany = async (req, res, next) => {
        try {
            const result = await readMany(req.query);
            res.send({
                success: true,
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };

    static readOne = async (req, res, next) => {
        try {
            const result = await readOne(req.params);
            res.send({
                success: true,
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };

    static update = async (req, res, next) => {
        try {
            const result = await update(req.body);

            res.send({
                success: true,
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };
}
