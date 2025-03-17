import React from "react";
import styles from "./feed.module.css";
import { useLocation } from "react-router-dom";
import TopBar from "../components/TopBar";
const Feedback = () => {
  const location = useLocation();
  const { trainer = "Unknown", feedback = "No feedback provided." } =
    location.state || {};

  return (
    <div>
      <TopBar />

      <div className={styles.centeredContent}>
        <div className={styles.feedbackPage}>
          <main className={styles.content}>
            <h1 className={styles.heading}>FEEDBACK</h1>
            <h2 className={styles.trainerName}>{trainer}</h2>
            <div className={styles.feedbackBox}>{feedback}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
