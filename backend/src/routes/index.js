import express from 'express';
import serverRoute from './serverRoute.js';
import notificationRoute from './notificationRoute.js';
import userRoute from './userRoute.js';

const router = express.Router();

router.use('/server', serverRoute);
router.use('/server', notificationRoute);
router.use("/accounts", userRoute)

export default router;
