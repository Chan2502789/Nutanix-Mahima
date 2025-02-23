import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearnerDashboard from "./components/LearnerDashboard/LearnerDashboard"; // Correct import path
import Dashboard from "./main/LearnerDashboard/LearnerDashboard";
import CourseScheduleDashboard from "./shedule/CourseSchedule/CourseScheduleDashboard";
import AEON from "./main/AEON2025/LearnerDashboard";

function App() {
  return (
    <Router>
      <div className="Dashboard">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="Home">
        <Routes>
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="LearnerDashboard">
        <Routes>
          <Route path="/profile" element={<LearnerDashboard />} />
        </Routes>
      </div>
      <div className="LearnerDashboard">
        <Routes>
          <Route path="/schedule" element={<CourseScheduleDashboard />} />
        </Routes>
      </div>
      <div className="AEON2025">
        <Routes>
          <Route path="/programs/aeon-2025" element={<AEON />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
