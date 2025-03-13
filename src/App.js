import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearnerDashboard from "./components/LearnerDashboard/LearnerDashboard"; // Correct import path
import Dashboard from "./main/LearnerDashboard/LearnerDashboard";
import CourseScheduleDashboard from "./shedule/CourseSchedule/CourseScheduleDashboard";
import AEON from "./main/AEON2025/LearnerDashboard";
import LinuxDashboard from "./main/AEON2025/linux/LearnerDashboard";
import HardwareDashboard from "./main/AEON2025/hardware/LearnerDashboard";
import NetworkingDashboard from "./main/AEON2025/networking/LearnerDashboard";
import VirtulizationDashboard from "./main/AEON2025/virtualization/LearnerDashboard";
import MockDashboard from "./main/AEON2025/mock/LearnerDashboard";
import CloudDashboard from "./main/AEON2025/cloud/LearnerDashboard";
import DatabaseDashboard from "./main/AEON2025/database/LearnerDashboard";
import CyberDashboard from "./main/AEON2025/cyber/LearnerDashboard";
import AIDashboard from "./main/AEON2025/ai/LearnerDashboard";
import FeedbackDashboard from "./feedback/LearnerDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/profile" element={<LearnerDashboard />} />
        <Route path="/schedule" element={<CourseScheduleDashboard />} />
        <Route path="/programs/aeon-2025" element={<AEON />} />
        <Route path="/feedback" element={<FeedbackDashboard />} />
        <Route
          path="/programs/aeon-2025/hardware"
          element={<HardwareDashboard />}
        />
        <Route
          path="/programs/aeon-2025/linux"
          element={<LinuxDashboard />}
        />
        <Route
          path="/programs/aeon-2025/networking"
          element={<NetworkingDashboard />}
        />
        <Route
          path="/programs/aeon-2025/virtualization"
          element={<VirtulizationDashboard />}
        />
        <Route
          path="/programs/aeon-2025/cybersecurity"
          element={<CyberDashboard />}
        />
        <Route
          path="/programs/aeon-2025/artificial intelligence"
          element={<AIDashboard />}
        />
        <Route
          path="/programs/aeon-2025/database"
          element={<DatabaseDashboard />}
        />
        <Route
          path="/programs/aeon-2025/mock calls"
          element={<MockDashboard />}
        />
        <Route
          path="/programs/aeon-2025/cloud computing" 
          element={<CloudDashboard />}
        />
       
     
      </Routes>
    </Router>
  );
}

export default App;
