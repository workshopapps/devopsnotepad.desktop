import express from "express";
import NotifyMeController from "../controllers/NotifyMeController.js";


const router = express.Router();

router.post("/", NotifyMeController.create);


export default router;