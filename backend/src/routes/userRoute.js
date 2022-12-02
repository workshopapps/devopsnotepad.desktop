import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/AuthController.js';
import authenticate from '../middleware/application/authenticate.js';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.loginUser);
router.get('/logout', AuthController.logoutUser);

router.get('/success', AuthController.loginStatus);
router.get('/failed', AuthController.loginFailed);
router.get('/google', passport.authenticate('google'));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/success",
        failureRedirect: "/auth/failed",
    })
);

router.get("/logout", AuthController.logout);

router.post("/reset-password", AuthController.getResetLink);
router.post("/update-password", AuthController.updateUserPassword);

export default router;