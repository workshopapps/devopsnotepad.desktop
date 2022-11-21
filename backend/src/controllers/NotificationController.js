import create from '../services/notification/create.js';
import get from "../services/notification/get.js";
import { validatePayload } from '../utils/index.js';
export default class NotificationController {
    static create = async (req, res, next) => {
        try {
        /**
       * Validate Request
       */
            const errors = validatePayload(req);

            if (errors && Object.keys(errors).length > 0) throw errors;

            const result = await create(req.body, req.params);

            res.send({
                success: true,
                message: 'successful',
                ...result,
            });
        } catch (error) {
            next(error);
        }
    };


    // static create = async (req, res, next) => {
    //     try {
    //         const result = await create(req.body, req.params);
    //         res.send({
    //             success: true,
    //             message: "successful",
    //             ...result,
    //         });

    //     } catch (error) {
    //         next(error);
    //     }
    // };

    
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


