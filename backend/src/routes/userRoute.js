import express from 'express';
import passport from 'passport';
import config from '../config/index.js';
import AuthController from '../controllers/AuthController.js';
const router = express.Router();


router.get('/success', AuthController.loginStatus);
router.get('/failed', AuthController.loginFailed);
router.get('/logout', AuthController.logout);
router.get('/google', passport.authenticate('google'));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: config.app.url,
    failureRedirect: '/auth/failed',
  })
);
export default router;
