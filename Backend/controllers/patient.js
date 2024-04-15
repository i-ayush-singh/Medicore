import { application } from "express";
import Doctor from "../models/doctor.js";
import Patient from "../models/Patient.js";
// Assuming your _id value is stored in a variable called idValue

const processor = async (doctorId) => {
  return await Doctor.findById(doctorId);
};

export const getMyDoctors = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await Patient.findById(patientId);

    const { doctorList } = patient;

    const doctors = await Promise.all(doctorList.map(processor));

    res.status(200).json(doctors);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getMyReports = async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = Patient.findById(patientId);

    const { doctorList } = patient;

    res.status(200).json(doctorList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const { doctorId, patientId } = req.params;

    const patient = await Patient.findById(patientId);

    const report = patient.files.get(doctorId);

    res.status(200).json(report);
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
    console.log(patientId);
    console.log(time);
    console.log(date);
    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);

    if (doctor.patientList.indexOf(patientId) == -1) {
      return res.status(407).json({
        error: "It seems you've not been assigned to this doctor yet",
      });
    }
    const { timings } = doctor;
    console.log(timings);
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

export const getAppointments = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findById(patientId);

    const appointments = await Promise.all(
      patient.appointments.map(async (appointmentObj) => {
        const { date, time } = appointmentObj;
        const doctor = await Doctor.findById(appointmentObj.doctorId);
       
        const { fullName, picturePath, files, specialist } = doctor;
        const newObj = {
          date,
          time,
          doctor: {
            fullName,
            picturePath,
            files,
            specialist,
          },
        };

        return newObj;
      })
    );

    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const handleNotifications = async (req, res) => {
  try {
    const { message, patientId } = req.body;
    
    const patient = await Patient.findById(patientId);

    const index = patient.notifications.indexOf(message);
    
    patient.notifications.splice(index, 1);

    await patient.save();

    res.status(200).json(patient);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
export const sendNotifications = async(req,res) =>{
  try{
    const {patientId} = req.params;
    const patient = await Patient.findById(patientId);
    res.status(200).json(patient.notifications);
  }
  catch(error){
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

    const ratingObj = doctor.rating;
    const reviewObj = {
      rating,
      comment,
    };

    if (doctor.reviews.get(patientId) === undefined) {
      ratingObj.number++;
      ratingObj.total += rating;
    } else {
      const oldRatingObj = doctor.reviews.get(patientId);

      ratingObj.total -= oldRatingObj.rating;
      ratingObj.total += rating;
    }
    doctor.reviews.set(patientId, reviewObj);

    doctor.rating = ratingObj;
    await doctor.save();

    res.status(204).json(doctor);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
