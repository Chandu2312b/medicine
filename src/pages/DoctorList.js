import React from "react";
import DoctorCard from "../components/DoctorCard";
import "./DoctorList.css";

const doctors = [
  { id: 1, name: "Dr.krishna", specialization: "Cardiologist", location: "Hyderabad, HYD" },
  { id: 2, name: "Dr. John", specialization: "Neurologist", location: "Los Angeles, CA" },
  { id: 3, name: "Dr. Banny", specialization: "Dermatologist", location: "Chicago, IL" },
  { id: 4, name: "Dr. Williams", specialization: "Pediatrician", location: "Houston, TX" },
];

const DoctorList = () => {
  return (
    <div className="doctor-list-container">
      <h2 className="doctor-list-title">Available Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
