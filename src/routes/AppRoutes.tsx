import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPatient from '../pages/RegisterPatient';
import Dashboard from '../pages/Dashboard';
import PatientData from '../pages/PatientData';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/register-patient" element={<RegisterPatient />} />
      <Route path="/patient-data" element={<PatientData />} />
    </Routes>
  );
};

export default AppRoutes;
