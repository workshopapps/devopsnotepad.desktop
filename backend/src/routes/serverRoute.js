import express from "express";
import ServerController from "../controllers/ServerController.js";
import { createServerValidator, updateServerValidator } from "../validators/serverValidators.js";

const router = express.Router();

router.post("/", createServerValidator, ServerController.create);
router.patch("/", updateServerValidator, ServerController.update);
router.get("/", ServerController.getAllServers);
router.post("/delete", ServerController.deleteServersById);
router.post("/:serverId/subscribe", ServerController.subscribe);

export default router;
