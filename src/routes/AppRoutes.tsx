import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPatient from '../pages/RegisterPatient';
import Dashboard from '../pages/Dashboard';
import PatientData from '../pages/PatientData';
import LandingPage from '../pages/LandingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/register-patient" element={<RegisterPatient />} />
      <Route path="/patient-data" element={<PatientData />} />
    </Routes>
  );
};

export default AppRoutes;
