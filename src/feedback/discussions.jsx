import React, { useEffect, useRef, useState } from "react";
import styles from "./discussions.module.css";

const timelineData = [
  "Monday, 15 January 2025",
  "Tuesday, 22 January 2025",
  "Friday, 03 February 2025",
  "Monday, 17 February 2025",
  "Thursday, 12 March 2025",
  "Saturday, 25 March 2025",
];

const feedbackMap = {
  "Monday, 15 January 2025":
    "The team gathered to discuss the project kickoff. Goals, responsibilities, and deadlines were outlined to ensure clarity and alignment moving forward.",
  "Tuesday, 22 January 2025":
    "A creative brainstorming session focused on UI/UX design. Different layout structures and user flows were discussed to enhance user experience.",
  "Friday, 03 February 2025":
    "Sprint review and planning meeting. Completed tasks were evaluated, and upcoming sprint objectives were set based on performance insights.",
  "Monday, 17 February 2025":
    "A retrospective session where the team shared feedback on what worked well and areas for improvement in the development process.",
  "Thursday, 12 March 2025":
    "Final presentation and wrap-up discussion. Key learnings, challenges, and overall outcomes were shared before the project closure.",
  "Saturday, 25 March 2025":
    "Client meeting to present the project’s progress and discuss the future roadmap for additional features and improvements.",
};

const Discussions = () => {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(timelineData[0]); // Default first item

  useEffect(() => {
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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  const handleClick = (date) => {
    setSelectedItem(date);
  };

  return (
    <div className={styles.timelineContainer}>
      {selectedItem && (
        <div className={styles.hoverBox}>
          <h2 className={styles.discussionHeading}>DISCUSSION</h2>
          <p className={styles.justifiedText}>{feedbackMap[selectedItem]}</p>
        </div>
      )}

      {timelineData.map((item, index) => {
        const isVisible = visibleItems[index];
        const itemClass = `${styles.timelineItem} ${
          isVisible ? styles.visible : styles.hidden
        }`;

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={itemClass}
            onClick={() => handleClick(item)}
          >
            <div className={styles.timelineStructure}>
              {index !== 0 && <div className={styles.line}></div>}
              <div className={styles.circle}></div>
              {index !== timelineData.length - 1 && (
                <div className={styles.line}></div>
              )}
            </div>
            <div className={styles.textRight}>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Discussions;
