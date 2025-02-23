import React from "react";
import styles from "./LearnerDashboard.module.css";

const ProgramItem = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.programItem}>
      <div className={styles.programIcon} aria-hidden="true">
        {icon}
      </div>
      <div className={styles.programInfo}>
        <h3 className={styles.programTitle}>{title}</h3>
        <p className={styles.programSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ProgramItem;
