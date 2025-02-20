/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./LearnerDashboard.module.css";

function ProfileSection() {
  return (
    <section className={styles.profileSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/56ef85b22f3c6b5c37ab030d8dc665b9acfdb295015aefedeb09fd7488689b74?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
        alt="Profile picture of Mahima Yadav"
        className={styles.profileImage}
      />
      <div className={styles.profileInfo}>
        <h2 className={styles.profileName}>Mahima Yadav</h2>
        <div className={styles.profileId}>
          <span className={styles.idLabel}>ID 21280</span>
        </div>
        <p className={styles.profileDescription}>
          Welcome to the Desktop Framework Dashboard
        </p>
      </div>
      <button className={styles.editProfileButton}>Edit Profile</button>
    </section>
  );
}

export default ProfileSection;
