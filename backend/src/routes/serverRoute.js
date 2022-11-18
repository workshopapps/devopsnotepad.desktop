import express from "express";
import ServerController from "../controllers/ServerController.js";
import NotificationController from "../controllers/notificationController.js";

const router = express.Router();

router.get("/:serverId/notifications", NotificationController.get);

router.post("/", ServerController.create);
router.patch("/", ServerController.update);

export default router;
