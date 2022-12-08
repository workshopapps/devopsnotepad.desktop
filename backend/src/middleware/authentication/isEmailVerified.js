import { AuthorizationError } from "../../lib/errors/index.js";

export default () => {
    return async (req, res, next) => {
        console.log(req.session);
        const user = req.session.user;
        if (user.email_verified === false) {
            throw new AuthorizationError("Kindly verify your email to continue.");
        }
        return next();
    }
}