import express from "express";
import {
  getDoctors,
  getDoctor,
  handleRequest,
  createReport,
  handleBooking,
  getDoctorsByDistance,
} from "../controllers/doctor.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/fetchAll", verifyToken, getDoctors);
router.get("/:doctorId", verifyToken, getDoctor);
router.get("/fetchByDistance", verifyToken, getDoctorsByDistance);
router.patch("/request/:patientId", verifyToken, handleRequest);
router.post("/createReport", verifyToken, createReport);
router.patch("/booking", verifyToken, handleBooking);

export default router;
