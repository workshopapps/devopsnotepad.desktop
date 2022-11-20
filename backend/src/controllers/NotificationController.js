import create from '../services/notification/create.js';
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
}
