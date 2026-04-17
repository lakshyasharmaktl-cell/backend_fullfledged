import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:1234";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("userToken");
      
      // ✅ check login
      if (!userId || !token) {
        alert("Session expired. Please login again.");
        return;
      }

      // ✅ validations
      if (!currentPassword || !newPassword || !confirmPassword) {
        alert("All fields are required");
        return;
      }

      if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      setLoading(true);

      // ✅ API CALL WITH TOKEN (MAIN FIX)
      const response = await axios.post(
        `${BASE_URL}/change_password/${userId}`,
        {
          oldPassword: currentPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            'x-api-key':token
          },
        }
      );

      alert(response.data.msg || "Password changed successfully");

      // ✅ reset fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("ERROR =>", error);

      alert(
        error.response?.data?.msg ||
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-5">
        Change Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

      </form>
    </div>
  );
}