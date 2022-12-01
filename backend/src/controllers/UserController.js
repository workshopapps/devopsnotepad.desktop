import create from "../services/user/create.js";

export default class UserController {
    static signup = async (req, res, next) => {
        try {
            await create(req.body);

            res.status(201).json({
                success: true,
                message: "signup successful",
                user: req.body
            });
        } catch (error) {
            next(error);
        }
    };
}
