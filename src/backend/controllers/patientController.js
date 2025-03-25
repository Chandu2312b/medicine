// import Patient from "../models/Patient.js";

// export const getPatients = async (req, res) => {
//   try {
//     const patients = await Patient.find();
//     res.status(200).json(patients);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving patients" });
//   }
// };

// export const createPatient = async (req, res) => {
//   try {
//     const { name, email, phone, problem } = req.body;
//     const patient = new Patient({ name, email, phone, problem });
//     await patient.save();
//     res.status(201).json(patient);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating patient" });
//   }
// };
