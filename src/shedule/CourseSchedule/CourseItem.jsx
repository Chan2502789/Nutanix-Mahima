import React from "react";
import styles from "./CourseScheduleDashboard.module.css";

const CourseItem = ({ emoji, title, subtitle, trainer }) => {
  return (
    <div className={styles.courseItem} role="listitem">
      <div className={styles.courseEmoji} aria-hidden="true">
        {emoji}
      </div>
      <div className={styles.courseDetails}>
        <h3 className={styles.courseTitle}>{title}</h3>
        <p className={styles.courseSubtitle}>{subtitle}</p>
      </div>
      <p className={styles.courseTrainer}>Trainer: {trainer}</p>
    </div>
  );
};

export default CourseItem;
