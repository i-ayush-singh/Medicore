import Doctor from "../models/doctor.js";
import Patient from "../models/Patient.js";

export const getMyDoctors = async (req, res) => {
  try {
    const { patientId } = req.body;

    const patient = Patient.findById(patientId);

    const { doctorList } = patient;

    res.status(200).json(doctorList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getMyReports = async (req, res) => {
  try {
    const { patientId } = req.body;

    const patient = Patient.findById(patientId);

    const { doctorList } = patient;

    res.status(200).json(doctorList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

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

    if (doctor.patientList.indexOf(patientId) == -1) {
      return res.status(407).json({
        error: "It seems you've not been assigned to this doctor yet",
      });
    }
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
    res.status(409).json({ message: error.message });
  }
};

export const handleNotifications = async (req, res) => {
  try {
    const { message, patientId } = req.body;

    const patient = await Patient.findById(patientId);

    const index = patient.notifications.indexOf(message);

    notifications.splice(index, 1);

    await patient.save();

    res.status(200).json(patient);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const makeReview = async (req, res) => {
  try {
    const { rating, comment, patientId } = req.body;
    const { doctorId } = req.params;

    const doctor = await Doctor.findById(doctorId);

    if (doctor.patientList.indexOf(patientId) == -1) {
      return res.status(407).json({
        error: "It seems you've not been assigned to this doctor yet",
      });
    }

    const reviewObj = {
      rating,
      comment,
    };

    doctor.reviews.set(patientId, reviewObj);

    await doctor.save();

    res.status(204).json(doctor);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
