"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function RegistrationSuccessful() {
  const router = useRouter();
  const [timer, setTimer] = useState(3);  // Set the initial timer value to 3 seconds

  useEffect(() => {
    // Countdown timer
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          router.push("/"); // Redirect to homepage after 3 seconds
        }
        return prevTimer - 1;
      });
    }, 1000); // Decrease timer every 1 second

    return () => clearInterval(countdown); // Clear the interval when the component unmounts
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-800 text-white">
      <div className="text-center p-8 bg-black rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInUp">
          Registration Successful!
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Thank you for registering with us.
        </p>
        <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          Navigating to the homepage in {timer} second{timer !== 1 ? "s" : ""}.
        </p>
        <p className="text-lg mb-6">
          <span className="text-gray-200">If you are not redirected automatically, </span>
          <a 
            href="/" 
            className="text-red-400 hover:text-red-600 transition duration-300"
          >
            click here
          </a> 
          to go back to the homepage.
        </p>
        <div className="animate__animated animate__bounceIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-400 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
