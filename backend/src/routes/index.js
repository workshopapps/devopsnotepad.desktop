import express from 'express';
import serverRoute from './serverRoute.js';
import notificationRoute from './notificationRoute.js';
import userRoute from './userRoute.js';


const router = express.Router();

router.use("/auth", userRoute);
router.use("/server", serverRoute);
router.use("/server", notificationRoute);

export default router;
