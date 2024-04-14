import {
  requestAppointment,
  bookAppointment,
  makeReview,
  getMyReports,
  getMyDoctors,
  getReport,
} from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.patch("/request/:doctorId", verifyToken, requestAppointment);
router.patch("/booking/:doctorId", verifyToken, bookAppointment);
router.patch("/review/:doctorId", verifyToken, makeReview);
router.get("/getMyReports/:patientId", verifyToken, getMyReports);
router.get("/getMyDoctors/:patientId", verifyToken, getMyDoctors);
router.get("/:patientId/:doctorId", verifyToken, getReport);

export default router;
