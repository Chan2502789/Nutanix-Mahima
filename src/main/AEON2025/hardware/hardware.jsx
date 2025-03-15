import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hardware.module.css";

const topics = [
  { name: "Datacenter Evolution", status: "Completed" },
  { name: "Basic Hardware Components", status: "Ongoing" },
  { name: "Datacenter Power and Cooling", status: "Upcoming" },
  { name: "Server Rack Management", status: "Upcoming" },
];

const statusColors = {
  Completed: "grey",
  Ongoing: "#32CD32",
  Upcoming: "#FF6347",
};

const Hardware = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate("/mentor-feedback"); // Navigate to this route
  };

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

      <div className={styles.feedbackContainer}>
        <button className={styles.feedbackButton} onClick={handleFeedbackClick}>
          Feedback by Mentor
        </button>
      </div>
    </div>
  );
};

export default Hardware;
