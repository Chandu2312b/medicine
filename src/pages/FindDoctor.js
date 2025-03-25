import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FindDoctor.css";

const healthRecommendations = {
  "fever": { doctor: "General Physician", medicine: "Paracetamol", rest: "2-3 days" },
  "cough": { doctor: "Pulmonologist", medicine: "Cough Syrup", rest: "3-4 days" },
  "headache": { doctor: "Neurologist", medicine: "Ibuprofen", rest: "1-2 days" },
  "eye pain": { doctor: "Ophthalmologist", medicine: "Eye Drops", rest: "1-2 days" },
  "stomach pain": { doctor: "Gastroenterologist", medicine: "Antacids", rest: "2-3 days" },
  "chest pain": { doctor: "Cardiologist", medicine: "Aspirin", rest: "Consult immediately" },
  "skin allergy": { doctor: "Dermatologist", medicine: "Antihistamines", rest: "2-3 days" },
  "back pain": { doctor: "Orthopedic Surgeon", medicine: "Muscle Relaxants", rest: "3-5 days" },
  "anxiety": { doctor: "Psychiatrist", medicine: "Anti-Anxiety Pills", rest: "Depends on condition" },
  "toothache": { doctor: "Dentist", medicine: "Pain Relievers", rest: "1-2 days" },
  "ear pain": { doctor: "ENT Specialist", medicine: "Ear Drops", rest: "2-3 days" },
};

const FindDoctor = () => {
  const [problem, setProblem] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    const lowerCaseProblem = problem.toLowerCase();
    
    if (healthRecommendations[lowerCaseProblem]) {
      setRecommendation(healthRecommendations[lowerCaseProblem]);
      setError(false);
    } else {
      setRecommendation(null);
      setError(true); // Show error message if the problem is not found
    }
  };

  return (
    <div className="find-doctor-container">
      <motion.h1 
        className="find-doctor-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Find a Doctor
      </motion.h1>
      
      <motion.p 
        className="find-doctor-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Enter your health issue to get recommendations.
      </motion.p>
      
      <motion.input 
        type="text" 
        placeholder="E.g., headache, stomach pain"
        className="find-doctor-input"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        whileFocus={{ scale: 1.05 }}
      />
      
      <motion.button 
        className="find-doctor-button"
        onClick={handleSearch}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Search
      </motion.button>

      {recommendation && (
        <motion.div 
          className="recommendation-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p><strong>Recommended Doctor:</strong> {recommendation.doctor}</p>
          <p><strong>Suggested Medicine:</strong> {recommendation.medicine}</p>
          <p><strong>Rest Duration:</strong> {recommendation.rest}</p>
        </motion.div>
      )}

      {error && (
        <motion.div 
          className="error-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p><strong>Problem not recognized.</strong> Please consult a nearest doctor.</p>
        </motion.div>
      )}
    </div>
  );
};

export default FindDoctor;
