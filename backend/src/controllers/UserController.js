import create from "../services/user/followup.js";



export default class UserController {
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
}