import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from './Context/Allcontext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
      <App />

    <BrowserRouter/>
     </AuthProvider>
  </React.StrictMode>
);
