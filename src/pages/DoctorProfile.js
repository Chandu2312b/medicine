import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const { id } = useParams();

  const handleAction = (action) => {
    alert(`You selected: ${action}`);
  };

  return (
    <div className="doctor-profile-container">
      <div className="doctor-card">
        <img
          src={`https://source.unsplash.com/150x150/?doctor,medical&sig=${id}`}
          alt="Doctor"
          className="doctor-image"
        />
        <h2>Dr. John Doe</h2>
        <p><strong>Specialization:</strong> Cardiologist</p>
        <p><strong>Location:</strong> New York, NY</p>
      </div>

      <div className="doctor-actions">
        <button className="action-button call" onClick={() => handleAction("Start a Call")}>
          📞 Start a Call
        </button>
        <button className="action-button chat" onClick={() => handleAction("Start Chat")}>
          💬 Start Chat
        </button>
        <button className="action-button email" onClick={() => handleAction("Send Email")}>
          ✉️ Send Email
        </button>
        <button className="action-button prescription" onClick={() => handleAction("Give Prescription")}>
          💊 Give Prescription
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
