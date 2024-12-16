import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/firebase";
import Button from "./UI/Button";

export default function Register() {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("Recaptcha verified");
          },
          "expired-callback": () => {
            console.warn("Recaptcha expired. Try again.");
          },
        }
      );
    }
  }, []);

  // Handle Sending OTP
  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      setErrorMessage("Please enter a valid mobile number.");
      return;
    }

    try {
      const phoneNumber = `${countryCode}${mobileNumber}`; // Format: +91 1234567890
      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setIsOtpSent(true);
      window.confirmationResult = confirmationResult;
      setErrorMessage("");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Ensure the number is correct.");
    }
  };
  const mobileNumberHandler = (val) => {
    setIsOtpSent(false);
    setMobileNumber(val);
    setErrorMessage("");
  };
  // Handle OTP Verification
  const handleVerifyOtp = async () => {
    const confirmationResult = window.confirmationResult;

    if (!otp || otp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);

      //   router.push("/registration-success"); // Redirect on success
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="my-3">
      {/* Phone Number Input */}
      <div className="flex items-center mb-6">
        {/* Country Code Dropdown */}
        <div className="mr-2">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+81">🇯🇵 +81</option>
            <option value="+971">🇦🇪 +971</option>
          </select>
        </div>

        {/* Mobile Number Input */}
        <div className="flex-grow">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => mobileNumberHandler(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Recaptcha Container */}
      <div id="recaptcha-container"></div>

      {/* OTP Section */}
      {!isOtpSent ? (
        <Button
          handleSendOtp={handleSendOtp}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg transition-all duration-300"
        >
          {" "}
          Send OTP
        </Button>
      ) : (
        <div className="flex items-center mb-6">
          {/* OTP Input */}
          <div className="flex-grow mr-2">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <p className="mt-4 text-center text-red-500 font-medium">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
