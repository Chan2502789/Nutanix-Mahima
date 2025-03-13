import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../components/TopBar";
import Feedback from "./feedback";

const FeedbackDashboard = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <div className={styles.shift}>
      <main>
        <Feedback />
      </main>
      </div>
     
      <footer className={styles.footer}>
        <p>AEON</p>
      </footer>
    </div>
  );
};

export default FeedbackDashboard;
