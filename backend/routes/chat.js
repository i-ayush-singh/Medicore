import express from "express";
import {} from "../controllers/chat.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

export default router;
