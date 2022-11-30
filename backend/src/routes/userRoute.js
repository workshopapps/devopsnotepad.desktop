import express from "express";
import passport from "passport";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();

router.get("/success", AuthController.loginStatus);

router.get("/google", passport.authenticate("google"));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/success",
        failureRedirect: "/auth/google",
    })
);
router.get("/logout", AuthController.logout);
export default router;
