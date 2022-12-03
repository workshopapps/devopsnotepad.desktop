import UserRepo from "../../database/repositories/UserRepo.js";
import { AuthenticationError } from '../../lib/errors/index.js';
import { decodeToken } from "../../utils/index.js";

export default () => {
    return async (req, res, next) => {
        try {
            if (req.cookies["connect.sid"] && req.session.authorized) {
                return next();
            }

            const authorization = req.header('authorization') || '';
            const token = authorization.split(' ')[1];
            if (!token) {
                throw new AuthenticationError('you need to be authenticated to access this endpoint');
            }

            const { id, counter } = await decodeToken(token);

            if (!id && !counter) {
                return next(new AuthenticationError('unable to verify token'));
            }
            const user = await UserRepo.getUserById(id);
            if (!user) {
                return next(new AuthenticationError('token is invalid'));
            }

            return next();
        } catch (e) {
            switch (e.name) {
                case 'TokenExpiredError':
                    return next(new AuthenticationError('token has expired'));
                case 'JsonWebTokenError':
                    return next(new AuthenticationError(e.message));
                case 'NotBeforeError':
                    return next(new AuthenticationError(e.message));
                default:
                    return next(e);
            }
        }
    }
}