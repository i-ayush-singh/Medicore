import express from "express";
import { getDoctor, handleRequest } from "../controllers/doctor.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/fetchAll", verifyToken, getDoctor);
router.patch("/request/:patientId", verifyToken, handleRequest);

export default router;
