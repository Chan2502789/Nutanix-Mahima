import React from "react";
import styles from "./LearnerDashboard.module.css";

function ProfileDetails() {
  return (
    <div className={styles.container}>
      <section className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            {/* Profile Image on the Left */}
            <div className={styles.profileImage}></div>

            {/* Profile Details on the Right */}
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Mahima Yadav</h2>
              <p className={styles.profileId}>ID: 21280</p>
              <p className={styles.profileDesignation}>
                Intern, Systems Reliability Engineer
              </p>
            </div>
          </div>

          {/* Additional Profile Information */}
          <div className={styles.profileDetails}>
            <div className={styles.infoRow}>
              <strong>Mentor:</strong> <span>Debjit Chatterjee</span>
            </div>
            <div className={styles.infoRow}>
              <strong>College:</strong>{" "}
              <span>Shri Ramdeobaba College of Engineering and Management</span>
            </div>
            <div className={styles.infoRow}>
              <strong>CGPA:</strong> <span>9.34</span>
            </div>
            <div className={styles.infoRow}>
              <strong>Stream:</strong>{" "}
              <span>Computer Science and Engineering (AIML)</span>
            </div>
            <div className={styles.infoRow}>
              <strong>Group Name:</strong> <span>A</span>
            </div>
            <div className={styles.infoRow}>
              <strong>Tools:</strong>{" "}
              <span>Python, Java, HTML, CSS, JavaScript</span>
            </div>
            <div className={styles.infoRow}>
              <strong>Graduation Year:</strong> <span>2025</span>
            </div>
            <div className={styles.infoRow}>
              <strong>Address:</strong>
              <span>
                Plot no. 55, Girdhar, Gayatri Nagar, Jai Durga Society,
                Mankapur, Nagpur - 440030
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileDetails;
