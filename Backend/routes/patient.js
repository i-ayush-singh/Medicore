import {
  requestAppointment,
  bookAppointment,
  makeReview,
  getMyReports,
  getMyDoctors,
} from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.patch("/request/:doctorId", verifyToken, requestAppointment);
router.patch("/booking/:doctorId", verifyToken, bookAppointment);
router.patch("/review/:doctorId", verifyToken, makeReview);
router.get("/getMyReports/:patientId", verifyToken, getMyReports);
router.get("/getMyDoctors/:patientId", verifyToken, getMyDoctors);

export default router;
