import React from "react";
import styles from "./CourseScheduleDashboard.module.css";
import TopBar from "../../components/TopBar";
import CourseSearch from "./CourseSearch";
import CourseList from "./CourseList";

const CourseScheduleDashboard = () => {
  return (
    <div className={styles.page}>
      <TopBar />
      <main>
        <CourseSearch />
        <CourseList />
      </main>
    </div>
  );
};

export default CourseScheduleDashboard;
