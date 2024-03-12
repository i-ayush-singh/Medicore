import Doctor from "../models/Doctor.js";
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

    const index = doctor.requests.indexOf(patientId);

    doctor.requests.splice(index, 1);

    if (result === "true") {
      doctor.patientList.push(patientId);
    }

    await doctor.save();

    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
