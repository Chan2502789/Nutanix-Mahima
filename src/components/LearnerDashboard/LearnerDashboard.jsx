import React from "react";
import TopBar from "../../components/TopBar";
import Sidebar from "./Sidebar"; // Create this component
import ProfileSection from "./ProfileSection"; // Create this component
import ProfileDetails from "./ProfileDetails"; // Create this component
import InfoList from "./InfoList"; // Create this component
import styles from "./LearnerDashboard.module.css";

function LearnerDashboard() {
  return (
    <div className="hide-scrollbar overflow-auto">
      <div className={styles.learnerScheduleDashboard}>
        <TopBar />
        <div className={styles.mainContent}>
          <Sidebar />
          <main className={styles.dashboardContent}>
            <ProfileSection />
            <ProfileDetails />
            <InfoList />
          </main>
        </div>
      </div>
    </div>
  );
}

export default LearnerDashboard;
