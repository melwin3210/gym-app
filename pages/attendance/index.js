// pages/attendance.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Attendance() {
  const [workoutType, setWorkoutType] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [router]);

  const handleSubmit = async () => {
    const response = await fetch("/api/attendance", {
      method: "POST",
      body: JSON.stringify({ workoutType, time }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-red-600 to-black min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">Mark Your Attendance</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400">
          Select Your Workout and Time
        </h2>
        <form className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="workoutType">
              Workout Type
            </label>
            <input
              id="workoutType"
              name="workoutType"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              placeholder="Enter Workout Type"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-semibold" htmlFor="time">
              Time (e.g., 6:00 AM)
            </label>
            <input
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Select Time"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-red-600 text-white py-3 px-6 rounded text-lg hover:bg-red-700 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
