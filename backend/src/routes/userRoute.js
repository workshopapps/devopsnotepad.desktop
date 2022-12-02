import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logoutUser);
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