import UserRepo from '../../database/repositories/UserRepo.js';
import { AuthenticationError } from '../../lib/errors/index.js';

export default () => {
  return async (req, res, next) => {
    try {
      if (!(req.cookies['connect.sid'] && req.session.authorized)) {
        throw new AuthenticationError('Session has expired.');
      }

      const { id } = req.session.user;

      const user = await UserRepo.getUserById(id);
      if (!user) {
        return next(new AuthenticationError('unauthorized request'));
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
  };
};
