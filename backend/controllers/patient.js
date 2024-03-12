import Doctor from "../models/Doctor.js";

export const requestAppointment = async (req, res) => {
  try {
    const { patientId } = req.body;
    const { doctorId } = req.params;

    const doctor = await Doctor.findById(doctorId);

    doctor.requests.push(patientId);

    doctor.save();

    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
