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


    // const locationObj = await axios.get(
    //   "https://geocode.maps.co/search?q=" +
    //     location +
    //     "&api_key=65eee4b0c9e2b147377658rsp5199d9"
    // );

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
