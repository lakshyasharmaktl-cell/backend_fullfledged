import React, { useState } from "react";
import { User, Mail } from "lucide-react";
import axios from 'axios';

export default function ChangeInfo() {
  const [formData, setFormData] = useState({
    name: "",
    
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

      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("userToken");

     
      const response = await axios.put(`http://localhost:1234/updated_Profile/${userId}`, 
        {
          name: formData.name,
        
        }, 
        {
          headers: {
            "x-api-key": token
          }
        }
      );

      console.log(response)

      if (response.status === 200) {
        setMessage("Profile updated successfully ✅");
      }

    } catch (error) {
      console.error("Update Error:", error);
      const errorMsg = error.response?.data?.message || "Error updating profile ❌";
      setMessage(errorMsg);
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
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
            />
          </div>
        </div>

      
       /
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {message && (
          <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}