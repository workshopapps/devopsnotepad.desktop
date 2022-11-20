<<<<<<< HEAD
=======
import express from "express";
import serverRoute from "./serverRoute.js";
import notificationRoute from "./notificationRoute.js";


const router = express.Router();

router.use("/server", serverRoute);
router.use("/server", notificationRoute);

export default router;
>>>>>>> a7eeb9d0dc40989a4b9933b859d023878296b60f
