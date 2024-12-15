"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success"); // "success" or "error"
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the backend API
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
     

      // After 3 seconds, hide the notification and redirect to the homepage
      router.push("/registration-successful");
    } else {
      // Handle error response
      setNotificationMessage("Registration failed. Please try again.");
      setNotificationType("error"); // Set type to error
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <div className="p-8 pt-20 bg-gradient-to-r from-red-600 to-black min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeInUp">Register for Membership</h1>

      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 mt-4 rounded-lg shadow-lg transition-all duration-300 z-50
          ${notificationType === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
        >
          {notificationMessage}
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">
          Join Our Gym
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              placeholder="Age"
              type="number"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="gender">Gender</label>
            <input
              id="gender"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="height">Height</label>
            <input
              id="height"
              name="height"
              placeholder="Height"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="weight">Weight</label>
            <input
              id="weight"
              name="weight"
              placeholder="Weight"
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded text-lg hover:bg-red-700 transition-all duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
