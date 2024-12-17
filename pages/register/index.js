import React, { useState, useRef } from "react";
import 'animate.css'
import { useRouter } from "next/router";
import MobileNumberValidation from "@/components/MobileNumberValidation";

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    number: "",
    otp: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    address: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    number:"",
    otp:""
  });

  const inputRefs = {
    fullName: useRef(null),
    address: useRef(null),
    age: useRef(null),
    gender: useRef(null),
    height: useRef(null),
    weight: useRef(null),
    number: useRef(null),
    otp: useRef(null)
  };

  // Handle input change and validate on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Validate a specific field and update error message
  const validateField = (name, value) => {
    let errorMessage = "";
    if(name === 'otp' && value === 'verified'){
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
      setFormData((prev) => ({ ...prev, ['otp']: 'verified' }));
    }

    if (!value.trim() || (name === 'otp' && (value != 'verified' && value.length <= 1)) ) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    
    const inputRef = inputRefs[name]?.current;

    if (errorMessage) {
      inputRef?.classList.add("border-red-500");
      inputRef?.classList.remove("border-green-500");
    } else {
      inputRef?.classList.add("border-green-500");
      inputRef?.classList.remove("border-red-500");
    }
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    let formValid = true;

    Object.keys(formData).forEach((key) => {
      //if (key === "otp" && !formData.number.trim()) return;
      
      if (!formData[key].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`,
        }));
        formValid = false;
      }
      if (formData['otp'] != 'verified') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ['otp']: `Verify OTP.`,
        }));
        formValid = false;
      }
    });

    if (formValid) {
     

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/registration-successful"); // Redirect on success
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      
      console.error(error);
    } 
    }
  };

  // Focus event to hide the error message when user starts typing
  const handleFocus = (e) => {
    const { name } = e.target;

    // Clear error message on focus
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Remove any border colors when focused
    e.target.classList.remove("border-red-500");
    e.target.classList.remove("border-green-500");
  };

  // Blur event to show error message if field is empty
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate field and show error if empty
    validateField(name, value);
  };

  return (
    <div className="p-8 pt-20 bg-gradient-to-r from-red-600 to-black min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeInUp">
        Register for Membership
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">
          Join Our Gym
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
          {["fullName", "address"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-xl font-semibold" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                type={field === "age" || field === "height" || field === "weight" ? "number" : "text"}
                value={formData[field] || ""}
                onChange={handleChange}
                ref={inputRefs[field]}
                
                onBlur={handleBlur}
                onFocus={handleFocus}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg transition-all duration-300"
              />
              {errors[field] && (
                <p className="text-red-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}
          <MobileNumberValidation  handleChange={handleChange}  ref={inputRefs.number} otpRef={inputRefs.otp} onBlur={handleBlur}
               handleFocus={handleFocus} onFocus={handleFocus} error={errors.number} otpError = {errors.otp} validateField= {validateField} />

          {/* Age and Gender in same row */}
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xl font-semibold" htmlFor="age">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                value={formData.age || ""}
                onChange={handleChange}
                ref={inputRefs.age}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg transition-all duration-300"
                maxLength={3}
              />
              {errors.age && (
                <p className="text-red-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                  {errors.age}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-xl font-semibold" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                ref={inputRefs.gender}
                
                onBlur={handleBlur}
                onFocus={handleFocus}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg transition-all duration-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                  {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* Height and Weight in same row */}
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xl font-semibold" htmlFor="height">
                Height (cm)
              </label>
              <input
                id="height"
                name="height"
                type="number"
                value={formData.height || ""}
                onChange={handleChange}
                ref={inputRefs.height}
                
                onBlur={handleBlur}
                onFocus={handleFocus}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg transition-all duration-300"
                maxLength={3}
              />
              {errors.height && (
                <p className="text-red-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                  {errors.height}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-xl font-semibold" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight || ""}
                onChange={handleChange}
                ref={inputRefs.weight}
                onBlur={handleBlur}
                
                onFocus={handleFocus}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg transition-all duration-300"
                maxLength={3}
              />
              {errors.weight && (
                <p className="text-red-500 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                  {errors.weight}
                </p>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded text-lg transition-all duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
