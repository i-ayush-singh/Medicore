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
        required: true
    },
    
    
    language: {
      type: Array,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
      max: 50,
    }
  },
  { timestamps: true }
);
const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;