import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../../components/TopBar";
import ProfileDetails from "./ProfileDetails";

const AEON = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <main>
        <ProfileDetails />
      </main>
    </div>
  );
};

export default AEON;
