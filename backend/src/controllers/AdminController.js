import create from "../services/Admin/followUp.js";
import get from "../services/Admin/getFollowUpUsers.js";
import support from "../services/Admin/support.js";
import { validatePayload } from "../utils/index.js";



export default class AdminController {
    static followup = async (req, res, next) => {
        try {
            const result = await create(req.body);
            res.send({
                "message": "successful"
            })
        } catch (error) {
            next(error)
        }
    }

    static support = async (req, res, next) => {
        try {

            const errors = validatePayload(req);
            if (errors && Object.keys(errors).length > 0) throw errors;
            const payload = await support(req.body);

            res.json({
                success: true,
                message: "message sent successfully",
                ...payload
            });

        }catch (error){
            next(error);
        }
    };

    static getFollowUpUsers = async (req, res, next) => {
        try {
            const csv = await get();
            res.set({ 'Content-Disposition': 'attachment; filename="contacts.csv"', 'Content-type': 'text/csv' });
            res.send(csv);

        } catch (error) {
            next(error);
        }
    }
}