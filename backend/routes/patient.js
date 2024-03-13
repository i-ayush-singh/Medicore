import { requestAppointment, bookAppointment } from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.patch("/request/:doctorId", verifyToken, requestAppointment);
router.patch("/booking/:doctorId", verifyToken, bookAppointment);

export default router;
