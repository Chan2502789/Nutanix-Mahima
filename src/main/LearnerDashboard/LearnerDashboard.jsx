import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../../components/TopBar";
import ProgramList from "./ProgramList";

const Dashboard = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <div className={styles.privateSection} aria-label="Private section">
        <span className={styles.private}>Private</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/24fb38b3b3ddafdad7eb24a5e8a15a37d421173886ab21f200b41a64c6312342?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
          className={styles.privateIcon}
          alt="Private icon"
          width="80"
          height="80"
        />
      </div>
      <main>
        <ProgramList />
      </main>
    </div>
  );
};

export default Dashboard;
