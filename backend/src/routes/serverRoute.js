import express from "express";
import ServerController from "../controllers/ServerController.js";

const router = express.Router();

router.post("/", ServerController.create);
router.get("/", ServerController.getAllServers);
router.get("/:serverId", ServerController.readOne);
router.patch("/", ServerController.update);

export default router;
