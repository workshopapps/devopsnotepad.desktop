import express from "express";
import NotificationController from "../controllers/NotificationController.js";

const router = express.Router();

router.post("/:serverId/notifications", NotificationController.create);
router.get("/:serverId/notifications", NotificationController.get);

export default router;