import express from 'express';
import ServerController from '../controllers/ServerController.js';

const router = express.Router();

router.post('/', ServerController.create);
router.patch('/', ServerController.update);
router.delete('/', ServerController.deleteServersById);

export default router;
