import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  alternativeMobile: yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  guardianName: yup.string().required("Guardian name is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  city: yup.string().required("City is required"),
  fullAddress: yup.string().required("Full address is required"),
  howDidYouKnow: yup.string().required("This field is required"),
  referFrom: yup.string().required("Refer source is required"),
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
      <form style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            {...register("firstName")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            {...register("lastName")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Mobile Number</label>
          <input
            type="text"
            {...register("mobile")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter 10-digit mobile number"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Alternative Mobile Number</label>
          <input
            type="text"
            {...register("alternativeMobile")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter 10-digit alternative mobile number"
          />
          {errors.alternativeMobile && <p className="text-red-500 text-sm">{errors.alternativeMobile.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter email address"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
        </div>

        <div style={{ width: "30%", margin: "10px" }}>
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
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" {...register("gender")} value="Male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" {...register("gender")} value="Female" className="mr-2" />
              Female
            </label>
            <label className="flex items-center">
              <input type="radio" {...register("gender")} value="Other" className="mr-2" />
              Other
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>
        {/* <div style={{ width: "30%", margin: "10px" }}>
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
        </div> */}

        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Guardian Name</label>
          <input
            type="text"
            {...register("guardianName")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter guardian name"
          />
          {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName.message}</p>}
        </div>

        {/* Country */}
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Country</label>
          <select {...register("country")} className="p-2 border border-gray-300 rounded w-full">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        {/* State */}
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">State</label>
          <input
            type="text"
            {...register("state")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter state"
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>

        {/* District */}
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">District</label>
          <input
            type="text"
            {...register("district")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter district"
          />
          {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
        </div>

        {/* City */}
        <div style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">City</label>
          <input
            type="text"
            {...register("city")}
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter city"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Full Address */}
        <div className="md:col-span-2 lg:col-span-3" style={{ width: "30%", margin: "10px" }}>
          <label className="block mb-1">Full Address</label>
          <textarea
            {...register("fullAddress")}
            className="p-2 border border-gray-300 rounded w-full"
            rows="3"
            placeholder="Enter full address"
          ></textarea>
          {errors.fullAddress && <p className="text-red-500 text-sm">{errors.fullAddress.message}</p>}
        </div>

        <div style={{ width: "100%", margin: "10px" }}>
          <h3>Reference</h3> <br />

          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "10px" }}>
              <label className="block mb-1">How do you know about us?</label>
              <select {...register("howDidYouKnow")} className="p-2 border border-gray-300 rounded w-full">
                <option value="">Select Option</option>
                <option value="Friends/Family">Friends/Family</option>
                <option value="Online Search">Online Search</option>
                <option value="Advertisement">Advertisement</option>
              </select>
              {errors.howDidYouKnow && <p className="text-red-500 text-sm">{errors.howDidYouKnow.message}</p>}
            </div>


            <div style={{ width: "30%", margin: "10px" }}>
              <label className="block mb-1">Refer From</label>
              <select {...register("referFrom")} className="p-2 border border-gray-300 rounded w-full">
                <option value="">Select Option</option>
                <option value="Doctor">Doctor</option>
                <option value="Hospital">Hospital</option>
                <option value="Other">Other</option>
              </select>
              {errors.referFrom && <p className="text-red-500 text-sm">{errors.referFrom.message}</p>}
            </div>
          </div>
        </div>

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
