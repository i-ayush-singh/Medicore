import bcrypt from "bcrypt";
import axios from "axios";
import Patient from "../models/Patient";
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
    const locationObj = await axios.get(
      "https://geocode.maps.co/search?q=" +
        location +
        "&api_key=65eee4b0c9e2b147377658rsp5199d9"
    );

    const newPatient = new Patient({
      fullName,
      email,
      password: passwordHash,
      picturePath,
      latitude: locationObj[0].lat,
      longitude: locationObj[0].lon,
      blood,
      age,
      sex,
      language,
    });

    await newPatient.save();

    const patient = await Patient.find();

    res.status(201).post(patient);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
