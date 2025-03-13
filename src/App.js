import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearnerDashboard from "./components/LearnerDashboard/LearnerDashboard"; // Correct import path
import Dashboard from "./main/LearnerDashboard/LearnerDashboard";
import CourseScheduleDashboard from "./shedule/CourseSchedule/CourseScheduleDashboard";
import AEON from "./main/AEON2025/LearnerDashboard";
<<<<<<< HEAD
import linux from "./main/AEON2025/linux/LearnerDashboard";
import HardwareDashboard from "./main/AEON2025/hardware/LearnerDashboard";
=======
import LinuxDashboard from "./main/AEON2025/hardware/LearnerDashboard";
import HardwareDashboard from "./main/AEON2025/hardware/LearnerDashboard";
import NetworkingDashboard from "./main/AEON2025/hardware/LearnerDashboard";
>>>>>>> parent of 7bac3e2 (All the changes are done on 13 March)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/profile" element={<LearnerDashboard />} />
        <Route path="/schedule" element={<CourseScheduleDashboard />} />
        <Route path="/programs/aeon-2025" element={<AEON />} />
        <Route
          path="/programs/aeon-2025/hardware"
          element={<HardwareDashboard />}
        />
<<<<<<< HEAD
        <Route path="/programs/aeon-2025/linux" element={<linux />} />
=======
        <Route
          path="/programs/aeon-2025/linux"
          element={<LinuxDashboard />}
        />
        <Route
          path="/programs/aeon-2025/networking"
          element={<NetworkingDashboard />}
        />
     
>>>>>>> parent of 7bac3e2 (All the changes are done on 13 March)
      </Routes>
    </Router>
  );
}

export default App;
