import express from "express";
import path from "path";
import dotenv from "dotenv";
import { registerPatient } from "./controllers/auth.js";
import multer from "multer";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

//configuration

const app = express();
const PORT = process.env.PORT || 6001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

//middleware
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

//mongoose setup
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connected`));
