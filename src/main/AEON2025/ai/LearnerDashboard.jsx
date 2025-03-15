import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../TopBar";
import Hardware from "./hardware";

const CloudDashboard = () => {
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
      <footer className={styles.footer}>
        <p>AEON</p>
      </footer>
    </div>
  );
};

export default CloudDashboard;
