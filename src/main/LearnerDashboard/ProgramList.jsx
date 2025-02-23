import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearnerDashboard.module.css";

const ProgramList = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.programList} aria-labelledby="programsTitle">
      <div className={styles.programsTitleStrip}>
        <h2 id="programsTitle" className={styles.programsTitle}>
          PROGRAMS
        </h2>
      </div>
      <ul className={styles.programGrid}>
        <li
          className={`${styles.programItem} ${styles.largeProgramItem}`}
          onClick={() => navigate("/programs/aeon-2025")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            cursor: "pointer",
            fontSize: isHovered ? "1rem" : "1.5rem",
          }}
        >
          {isHovered ? "AEON 2025 Internship Program" : "AEON 2025"}
        </li>
      </ul>
    </section>
  );
};

export default ProgramList;
