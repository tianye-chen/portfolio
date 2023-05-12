import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
