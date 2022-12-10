import express from "express";
import serverRoute from "./serverRoute.js";
import notificationRoute from "./notificationRoute.js";
import userRoute from "./userRoute.js";
import contactUsRoute from "./contactUsRoute.js";

const router = express.Router();

router.use("/auth", userRoute);
router.use("/server", serverRoute);
router.use("/server", notificationRoute);
router.use("/contact-us", contactUsRoute);

export default router;
