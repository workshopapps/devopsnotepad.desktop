import express from 'express';
import serverRoute from './serverRoute.js';
import notificationRoute from './notificationRoute.js';
import userRoute from './userRoute.js';
import authenticate from '../middleware/application/authenticate.js';


const router = express.Router();

router.use("/auth", userRoute);
router.use("/server", authenticate, serverRoute);
router.use("/server", authenticate, notificationRoute);

export default router;
