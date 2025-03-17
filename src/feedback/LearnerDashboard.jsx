import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../components/TopBar";
import Discussions from "./discussions";

const FeedbackDashboard = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <div className={styles.shift}>
        <main>
          <Discussions />
        </main>
      </div>

      <footer className={styles.footer}>
        <p>AEON</p>
      </footer>
    </div>
  );
};

export default FeedbackDashboard;
