import React, { useState } from "react";

export default function Language() {

  const [language, setLanguage] = useState("English");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      console.log("Selected Language:", language);
      alert("Language updated successfully");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    }
  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">

      <h2 className="text-xl font-semibold mb-5">
        Language Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>English</option>
          <option>Ruissian</option>
          <option>Hindi</option>
          <option>Dutch</option>
          <option>French</option>
          <option>German</option>
          <option>japanese</option>
          <option>Arabic</option>
          <option>Chinese</option>
          <option>Korean</option>
          <option>Polish</option>
          <option>Itlian</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-medium"
        >
          Save Language
        </button>

      </form>

    </div>
  );
}