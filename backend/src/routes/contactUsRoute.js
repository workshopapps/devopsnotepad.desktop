import express from "express";
import ContactUsController from "../controllers/ContactUsController.js";
import { contactUsValidator } from "../validators/contactUsValidator.js";

const router = express.Router();

router.post("/", contactUsValidator, ContactUsController.create);
router.get('/', ContactUsController.getContact);
router.get('/follow-up', ContactUsController.getFollowUpUsers);


export default router;
