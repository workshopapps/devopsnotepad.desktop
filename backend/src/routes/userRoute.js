import express from "express";
import passport from "passport";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();

router.get("/success", AuthController.loginStatus);
router.get("/failed", AuthController.loginFailed);
router.get("/google", passport.authenticate("google"));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/success",
        failureRedirect: "/auth/failed",
    })
);
router.get("/logout", AuthController.logout);

router.post("/reset-password", AuthController.getResetLink);
//router.get("/updatePassword?validToken", AuthController.displayUpdateForm);
//router.post("/updatePassword", AuthController.updateUserPassword);

export default router;
