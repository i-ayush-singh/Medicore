import bcrypt from "bcrypt";
import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import { z } from "zod";

//registration

const emailSchema = z.object({
  email: z.string().email(),
});
export const registerPatient = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      picturePath,
      location,
      blood,
      age,
      sex,
      language,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    emailSchema.parse(email);

    const newPatient = new Patient({
      fullName,
      email,
      password: passwordHash,
      picturePath,
      location,
      blood,
      age,
      sex,
      language,
    });

    const xyz = await newPatient.save();

    res.status(201).json(xyz);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
