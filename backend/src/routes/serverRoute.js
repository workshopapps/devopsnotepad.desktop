import express from 'express';
import ServerController from '../controllers/ServerController.js';
import isAuthenticated from '../middleware/authentication/isAuthenticated.js';
import isEmailVerified from '../middleware/authentication/isEmailVerified.js';
import { createServerValidator, updateServerValidator } from '../validators/serverValidators.js';

const router = express.Router();

router.post('/', createServerValidator, isAuthenticated() , isEmailVerified(), ServerController.create);
router.patch('/', updateServerValidator, isAuthenticated(), isEmailVerified(), ServerController.update);
router.get('/all', isAuthenticated(), ServerController.getAllServers);
router.post('/delete', isAuthenticated(), ServerController.deleteServersById);

export default router;
