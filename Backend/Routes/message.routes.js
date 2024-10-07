import express from "express";
import { sendMessage } from "../Controllers/message.controller.js";
import protectRoute from "../MiddleWare/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);

export default router;
