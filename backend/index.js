import express from "express";
import { registerPatient } from "./controllers/auth.js";
import multer from "multer";

//configuration

const app = express();
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

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

//requests with data
app.post("/auth/patient/register", upload.single("picture"), registerPatient);
