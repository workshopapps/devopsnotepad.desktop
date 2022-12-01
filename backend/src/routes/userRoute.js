import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup',  UserController.signup);

export default router;