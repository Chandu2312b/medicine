import React, { useState } from "react";
import "./HealthCheckupForm.css";

const HealthCheckupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fever: "",
    cough: "",
    bodyPain: "",
    dizziness: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="health-checkup-form" onSubmit={handleSubmit}>
      <h3>Health Checkup</h3>
      <label>Do you have a fever?</label>
      <input type="text" name="fever" onChange={handleChange} required />

      <label>Do you have a cough?</label>
      <input type="text" name="cough" onChange={handleChange} required />

      <label>Are you experiencing body pain?</label>
      <input type="text" name="bodyPain" onChange={handleChange} required />

      <label>Do you feel dizzy or lightheaded?</label>
      <input type="text" name="dizziness" onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthCheckupForm;
