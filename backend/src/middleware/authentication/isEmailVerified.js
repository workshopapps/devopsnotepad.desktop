import { AuthorizationError } from "../../lib/errors/index.js";

export default () => {
    return async (req, res, next) => {
        try {
            const user = req.session.user;
            if (user.email_verified === 0) {
                throw new AuthorizationError("Kindly verify your email to continue.");
            }
            return next(); 
        } catch (error) {
            next(error);
        }
        
    }
}