import express from "express";
import AdminController from "../controllers/AdminController.js";
import { contactUsValidator } from "../validators/contactUsValidator.js";

const router = express.Router();

router.post("/contact-support", contactUsValidator, AdminController.support);
router.get('/follow-up', AdminController.getFollowUpUsers);
router.post('/follow-up', AdminController.followup);



export default router;
