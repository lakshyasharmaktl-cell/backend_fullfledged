import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-500">
      <h1 className="text-black text-xl font-bold">My App</h1>

      <div className="flex gap-4">
        <Link to="/" className="text-white hover:underline bg-red-500 p-2.5 rounded-full font-normal items-center">
          Signup
        </Link>

        <Link to="/login" className="text-white hover:underline bg-red-500 p-2.5 rounded-full font-normal items-center">
          Login
        </Link>
      </div>
    </nav>
  );
}
