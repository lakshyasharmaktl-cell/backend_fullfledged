import { useState } from "react";

import Profile from "./User/Profile";
import ChangeInfo from "./User/ChangeInfo";
import ChangeEmail from "./User/ChangeEmail";
import ChangePassword from "./User/ChangePassword";
import Delete from "./User/Delete";
import Setting from "./User/Setting";
import Language from "./User/Language";
import Notification from "./User/Notification";
import Image from './User/ChangeImg'

import {
  User,
  Mail,
  Lock,
  Settings,
  Trash2,
  UserCog,
  Languages,
  Bell
} from "lucide-react";

export default function HomeBashBoard() {

  const [activeComponent, setActiveComponent] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", icon: User, component: <Profile /> },
    { id: "changeInfo", label: "Change Info", icon: UserCog, component: <ChangeInfo /> },
    { id: "changeEmail", label: "Change Email", icon: Mail, component: <ChangeEmail /> },
    { id: "changeImage", label: "Change Image", icon: Mail, component: <Image /> },
    { id: "changePassword", label: "Change Password", icon: Lock, component: <ChangePassword /> },
    { id: "language", label: "Language", icon: Languages, component: <Language /> },
    { id: "notification", label: "Notification", icon: Bell, component: <Notification /> },
    { id: "delete", label: "Delete Account", icon: Trash2, component: <Delete /> },
    // { id: "setting", label: "Setting", icon: Settings, component: <Setting /> },
  ];

  const activeItem = menuItems.find((item) => item.id === activeComponent);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-black">

      <div className="flex max-w-7xl mx-auto">

        {/* Sidebar */}
        <div className="w-[260px] bg-white dark:bg-zinc-900 shadow-xl rounded-xl p-4 space-y-2 border border-gray-200 dark:border-zinc-800">

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Account Dashboard
          </h2>

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveComponent(item.id)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                  
                  ${
                    activeComponent === item.id
                      ? "bg-indigo-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-zinc-800"
                  }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 ml-6 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800 p-6">

          {activeItem?.component}

        </div>

      </div>
    </div>
  );
}