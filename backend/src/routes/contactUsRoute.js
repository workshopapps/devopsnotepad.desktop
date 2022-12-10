import express from "express";
import ContactUsController from "../controllers/ContactUsController.js";
import { contactUsValidator } from "../validators/contactUsController.js";

const router = express.Router();

router.post("/", contactUsValidator, ContactUsController.create);


export default router;
