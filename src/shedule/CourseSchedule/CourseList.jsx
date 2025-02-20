import React from "react";
import styles from "./CourseScheduleDashboard.module.css";
import CourseItem from "./CourseItem";

const courseData = [
  {
    emoji: "📘",
    title: "Networking",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
  {
    emoji: "📘",
    title: "Virtualization",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
  {
    emoji: "📘",
    title: "LINUX",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
  {
    emoji: "📘",
    title: "CCNA",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
  {
    emoji: "📘",
    title: "Networking Virtualization LINUX",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
  {
    emoji: "📘",
    title: "Networking Virtualization LINUX",
    subtitle: "Prism DHCP Kernel",
    trainer: "Trainer Name",
  },
];

const CourseList = () => {
  return (
    <section className={styles.courseList} aria-labelledby="scheduleListTitle">
      <h2 id="scheduleListTitle" className={styles.listTitle}>
        Schedule List
      </h2>
      <div className={styles.courseGrid} role="list">
        {courseData.map((course, index) => (
          <CourseItem key={index} {...course} />
        ))}
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
        alt=""
        className={styles.backgroundImage}
        aria-hidden="true"
      />
    </section>
  );
};

export default CourseList;
