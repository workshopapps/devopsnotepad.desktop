import create from '../services/server/create.js';
import getAllServers from '../services/server/getAll.js';
import update from '../services/server/update.js';
import deleteSeversById from '../services/server/delete.js';

import { validatePayload } from '../utils/index.js';
import pushNotificationForServer from '../services/server/pushNotificationForServer.js';

export default class ServerController {
  static create = async (req, res, next) => {
    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      console.log(req.body);

      const result = await create(req.body);

      res.send({
        success: true,
        message: 'server created successfully',
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };
  static getAllServers = async (req, res, next) => {
    try {
      const result = await getAllServers(req.query);
      res.send({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      const result = await update(req.body);
      res.send({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };

  static deleteServersById = async (req, res, next) => {
    try {
      const result = await deleteSeversById(req.body);
      res.send({
        success: true,
        message: 'servers deleted successfully',
        result,
      });
    } catch (error) {
      next(error);
    }
  };

  static subscribe = async (req, res, next) => {
    try {
      await pushNotificationForServer(req);

      res.send({
        success: true,
        message: 'Subscription successful',
      });
    } catch (error) {
      next(error);
    }
  };
}
