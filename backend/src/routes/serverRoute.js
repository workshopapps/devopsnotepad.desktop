import express from 'express';
import ServerController from '../controllers/ServerController.js';

const router = express.Router();

router.post("/", ServerController.create);
router.patch("/", ServerController.update);

export default router;
