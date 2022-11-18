import express from "express";
import NotificationController from "../controllers/NotificationController.js";

const router = express.Router();

router.post("/:server_id/notifications", NotificationController.create);

export default router;