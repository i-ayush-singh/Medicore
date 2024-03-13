import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import Report from "../models/Report.js";

export const getDoctor = async (req, res) => {
  const filter = req.query.filter || "";
  const Doctors = await Doctor.find({
    $or: [
      {
        specialist: {
          $regex: filter,
        },
      },
      {
        location: {
          $regex: filter,
        },
      },
      {
        fullName: {
          $regex: filter,
        },
      },
    ],
  });

  res.status(200).json({
    Doctors: Doctors.map((doc) => ({
      fullName: doc.fullName,
      _id: doc._id,
      location: doc.location,
      specialist: doc.specialist,
    })),
  });
};

export const handleRequest = async (req, res) => {
  try {
    const { result, doctorId } = req.body;
    const { patientId } = req.params;

    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);

    const index = doctor.requests.indexOf(patientId);

    doctor.requests.splice(index, 1);

    if (result === "true") {
      doctor.patientList.push(patientId);

      const basicInformation = [
        `Name: ${patient.fullName}`,
        `Email: ${patient.email}`,
        `Age: ${patient.age}`,
        `Blood: ${patient.blood}`,
        `Sex: ${patient.sex}`,
      ];

      const newReport = new Report({
        basicInformation,
        patientId,
        doctorId,
      });

      await newReport.save();
      patient.files.set(doctorId, newReport._id);
      doctor.files.set(patientId, newReport._id);

      const message = `Dr. ${doctor.fullName} has accepted your request :)`;
      patient.notifications.push(message);
    } else {
      const message = `Unfortunately, Dr. ${doctor.fullName} is unable to take your appointment`;

      patient.notifications.push(message);
    }

    await patient.save();
    await doctor.save();

    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createReport = async (req, res) => {
  try {
    const {
      patientId,
      doctorId,
      medicine,
      dosage,
      frequency,
      symptoms,
      tests,
    } = req.body;

    const doctor = await Doctor.findById(doctorId);

    const report = await Report.findById(doctor.files[patientId]);

    report.medicine = medicine;
    report.dosage = dosage;
    report.frequency = frequency;
    report.symptoms = symptoms;
    report.tests = tests;

    await report.save();

    res.status(201).json(report);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
