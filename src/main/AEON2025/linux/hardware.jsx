import React from "react";
import styles from "./hardware.module.css";

const topics = [
  { name: "Datacenter Evolution", status: "Completed" },
  { name: "Basic Hardware Components", status: "Ongoing" },
  { name: "Datacenter Power and Cooling", status: "Upcoming" },
  { name: "Server Rack Management", status: "Upcoming" },
];

const statusColors = {
  Completed: "#32CD32", // green
  Ongoing: "#00CED1", // turquoise
  Upcoming: "#FF6347", // tomato
};

const linux = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>HARDWARE</h1>
<<<<<<< HEAD
        <div className={styles.toggle}>
          <input type="checkbox" id="switch" className={styles.switch} />
          <label htmlFor="switch"></label>
        </div>
=======

>>>>>>> parent of 7bac3e2 (All the changes are done on 13 March)
      </div>

      <div className={styles.topicList}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.topicCard}>
            <span className={styles.topicName}>{topic.name}</span>
            <span
              className={styles.status}
              style={{ color: statusColors[topic.status] }}
            >
              {topic.status}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>AEON</div>
    </div>
  );
};

export default linux;
