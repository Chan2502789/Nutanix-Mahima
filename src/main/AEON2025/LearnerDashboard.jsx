import React from "react";
import styles from "./LearnerDashboard.module.css";
import TopBar from "../../components/TopBar";
import ProgramList from "./ProgramList";

const AEON = () => {
  return (
    <div className={styles.learnerDashboard}>
      <TopBar />
      <main>
        <ProgramList />
      </main>
    </div>
  );
};

export default AEON;
