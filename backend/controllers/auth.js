import bcrypt from "bcrypt";
import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import jwt from "jsonwebtoken";
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
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

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
      files: [],
      doctorList: [],
      notifications: [],
      appointments: [],
    });
    const xyz = await newPatient.save();

    res.status(201).json(xyz);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    const requiredUser = await Patient.findOne({ email: email });

    if (!requiredUser) {
      return res.status(400).json({ msg: "Requested user does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      requiredUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Wrong password for requested user" });
    }

    const sessionToken = jwt.sign(
      { id: requiredUser._id },
      process.env.JWT_SECRET
    );

    delete requiredUser.password;

    res.status(200).send({ sessionToken, requiredUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const requiredUser = await Doctor.findOne({ email: email });

    if (!requiredUser) {
      return res.status(400).json({ msg: "Requested user does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      requiredUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Wrong password for requested user" });
    }

    const sessionToken = jwt.sign(
      { id: requiredUser._id },
      process.env.JWT_SECRET
    );

    delete requiredUser.password;

    res.status(200).send({ sessionToken, requiredUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const registerDoctor = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      picturePath,
      location,
      specialist,
      fee,
      timings,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // const locationObj = await axios.get(
    //   "https://geocode.maps.co/search?q=" +
    //     location +
    //     "&api_key=65eee4b0c9e2b147377658rsp5199d9"
    // );

    const newDoctor = new Doctor({
      fullName,
      email,
      password: passwordHash,
      picturePath,
      location,
      specialist,
      language,
      fee,
      timings,
      files: [],
      requests: [],
      appointmentRequests: [],
      appointments: [],
    });

    emailSchema.parse(newDoctor);
    const xyz = await newDoctor.save();

    res.status(201).json(xyz);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
