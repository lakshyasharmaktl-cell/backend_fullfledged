import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black">
      <h1 className="text-indigo-500 text-xl font-bold">My App</h1>

      <div className="flex gap-4">
        <Link to="/" className="text-white hover:underline">
          Signup
        </Link>

        <Link to="/login" className="text-white hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
