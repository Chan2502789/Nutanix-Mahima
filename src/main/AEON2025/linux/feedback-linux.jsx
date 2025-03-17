import React from "react";
import styles from "./feedback.module.css";
import { useLocation } from "react-router-dom";
import TopBar from "../TopBar";

const FeedbackLinux = () => {
  const location = useLocation();
  const selectedDate = location.state?.date || "";

  const feedbackMap = {
    "Monday, 15 January 2025": {
      trainer: "xyz",
      feedback:
        "Great work on the React module! Your understanding of hooks is solid. Next time, try to simplify your components more.",
    },
  };

  const { trainer = "Unknown", feedback = "No feedback provided." } =
    feedbackMap[selectedDate] || {};

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

export default FeedbackLinux;
