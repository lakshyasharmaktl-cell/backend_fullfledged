import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  // 🔹 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔹 Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  // 🔹 Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔸 Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.warning("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1234/laxxy", // 🔁 your backend endpoint
        formData
      );

      toast.success(response.data?.msg || "Signup successful");

      // 🔹 Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Sign Up
        </h1>

        {/* Name */}
        <div className="mb-4 relative">
          <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full pl-10 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full pl-10 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
            className="w-full pl-10 pr-10 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          {showPassword ? (
            <EyeOff
              onClick={() => setShowPassword(false)}
              className="absolute right-3 top-3 text-gray-400 w-5 h-5 cursor-pointer"
            />
          ) : (
            <Eye
              onClick={() => setShowPassword(true)}
              className="absolute right-3 top-3 text-gray-400 w-5 h-5 cursor-pointer"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}