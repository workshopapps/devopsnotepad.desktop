import express from "express";
import ServerController from "../controllers/ServerController.js";

const router = express.Router();

router.post("/", ServerController.create);
router.patch("/", ServerController.update);
router.post("/remove_all", ServerController.deleteServersById);
router.delete("/:id", ServerController.deleteServerById);

export default router;
