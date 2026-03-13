import React, { useState } from "react";

export default function ChangePassword() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      console.log("Current:", currentPassword);
      console.log("New:", newPassword);

      alert("Password changed successfully");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

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
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-medium"
        >
          Update Password
        </button>

      </form>

    </div>
  );
}