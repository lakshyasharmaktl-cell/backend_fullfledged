import React, { useState } from "react";

export default function Notification() {

  const [settings, setSettings] = useState({
    email: true,
    courseUpdates: true,
    security: true
  });

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      console.log("Notification Settings:", settings);
      alert("Notification settings saved");

    } catch (error) {

      console.error(error);
      alert("Something went wrong");

    }
  };

  return (
    <div className="max-w-md bg-zinc-900 text-white p-6 rounded-xl shadow-lg">

      <h2 className="text-xl font-semibold mb-6">
        Notification Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email Notifications */}
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={settings.email}
            onChange={() => handleToggle("email")}
            className="w-5 h-5"
          />
        </div>

        {/* Course Updates */}
        <div className="flex justify-between items-center">
          <span>Whisky Updates</span>
          <input
            type="checkbox"
            checked={settings.courseUpdates}
            onChange={() => handleToggle("courseUpdates")}
            className="w-5 h-5"
          />
        </div>

        {/* Security Alerts */}
        <div className="flex justify-between items-center">
          <span>Security Alerts</span>
          <input
            type="checkbox"
            checked={settings.security}
            onChange={() => handleToggle("security")}
            className="w-5 h-5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-medium"
        >
          Save Settings
        </button>

      </form>

    </div>
  );
}