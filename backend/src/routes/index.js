import express from 'express';
import serverRoute from './serverRoute.js';


const router = express.Router();

router.use('/server', serverRoute);

export default router;