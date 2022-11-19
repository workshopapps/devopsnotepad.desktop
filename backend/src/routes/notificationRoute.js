import express from "express";
import NotificationController from "../controllers/NotificationController.js";

const router = express.Router();

router.post("/:serverId/notifications", NotificationController.create);

export default router;