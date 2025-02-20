import React from "react";
import styles from "./LearnerDashboard.module.css";

const infoItems = [
  { icon: "🏡", title: "Address", subtitle: "Mahagun Villament, Noida" },
  { icon: "🎓", title: "College", subtitle: "RV College of Engineering" },
  { icon: "🎓", title: "Graduation Year", subtitle: "2023" },
];

function InfoList() {
  return (
    <ul className={styles.infoList}>
      {infoItems.map((item, index) => (
        <li key={index} className={styles.infoItem}>
          <span className={styles.infoIcon} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>{item.title}</h3>
            <p className={styles.infoSubtitle}>{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default InfoList;
