import React from "react";
import { Link } from "react-router-dom";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img
        src={`https://source.unsplash.com/150x150/?doctor,medical&sig=${doctor.id}`}
        alt={doctor.name}
        className="doctor-image"
      />
      <h3>{doctor.name}</h3>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      <Link to={`/doctor/${doctor.id}`}>
        <button className="view-profile-btn">View Profile</button>
      </Link>
    </div>
  );
};

export default DoctorCard;
