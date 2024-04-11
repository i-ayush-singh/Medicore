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
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    patientList: {
      type: Array,
    },
    appointmentRequests: {
      type: Array,
      default: [],
    },
    appointments: {
      type: Array,
      default: [],
    },
    files: {
      type: Map,
      of: String,
    },
    fee: {
      type: String,
      required: true,
    },
    timings: {
      type: Array,
      required: true,
      default: [],
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
