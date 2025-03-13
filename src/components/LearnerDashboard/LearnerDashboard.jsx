import React from "react";
import TopBar from "../../components/TopBar";
import ProfileDetails from "./ProfileDetails"; // Create this component
import styles from "./LearnerDashboard.module.css";

function LearnerDashboard() {
  return (
    <div className="hide-scrollbar overflow-auto">
      <div className={styles.learnerScheduleDashboard}>
        <TopBar />
        <div className={styles.mainContent}>
          <main className={styles.dashboardContent}>
            <ProfileDetails />
          </main>
        </div>
      </div>
    </div>
  );
}

export default LearnerDashboard;
