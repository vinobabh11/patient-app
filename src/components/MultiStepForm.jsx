import React, { useState } from "react";
import PatientDetails from "../forms/PatientDetails";
import AssignResources from "../forms/AssignResources";
import DoctorTestReport from "../forms/DoctorTestReport";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [patientData, setPatientData] = useState({});

  const nextStep = (data) => {
    setPatientData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Final Data: ", patientData);
    alert("Patient registration completed successfully!");
  };

  return (
    <div className="p-6 shadow rounded-lg">
      <h1 className="text-2xl font-bolds text-center">Register a new patient</h1>
      <div className="flex " style={{ alignItems: 'center', justifyContent: "space-evenly", padding: '20px' }}>
        <div className="bg-selected-bg" style={{ width: "17%", padding: "10px", borderRadius: "20px", color: "white" }}><span className="bg-secondary" style={{ borderRadius: "20px", padding: "3px 8px" }}>1</span> Patient Detail</div>
        <div style={{ width: "17%", padding: "10px", background: "white", borderRadius: "20px" }}><span className="bg-secondary" style={{ borderRadius: "20px", padding: "3px 8px", color: "white" }}>2</span> Assign Resources</div>
        <div style={{ width: "17%", padding: "10px", background: "white", borderRadius: "20px" }}><span className="bg-secondary" style={{ borderRadius: "20px", padding: "3px 8px", color: "white" }}>3</span> Doctor Test Report</div>
      </div>
      <div className="container bg-white p-8">

        <div className="mb-6" style={{width:"50%", margin:"auto"}}>
          <div style={{marginBottom: "5px", display:"flex", justifyContent: "space-evenly"}}>
            <div>Basic Details</div>
            <div>Legal Documents</div>
            <div>Demographics</div>
          </div>
          <div className="h-1 bg-gray-300">
            <div
              className="h-1 bg-secondary transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {step === 1 && <PatientDetails onSubmit={nextStep} />}
        {step === 2 && <AssignResources onSubmit={nextStep} />}
        {step === 3 && <DoctorTestReport onSubmit={handleSubmit} />}

        {step > 1 && (
          <button onClick={prevStep} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded">
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
