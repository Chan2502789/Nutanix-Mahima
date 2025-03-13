import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../../components/TopBar";
import ProgramList from "./ProgramList";

const Dashboard = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <main>
        <ProgramList />
      </main>
      <footer className={styles.footer}>
        <p>AEON</p>
      </footer>
    </div>
  );
};

export default Dashboard;
