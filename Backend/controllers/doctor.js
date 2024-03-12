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
