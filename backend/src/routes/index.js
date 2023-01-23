import express from "express";
import serverRoute from "./serverRoute.js";
import notificationRoute from "./notificationRoute.js";
import userRoute from "./userRoute.js";
import adminRoute from "./adminRoute.js";
import notifyMeRoute from "./notifyMeRoute.js"

const router = express.Router();

router.use("/auth", userRoute);
router.use("/server", serverRoute);
router.use("/server", notificationRoute);
router.use("/admin", adminRoute);
router.use("/notify-me", notifyMeRoute);

export default router;
