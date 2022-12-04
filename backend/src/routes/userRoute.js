import express from 'express';
import passport from 'passport';
import config from '../config/index.js';
import AuthController from '../controllers/AuthController.js';
import {
  registerUserValidator,
  loginUserValidator,
  resetUserLinkValidator,
  updateUserPasswordValidator,
  verifyUserPasswordValidator,
} from '../validators/authValidators.js';

const router = express.Router();

router.post('/signup', registerUserValidator, AuthController.signup);
router.post('/login', loginUserValidator, AuthController.loginUser);
router.get('/logout', AuthController.logoutUser);

router.get('/success', AuthController.loginStatus);
router.get('/failed', AuthController.loginFailed);
router.get('/google', passport.authenticate('google'));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: config.app.url,
    failureRedirect: '/auth/failed',
  })
);
// router.get("/logout", AuthController.logout);

router.post('/reset-password', resetUserLinkValidator, AuthController.getResetLink);
router.post('/update-password', updateUserPasswordValidator, AuthController.updateUserPassword);

router.get('/verify-mail', verifyUserPasswordValidator, AuthController.verifyEmail);

export default router;
