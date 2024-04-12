import {
  requestAppointment,
  bookAppointment,
  makeReview,
} from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.patch("/request/:doctorId", verifyToken, requestAppointment);
router.patch("/booking/:doctorId", verifyToken, bookAppointment);
router.patch("/review/:doctorId", verifyToken, makeReview);

export default router;
