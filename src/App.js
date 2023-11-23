// App.js
import LoginPage from "./pages/LogPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <div className="page"><Route path="/LogPage" element={<LoginPage />} /></div>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/WindSpeedStats" element={<WindSpeedStats />} />
      </Routes>
    </Router>
  );
}

export default App;
