import express from "express";
import path from "path";
import dotenv from "dotenv";
import { registerDoctor, registerPatient } from "./controllers/auth.js";
import { editDataP } from "./controllers/patient.js";
import { editDataD } from "./controllers/doctor.js";
import { verifyToken } from "./middleware/auth.js";
import multer from "multer";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import doctorRoutes from "./routes/doctor.js";
import patientRoutes from "./routes/patient.js";
import chatRoutes from "./routes/chat.js";
import cors from "cors";
import { socketSetup } from "./controllers/socket.js";
//configuration

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

//middleware
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/auth", authRoutes);
app.use("/doctor", doctorRoutes);
app.use("/patient", patientRoutes);
app.use("/chat", chatRoutes);

//server setup for socket
socketSetup();

// File Storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
app.use("/auth", authRoutes);
app.use("/doctor", doctorRoutes);
app.patch("/edit/patient", upload.single("picture"), verifyToken, editDataP);
app.use("/patient", patientRoutes);
app.use("/chat", chatRoutes);

// File Storage

//requests with data
app.post("/auth/patient/register", upload.single("picture"), registerPatient);
app.post("/auth/doctor/register", upload.single("picture"), registerDoctor);
app.patch("/edit/patient", upload.single("picture"), verifyToken, editDataP);
app.patch("/edit/doctor", upload.single("picture"), verifyToken, editDataD);

//mongoose setup
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connected`));
