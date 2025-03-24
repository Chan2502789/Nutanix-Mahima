import React, { useState } from "react";
import styles from "./feed.module.css";
import TopBar from "../components/TopBar";

const feedbacks = [
  {
    trainer: "Akhil Amerneni",
    topic: "Virtualization",
    feedback:
      "It all started with a random letter. Several of those were joined forces to create a random word. The words decided to get together and form a random sentence. They decided not to stop there and it wasn't long before a random paragraph had been cobbled together.",
  },
  {
    trainer: "Pannaga Shree",
    topic: "Linux",
    feedback:
      "It all started with a random letter. Several of those were joined forces to create a random word. The words decided to get together and form a random sentence. They decided not to stop there and it wasn't long before a random paragraph had been cobbled together.",
  },
  {
    trainer: "Shashi Sekhar",
    topic: "Networking",
    feedback:
      "It all started with a random letter. Several of those were joined forces to create a random word. The words decided to get together and form a random sentence. They decided not to stop there and it wasn't long before a random paragraph had been cobbled together.",
  },
  {
    trainer: "Pawan",
    topic: "Hardware",
    feedback:
      "It all started with a random letter. Several of those were joined forces to create a random word. The words decided to get together and form a random sentence. They decided not to stop there and it wasn't long before a random paragraph had been cobbled together.",
  },
];

const Feedback = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <TopBar />
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>FEEDBACKS</h1>

        {feedbacks.map((item, idx) => {
          const isSelected = selectedIndex === idx;

          return (
            <div
              key={idx}
              className={`${styles.card} ${
                isSelected ? styles.expandedCard : styles.collapsedCard
              }`}
              onClick={
                () => setSelectedIndex(isSelected ? null : idx) // toggle
              }
            >
              <div className={styles.cardHeader}>
                <span className={styles.topic}>{item.topic}</span>
                <span className={styles.trainer}>{item.trainer}</span>
              </div>

              {isSelected && <p className={styles.cardText}>{item.feedback}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
