import React from "react";
import styles from "./hardware.module.css";

const topics = [
  { name: "Datacenter Evolution", status: "Completed" },
  { name: "Basic Hardware Components", status: "Ongoing" },
  { name: "Datacenter Power and Cooling", status: "Upcoming" },
  { name: "Server Rack Management", status: "Upcoming" },
];

const statusColors = {
  Completed: "grey", // green
  Ongoing: "#32CD32", // turquoise
  Upcoming: "#FF6347", // tomato
};

const Hardware = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>HARDWARE</h1>

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
    </div>
  );
};

export default Hardware;
