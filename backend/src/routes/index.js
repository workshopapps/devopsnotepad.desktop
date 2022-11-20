import express from 'express';
import serverRoute from './serverRoute.js';
import notificationRoute from './notificationRoute.js';

const router = express.Router();

router.use('/server', serverRoute);
router.use('/server', notificationRoute);

export default router;
