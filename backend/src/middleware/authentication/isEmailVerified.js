import { AuthorizationError } from '../../lib/errors/index.js';

export default (user) => {
        try {
            if (user.email_verified === 0) {
                throw new AuthorizationError("Kindly verify your email to continue.");
            }
        } catch (error) {
            throw new AuthorizationError(error.message)
        }
        
    }
