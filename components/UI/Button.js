"use client";

import React, {  useState } from "react";

const Button = ({ children, handleSendOtp }) => {
  const [isProcessing, setIsProcessing] = useState(false); // Local processing state

  const handleClick = async () => {
    setIsProcessing(true);

    try {
      await handleSendOtp(); // Call the async handler
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isProcessing } // Disable during optimistic or processing state
      className={`w-full ${
        isProcessing 
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
      } text-white py-3 rounded-lg text-lg transition-all duration-300`}
    >
      {isProcessing ? "Sending OTP..." : children}
    </button>
  );
};

export default Button;
