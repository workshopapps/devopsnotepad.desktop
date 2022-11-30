import express from 'express';
import NotificationController from '../controllers/NotificationController.js';
import { createNotificationValidator } from '../validators/notificationValidator.js';

const router = express.Router();

router.post("/:serverId/notifications", createNotificationValidator, NotificationController.create);
router.get("/:serverId/notifications", NotificationController.get);
router.get("/notifications", NotificationController.deleteWeekly);

export default router;
