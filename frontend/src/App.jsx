import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Signup/Navbar";
import Signup from "./components/Signup/Signup";
import Otpsection from "./components/Signup/Otpsection";
import Loginpage from "./components/Signup/Loginpage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/otp" element={<Otpsection />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </>
  );
}
