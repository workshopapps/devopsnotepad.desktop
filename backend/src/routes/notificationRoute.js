import express from 'express';
import NotificationController from '../controllers/NotificationController.js';
import { createNotificationValidator } from '../validators/notificationValidator.js';
import isAuthenticated from '../middleware/authentication/isAuthenticated.js'

const router = express.Router();

router.post("/:serverId/notifications", createNotificationValidator, NotificationController.create);
router.get("/:serverId/notifications", NotificationController.get);

export default router;
