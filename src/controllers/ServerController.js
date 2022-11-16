import create from "../services/server/create.js";
import { deleteSeverById, deleteSeversById } from "../services/server/delete.js";
import update from "../services/server/update.js";

export default class ServerController {
  static create = async (req, res, next) => {
    try {
      const result = await create(req.body);

      res.send({
        success: true,
        message: "server created successfully",
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const result = await update(req.body);

      res.send({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };
  static deleteServerById = async (req, res, next) => {
    try {
      const result = await deleteSeverById(req.params);
      res.send({
        success: true,
        message: "server deleted successfully",
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
        message: "servers deleted successfully",
        result,
      });
    } catch (error) {
      next(error);
    }
  };
}
