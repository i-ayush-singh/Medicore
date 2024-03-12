import { requestAppointment } from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.patch("/request/:doctorId", verifyToken, requestAppointment);

export default router;
