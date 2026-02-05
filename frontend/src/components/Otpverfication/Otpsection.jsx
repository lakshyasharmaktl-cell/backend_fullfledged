import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added

export default function Otpsection() {
  const navigate = useNavigate(); // ✅ added

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("OTP Submitted:", otpValue);

    navigate("/login"); // ✅ react-dom navigation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Verify OTP
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Enter the 4-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex justify-between gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
          >
            Verify OTP
          </button>
        </form>

      </div>
    </div>
  );
}
