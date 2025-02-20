import React from "react";
import styles from "./LearnerDashboard.module.css";
import ProgramItem from "./ProgramItem";

const ProgramList = () => {
  const programs = [
    { icon: "📊", title: "Virtualization", subtitle: "50% complete" },
    { icon: "🌐", title: "Networking", subtitle: "In progress" },
    { icon: "🪀", title: "Yoyo", subtitle: "80% complete" },
    { icon: "🐧", title: "LINUX", subtitle: "Completed" },
    { icon: "🎓", title: "Interns2023", subtitle: "Upcoming" },
  ];

  return (
    <section className={styles.programList} aria-labelledby="programsTitle">
      <h2 id="programsTitle" className={styles.programsTitle}>
        PROGRAMS
      </h2>
      <ul className={styles.programGrid}>
        {programs.map((program, index) => (
          <li key={index}>
            <ProgramItem {...program} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramList;
