import React, { useEffect, useRef, useState } from "react";
import styles from "./discussions.module.css";

import { useNavigate } from "react-router-dom";

const timelineData = [
  "Monday, 15 Januarys 2025",
  "Tuesday, 22 January 2025",
  "Friday, 03 February 2025",
  "Monday, 17 February 2025",
  "Thursday, 12 March 2025",
  "Saturday, 25 March 2025",
];

const feedbackMap = {
  "Monday, 15 Januarys 2025": {
    trainer: "xyz",
    feedback:
      "Great work on the React module! Your understanding of hooks is solid. Next time, try to simplify your components more.",
  },
  "Tuesday, 22 January 2025": {
    trainer: "xyz",
    feedback:
      "Excellent presentation skills. Keep an eye on consistency in data handling throughout the app.",
  },
  "Friday, 03 February 2025": {
    trainer: "xyz",
    feedback:
      "You handled the backend integration very well. Would love to see more unit tests in your future work.",
  },
  "Monday, 17 February 2025": {
    trainer: "xyz",
    feedback:
      "Very creative dashboard layout! Just make sure responsiveness is thoroughly tested.",
  },
  "Thursday, 12 March 2025": {
    trainer: "xyz",
    feedback:
      "Good improvements in debugging speed. Pay a bit more attention to code comments.",
  },
  "Saturday, 25 March 2025": {
    trainer: "xyz",
    feedback:
      "Fantastic effort all around. Try to communicate blockers earlier to help the team more.",
  },
};

const Discussions = () => {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentRefs = itemRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visibleItems];
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            updated[index] = true;
          }
        });
        setVisibleItems(updated);
      },
      { threshold: 0.6 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  const handleClick = (date) => {
    const feedbackData = feedbackMap[date];
    navigate("/discussion", { state: feedbackData });
  };

  return (
    <div className={styles.timelineContainer}>
      {timelineData.map((item, index) => {
        const isVisible = visibleItems[index];
        const labelClass =
          index % 2 === 0 ? styles.labelLeft : styles.labelRight;

        const isFirst = index === 0;
        const isLast = index === timelineData.length - 1;

        const itemClass = `${styles.timelineItem} ${
          isVisible ? styles.visible : styles.hidden
        } ${isFirst ? styles.firstItem : ""} ${isLast ? styles.lastItem : ""}`;

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={itemClass}
            onClick={() => handleClick(item)}
          >
            <div className={styles.circle}></div>
            <div className={labelClass}>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Discussions;
