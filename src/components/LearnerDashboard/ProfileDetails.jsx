import React from "react";
import styles from "./LearnerDashboard.module.css";

function ProfileDetails() {
  return (
    <section className={styles.profileDetails}>
      <h2 className={styles.profileDetailsTitle}>Profile</h2>
      <p className={styles.profileDetailsDescription}>
        CGPA: 9.39, Stream: Electronics and Instrumentation, Tools: PYTHON
      </p>
      <button className={styles.viewDetailsButton}>View Details</button>
    </section>
  );
}

export default ProfileDetails;
