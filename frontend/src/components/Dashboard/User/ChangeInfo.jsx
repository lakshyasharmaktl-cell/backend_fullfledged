import React, { useState } from "react";
import { User, Mail } from "lucide-react";

export default function ChangeInfo() {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:1234/updated_Profile", {
        method: "PUT", // change to POST if your backend requires
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "YOUR_API_KEY_HERE"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Update failed");
      }

      setMessage("Profile updated successfully ✅");

    } catch (error) {

      console.error(error);
      setMessage("Error updating profile ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 p-6 max-w-xl">

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        Update Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-500">Name</label>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
            <User size={18} className="text-gray-400" />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-500">Email</label>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1 focus-within:ring-2 focus-within:ring-indigo-500">
            <Mail size={18} className="text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {/* Message */}
        {message && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}

      </form>

    </div>
  );
}