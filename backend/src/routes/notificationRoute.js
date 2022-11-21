import express from 'express';
import NotificationController from '../controllers/NotificationController.js';
import { createNotificationValidator } from '../validators/notificationValidator.js';

const router = express.Router();

router.post('/:serverId/notifications', createNotificationValidator, NotificationController.create);

export default router;
