import express from "express";
import { getDoctor } from "../controllers/doctor.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/fetchAll", verifyToken, getDoctor);

export default router;
