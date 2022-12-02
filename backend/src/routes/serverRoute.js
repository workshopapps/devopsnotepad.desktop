import express from 'express';
import ServerController from '../controllers/ServerController.js';
import isAuthenticated from '../middleware/authentication/isAuthenticated.js';
import { createServerValidator, updateServerValidator } from '../validators/serverValidators.js';

const router = express.Router();

router.post('/', createServerValidator, isAuthenticated() , ServerController.create);
router.patch('/', updateServerValidator, ServerController.update);
router.get('/', ServerController.getAllServers);
router.post('/delete', ServerController.deleteServersById);
router.post('/:server_id/subscribe', ServerController.subscribe);

export default router;
