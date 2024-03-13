import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

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

export const bookAppointment = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { patientId, time, date } = req.body;

    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);
    const { timings } = doctor;

    const patientTime = parseInt(time);
    const startTime = parseInt(timings[0]),
      endTime = parseInt(timings[1]);

    if (patientTime >= endTime || patientTime < startTime) {
      const message = `Sorry, Dr. ${doctor.fullName} is not available at that time`;

      patient.notifications.push(message);
    } else {
      const message = `Dr. ${doctor.fullName} has been informed  of your request :)`;

      patient.notifications.push(message);

      const request = {
        date,
        time,
        patientId,
      };

      doctor.appointmentRequests.push(request);

      await doctor.save();
    }

    await patient.save();

    res.status(200).json(doctor);
  } catch (error) {
    res.status(407).json({ message: error.message });
  }
};
