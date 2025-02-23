import React, { useState } from "react";
import styles from "./LearnerDashboard.module.css";
import { useNavigate } from "react-router-dom";

const ProgramList = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { id: 1, text: "Linux", hoverText: "Linux Training + Linux Breakfix" },
    {
      id: 2,
      text: "Hardware",
      hoverText:
        "Evolution of Datacenters | Basic Hardware | Datacenter Components | Server +",
    },
    { id: 3, text: "Networking", hoverText: "Networking basics" },
  ];

  return (
    <section className={styles.programList} aria-labelledby="programsTitle">
      <div className={styles.programsTitleStrip}>
        <h2 id="programsTitle" className={styles.programsTitle}>
          AEON 2025
        </h2>
      </div>
      <ul className={styles.programGrid}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`${styles.programItem} ${styles.largeProgramItem}`}
            onClick={() => navigate("/programs/aeon-2025")}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              cursor: "pointer",
              fontSize: hoveredItem === item.id ? "1rem" : "1.5rem", // Reduce size on hover
            }}
          >
            {hoveredItem === item.id ? item.hoverText : item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramList;
