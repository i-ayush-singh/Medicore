import express from "express";
import {
  getDoctor,
  handleRequest,
  createReport,
  handleBooking,
} from "../controllers/doctor.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/fetchAll", verifyToken, getDoctor);
router.patch("/request/:patientId", verifyToken, handleRequest);
router.post("/createReport", verifyToken, createReport);
router.patch("/booking", verifyToken, handleBooking);

export default router;
