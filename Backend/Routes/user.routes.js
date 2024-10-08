import express from "express";
import protectRoute from "../MiddleWare/protectRoute.js";
import { getUsers } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);

export default router;
