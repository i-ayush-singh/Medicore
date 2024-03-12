import express from "express";
import { getDoctor } from "../controllers/doctor.js";
const router = express.Router();

router.get("/fetchAll", getDoctor);

export default router;
