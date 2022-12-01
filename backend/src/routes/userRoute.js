import express from 'express';
import UserController from '../controllers/UserController.js';
import passport from 'passport';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);
router.get('/success', AuthController.loginStatus);
router.get('/failed', AuthController.loginFailed);
router.get('/logout', AuthController.logout);
router.get('/google', passport.authenticate('google'));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failed',
  })
);

export default router;