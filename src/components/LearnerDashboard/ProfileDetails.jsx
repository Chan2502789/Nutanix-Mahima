import React from "react";
import styles from "./LearnerDashboard.module.css";

function ProfileDetails() {
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}></div>
          <h2 className={styles.profileName}>Mahima Yadav</h2>
          <p className={styles.profileId}>ID: 21280</p>
          <p className={styles.profileDesignation}>
            Intern, Systems Reliability Engineer
          </p>
        </div>
        <div className={styles.profileDetails}>
          <p>
            <strong>Mentor:</strong> Debjit Chatterjee
          </p>
          <p>
            <strong>College:</strong> Shri Ramdeobaba College of Engineering and
            Management
          </p>
          <p>
            <strong>CGPA:</strong> 9.34
          </p>
          <p>
            <strong>Stream:</strong> Computer Science and Engineering (AIML)
          </p>
          <p>
            <strong>Group Name:</strong> A
          </p>
          <p>
            <strong>Tools:</strong> Python, Java, HTML, CSS, JavaScript
          </p>
          <p>
            <strong>Graduation Year:</strong> 2025
          </p>
          <p>
            <strong>Address:</strong> Plot no. 55, Girdhar, Gayatri Nagar, Jai
            Durga Society, Mankapur, Nagpur - 440030
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetails;
