// import Doctor from "../models/Doctor.js";

// // Get all doctors
// export const getDoctors = async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
//     res.status(200).json(doctors);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving doctors" });
//   }
// };

// // Create a new doctor
// export const createDoctor = async (req, res) => {
//   try {
//     const { name, specialization, email, phone } = req.body;
//     const doctor = new Doctor({ name, specialization, email, phone });
//     await doctor.save();
//     res.status(201).json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating doctor" });
//   }
// };
