import React, { useState } from "react";

export default function ChangeEmail() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log("New Email:", email);
      alert("Email updated successfully");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    }
  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">

      <h2 className="text-xl font-semibold mb-4">
        Change Email
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          placeholder="Enter new email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-medium"
        >
          Update Email
        </button>

      </form>

    </div>
  );
}