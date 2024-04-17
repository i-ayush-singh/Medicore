import express from "express";
import {
  getDoctors,
  getDoctor,
  handleRequest,
  createReport,
  handleBooking,
  getDoctorsByDistance,
  checkRequest,
  getRequestPatients,
  getAppointmentsreq,
  getDoctorReviews,
} from "../controllers/doctor.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/getAppointmentsreq/:doctorId", verifyToken, getAppointmentsreq);
router.get("/getallrequests/:doctorId", verifyToken, getRequestPatients);
router.get("/fetchAll", verifyToken, getDoctors);
router.get("/:doctorId", verifyToken, getDoctor);
router.get("/fetchByDistance", verifyToken, getDoctorsByDistance);
router.get("/getReviews", verifyToken, getDoctorReviews);
router.patch("/request/:patientId", verifyToken, handleRequest);
router.get("/checkRequest/:doctorId/:patientId", verifyToken, checkRequest);
router.post("/createReport", verifyToken, createReport);
router.patch("/booking", verifyToken, handleBooking);

export default router;
