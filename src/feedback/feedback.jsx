import React from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={styles.centeredContent}>
      <div className={styles.feedbackPage}>
        <main className={styles.content}>
          <h1 className={styles.heading}>FEEDBACK</h1>
          <h2 className={styles.trainerName}>SAURAV</h2>
          <div className={styles.feedbackBox}>
            I appreciate the hard work and dedication you put into the recent
            project. Your attention to detail in the{" "}
            <strong>UI/UX design</strong> was particularly impressive, and the
            final product exceeded expectations. However, I noticed some areas
            for improvement, such as <strong>documentation consistency</strong>.
            Could we discuss strategies to address this in future projects?
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;
