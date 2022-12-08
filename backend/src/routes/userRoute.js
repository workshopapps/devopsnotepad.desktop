import express from "express";
import passport from "passport";
import config from "../config/index.js";
import AuthController from "../controllers/AuthController.js";
import isAuthenticated from "../middleware/authentication/isAuthenticated.js"
import {
    registerUserValidator,
    loginUserValidator,
    resetUserLinkValidator,
    updateUserPasswordValidator,
    verifyUserPasswordValidator,
} from "../validators/authValidators.js";

const router = express.Router();

router.post("/signup", registerUserValidator, AuthController.signup);
router.post("/login", loginUserValidator, AuthController.loginUser);
router.get("/logout", AuthController.logoutUser);

router.get('/success', isAuthenticated(), AuthController.loginStatus);
router.get('/failed', AuthController.loginFailed);
router.get('/google', passport.authenticate('google'));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/failed",
    }), (req,res) => {
        const url = process.env.FRONTEND_URL || "https://opspad.hng.tech";
        res.redirect(url)
    }
);
// router.get("/logout", AuthController.logout);

router.post("/reset-password", resetUserLinkValidator, AuthController.getResetLink);
router.post("/update-password", updateUserPasswordValidator, AuthController.updateUserPassword);

router.get("/verify-mail", verifyUserPasswordValidator, AuthController.verifyEmail);
router.post("/update-user-password",isAuthenticated(), AuthController.updateUserPasswordFromMobile);

export default router;
