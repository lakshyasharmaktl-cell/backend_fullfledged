import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGlassWhiskey, FaLock, FaEnvelope } from "react-icons/fa";

export default function Loginpage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a15] px-4 font-sans mt-9">
      {/* Main Container */}
      <div className="flex w-full max-w-5xl bg-[#0a1128] rounded-3xl shadow-2xl overflow-hidden border border-white/10">

        {/* Left Side: Whisky GIF/Image */}
        <div className="hidden lg:flex lg:w-1/2 relative h-100 mt-20">
          <img
            src="https://res.cloudinary.com/dzskwfinc/image/upload/v1770129324/f06f9f04bb74b8c8b9fe6842dfabab07_qmh82b.gif"
            alt="Whisky Pour"
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-50" />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative group">
              <label className="block text-sm font-medium text-amber-500/80 mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@whiskyhub.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#111c44] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative group">
              <label className="block text-sm font-medium text-amber-500/80 mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#111c44] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400 cursor-pointer">
                <input type="checkbox" className="mr-2 accent-amber-600" /> Remember me
              </label>
              <button type="button" className="text-amber-500 hover:text-amber-400 transition">
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/20 active:scale-[0.98]"
            >
              Sign In to Your Account
            </button>
          </form>

          {/* Sign Up Link */}

        </div>

      </div>
    </div>
  );
}