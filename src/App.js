import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import HealthCheckup from './pages/HealthCheckup';
import DoctorList from "./pages/DoctorList";
import DoctorProfile from './pages/DoctorProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyMode from "./components/EmergencyMode";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/emergency" element={<EmergencyMode />} />
        <Route path='/find-doctor' element={<FindDoctor />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path='/health-checkup' element={<HealthCheckup />} />
        <Route path='/doctor/:id' element={<DoctorProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

