import express from 'express';
import passport from 'passport';
import config from '../config/index.js';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.loginUser);
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

router.post("/reset-password", AuthController.getResetLink);
router.post("/update-password", AuthController.updateUserPassword);

router.post('/update-user-password', AuthController.updateUserPasswordFromMobile);


router.get("/verify-mail", AuthController.verifyEmail);

export default router;