import express from 'express';
import AuthController from '../controllers/AuthController.js';
import isAuthenticated from '../middleware/authentication/isAuthenticated.js';
import {
  registerUserValidator,
  loginUserValidator,
  resetUserLinkValidator,
  updateUserPasswordValidator,
  verifyUserPasswordValidator,
} from '../validators/authValidators.js';

const router = express.Router();

router.post('/signup', registerUserValidator, AuthController.signup);
router.post('/login', loginUserValidator, isEmailVerified(), AuthController.loginUser);
router.get('/logout', AuthController.logoutUser);

router.post('/reset-password', resetUserLinkValidator, AuthController.getResetLink);
router.post('/update-password', updateUserPasswordValidator, AuthController.updateUserPassword);

router.get('/verify-mail', verifyUserPasswordValidator, AuthController.verifyEmail);
router.post('/update-user-password', isAuthenticated(), AuthController.updateUserPasswordFromMobile);

// Google Login
router.post('/google-login', AuthController.googleLogin);

export default router;
