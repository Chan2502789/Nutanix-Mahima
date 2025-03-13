import React from "react";
import styles from "./hardware.module.css";

const topics = [
  { name: "Introduction to Linux & Distributions", status: "Completed" },
  { name: "File System Structure & Basic Commands", status: "Completed" },
  { name: "User and Permission Management", status: "Completed" },
  { name: "Package Management (apt, yum)", status: "Ongoing" },
  { name: "Process and Job Control", status: "Ongoing" },
  { name: "Shell Scripting Basics", status: "Ongoing" },
  { name: "Systemd and Service Management", status: "Upcoming" },
  { name: "Linux Networking & Services", status: "Upcoming" },
  { name: "Crontab and Scheduling Tasks", status: "Upcoming" },
  { name: "Log Files and System Monitoring", status: "Upcoming" },
  { name: "Disk Partitioning and Mounting", status: "Upcoming" },
  
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
        <h1>LINUX</h1>

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
