import create from "../services/server/create.js";
import getAllServers from "../services/server/getAll.js";
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

    static getAllServers = async (req, res, next) => {
        try {
            const result = await getAllServers(req.query);
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
