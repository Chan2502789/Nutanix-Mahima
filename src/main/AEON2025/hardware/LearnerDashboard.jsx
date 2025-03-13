import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../../../components/TopBar";
import Hardware from "./hardware";

const HardwareDashboard = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <br />
      <br />
      <br />
      <br />
      <main>
        <Hardware />
      </main>
    </div>
  );
};

export default HardwareDashboard;
