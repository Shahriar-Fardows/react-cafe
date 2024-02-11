import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import AuthProvider from "./providers/AuthProvider.jsx";

// Default axios baseURL
axios.defaults.baseURL = "https://eleventh-assignment-server-iota.vercel.app";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
