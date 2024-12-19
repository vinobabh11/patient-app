import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required").matches(/^[A-Za-z ]+$/, "Only alphabets allowed"),
  lastName: yup.string().required("Last name is required").matches(/^[A-Za-z ]+$/, "Only alphabets allowed"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .positive("Age must be greater than zero")
    .integer("Age must be an integer"),
  gender: yup.string().required("Gender is required"),
});

const PatientDetails = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h3 style={{ margin: "10px 0 10px 0", fontSize: "20px" }}>Patient Details</h3>
      <form style={{display: "flex", flexWrap: "wrap", alignItems: "center"}} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            {...register("firstName")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            {...register("lastName")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        {/* Mobile */}
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">Mobile Number</label>
          <input
            type="text"
            {...register("mobile")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter 10-digit mobile number"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        {/* Email */}
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter email address"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Age */}
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            {...register("age")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter age"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        {/* Gender */}
        <div style={{ width: "30%",margin: "10px" }}>
          <label className="block mb-1">Gender</label>
          <select
            {...register("gender")}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default PatientDetails;
