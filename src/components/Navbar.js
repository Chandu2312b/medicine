import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Healthcare Platform</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/find-doctor">Find a Doctor</Link>
        <Link to="/health-checkup">Health Checkup</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <Link to="/emergency" className="emergency-button">🚨 Emergency</Link>
    </nav>
  );
};

export default Navbar;
