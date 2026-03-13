import React from "react";
import { Mail, MapPin, Calendar, User } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6">

      {/* Profile Header */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 p-6 flex items-center gap-6">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-500/40"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            laxxy
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </p>

          <button className="mt-3 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Information */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800 p-6">

        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="flex items-center gap-3">
            <User className="text-indigo-500" />
            <div>
            
              <p className="font-medium text-gray-800 dark:text-white">
                lakshya
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800 dark:text-white">
                laxxy@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium text-gray-800 dark:text-white">
                Haryana, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-medium text-gray-800 dark:text-white">
                Jan 2025
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}