import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);

export default router;