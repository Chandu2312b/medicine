import React, { useState } from "react";
import "./HealthCheckup.css";

const HealthCheckup = () => {
  const [bpSystolic, setBpSystolic] = useState("");
  const [bpDiastolic, setBpDiastolic] = useState("");
  const [sugarLevel, setSugarLevel] = useState("");
  const [bpResult, setBpResult] = useState("");
  const [sugarResult, setSugarResult] = useState("");

  const checkHealth = () => {
    // BP Analysis
    const systolic = parseInt(bpSystolic);
    const diastolic = parseInt(bpDiastolic);
    if (systolic < 90 || diastolic < 60) {
      setBpResult("Low BP (Hypotension) - Consider drinking more water and consult a doctor.");
    } else if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80) {
      setBpResult("Normal BP - Keep maintaining a healthy lifestyle!");
    } else if ((systolic > 120 && systolic <= 140) || (diastolic > 80 && diastolic <= 90)) {

      setBpResult("Pre-High BP - Monitor your diet and exercise.");
    } else {
      setBpResult("High BP (Hypertension) - Consult a doctor immediately.");
    }

    // Sugar Level Analysis
    const sugar = parseInt(sugarLevel);
    if (sugar < 70) {
      setSugarResult("Low Blood Sugar (Hypoglycemia) - Eat something sweet immediately.");
    } else if (sugar >= 70 && sugar <= 99) {
      setSugarResult("Normal Blood Sugar - Keep up the good work!");
    } else if (sugar >= 100 && sugar <= 125) {
      setSugarResult("Pre-Diabetes - Consider reducing sugar intake.");
    } else {
      setSugarResult("High Blood Sugar (Diabetes) - Consult a doctor immediately.");
    }
  };

  return (
    <div className="health-checkup">
      <h2>Health Checkup</h2>
      
      <div className="input-group">
        <label>Blood Pressure (Systolic):</label>
        <input 
          type="number" 
          placeholder="Enter Systolic (e.g., 120)" 
          value={bpSystolic} 
          onChange={(e) => setBpSystolic(e.target.value)} 
        />
      </div>

      <div className="input-group">
        <label>Blood Pressure (Diastolic):</label>
        <input 
          type="number" 
          placeholder="Enter Diastolic (e.g., 80)" 
          value={bpDiastolic} 
          onChange={(e) => setBpDiastolic(e.target.value)} 
        />
      </div>

      <div className="input-group">
        <label>Blood Sugar Level (mg/dL):</label>
        <input 
          type="number" 
          placeholder="Enter Sugar Level (e.g., 90)" 
          value={sugarLevel} 
          onChange={(e) => setSugarLevel(e.target.value)} 
        />
      </div>

      <button onClick={checkHealth} className="checkup-button">Check Health</button>

      {bpResult && <p className="result-text">{bpResult}</p>}
      {sugarResult && <p className="result-text">{sugarResult}</p>}
    </div>
  );
};

export default HealthCheckup;
