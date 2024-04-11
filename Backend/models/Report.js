import mongoose from "mongoose";
const ReportSchema = new mongoose.Schema(
  {
    basicInformation: {
      type: Array,
      required: true,
    },
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    medicine: {
      type: Array,
      default: [],
    },
    dosage: {
      type: String,
      default: "",
    },
    frequency: {
      type: String,
      default: "",
    },
    symptoms: {
      type: Array,
      default: [],
    },
    tests: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const Report = mongoose.model("Report", ReportSchema);
export default Report;