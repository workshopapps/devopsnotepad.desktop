import express from "express";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();

//
router.post("/reset-password", AuthController.getResetLink);
//router.get("/updatePassword?validToken", AuthController.displayUpdateForm);
//router.post("/updatePassword", AuthController.updateUserPassword);
//
export default router;