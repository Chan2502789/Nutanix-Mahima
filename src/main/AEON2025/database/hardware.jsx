import React from "react";
import styles from "./hardware.module.css";

const topics = [
  { name: "Introduction to Networking", status: "Completed" },
  { name: "Network Topologies", status: "Completed" },
  { name: "OSI & TCP/IP Models", status: "Completed" },

  { name: "IP Addressing & Subnetting", status: "Ongoing" },
  { name: "DNS and DHCP", status: "Ongoing" },
  { name: "Switching & VLANs", status: "Ongoing" },

  { name: "Routing Protocols (RIP, OSPF, BGP)", status: "Upcoming" },
  { name: "Firewalls and NAT", status: "Upcoming" },
  { name: "Wi-Fi and Wireless Networking", status: "Upcoming" }
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
        <h1>DATABASE</h1>

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
