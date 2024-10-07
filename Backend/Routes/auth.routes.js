import express from "express";
import { login, logout, signup } from "../Controllers/auth.contoller.js";

const router = express.Router();

router.get("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
