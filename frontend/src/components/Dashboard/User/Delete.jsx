import React from "react";
import axios from 'axios'
export default function Delete() {

  const handleDelete = async () => {

    try {

      const confirmDelete = window.confirm("Are you sure you want to delete your account?");

      if (!confirmDelete) return;

      console.log("Account deleted");

      alert("Account deleted successfully");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    }

  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">

      <h2 className="text-xl font-semibold mb-3 text-red-400">
        Delete Account
      </h2>

      <p className="text-sm text-zinc-400 mb-6">
        Warning: This action cannot be undone. All your data will be permanently removed.
      </p>

      <button
        onClick={handleDelete}
        className="w-full bg-red-500 hover:bg-red-600 transition p-3 rounded-lg font-medium"
      >
        Delete My Account
      </button>

    </div>
  );
}