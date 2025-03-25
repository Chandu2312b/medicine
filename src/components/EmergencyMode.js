import React, { useState } from "react";
import "./EmergencyMode.css";

const EmergencyMode = () => {
  const [location, setLocation] = useState(null);

  // Function to get the user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to access location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="emergency-container">
      <h2>🚨 Emergency Mode Activated</h2>
      <p>If you need urgent help, use the options below:</p>

      <button className="sos-button" onClick={() => alert("Calling Emergency Services...")}>
        📞 Call 911
      </button>

      <button className="location-button" onClick={getLocation}>
        📍 Find Nearest Hospital
      </button>

      {location && (
        <p className="location-text">
          Your Location: {location.lat}, {location.lon}
          <br />
          <a
            href={`https://www.google.com/maps/search/hospitals+near+me/@${location.lat},${location.lon}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Hospitals on Google Maps
          </a>
        </p>
      )}

      <button className="sms-button" onClick={() => alert("Emergency SMS sent to contact!")}>
        📩 Send Emergency SMS
      </button>

      <button className="ambulance-button" onClick={() => alert("Redirecting to ambulance services...")}>
        🚑 Book an Ambulance
      </button>
    </div>
  );
};

export default EmergencyMode;
