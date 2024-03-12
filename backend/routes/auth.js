import express from "express";
import { loginPatient, loginDoctor } from "../controllers/auth.js";
const router = express.Router();

router.get("/patient/login", loginPatient);
router.get("/doctor/login", loginDoctor);

export default router;
