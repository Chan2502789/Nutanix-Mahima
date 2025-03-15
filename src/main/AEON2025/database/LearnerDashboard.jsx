import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../TopBar";
import Hardware from "./hardware";

const DatabaseDashboard = () => {
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

export default DatabaseDashboard;
