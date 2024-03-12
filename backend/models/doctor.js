import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      required: true,
    },
    patientList: {
      type: Array,
    },
    language: {
      type: Array,
      required: true,
    },
    files: {
      type: Map,
      of: String,
    },
    specialist: {
      type: String,
      required: true,
      max: 50,
    },
    requests: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;
