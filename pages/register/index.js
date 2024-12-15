"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true
    setNotificationMessage(""); // Clear previous notifications

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
      setNotificationMessage("Registration failed. Please try again.");
      setNotificationType("error");
      setShowNotification(true);
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-8 pt-20 bg-gradient-to-r from-red-600 to-black min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 animate__animated animate__fadeInUp">
        Register for Membership
      </h1>

      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 mt-4 rounded-lg shadow-lg transition-all duration-300 z-50 ${
            notificationType === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {notificationMessage}
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">
          Join Our Gym
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
          {["fullName", "address", "age", "gender", "height", "weight"].map((field) => (
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
                required
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
              />
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading} // Disable while loading
              className={`${
                loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
              } text-white py-3 px-6 rounded text-lg transition-all duration-300`}
            >
              {loading ? "In Progress..." : "Register"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
