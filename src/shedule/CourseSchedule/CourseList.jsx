import React, { useState } from "react";
import styles from "./CourseScheduleDashboard.module.css";

const courseData = [
  {
    program: "AEON 2025",
    module: "Linux",
    startDate: "2025-02-17",
    endDate: "2025-03-03",
    trainer: "Pannaga Shree BS, Aditya Nikam",
    completed: false,
  },
  {
    program: "AEON 2025",
    module: "Hardware",
    startDate: "2025-01-10",
    endDate: "2025-01-17",
    trainer: "Pavan S, Abhay Nigam",
    completed: true,
  },
  {
    program: "AEON 2025",
    module: "Networking",
    startDate: "2025-01-20",
    endDate: "2025-01-31",
    trainer: "Shashi Sekhar, Siddharth Jena",
    completed: true,
  },
  {
    program: "AEON 2025",
    module: "Cloud Computing",
    startDate: "2025-03-10",
    endDate: "2025-03-20",
    trainer: "Rajesh Kumar, Nitin Sharma",
    completed: false,
  },
  {
    program: "AEON 2025",
    module: "Cyber Security",
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    trainer: "Anita Gupta, Rohan Verma",
    completed: false,
  },
];

const CourseList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [viewCompleted, setViewCompleted] = useState(false);

  return (
    <section className={styles.courseList} aria-labelledby="scheduleListTitle">
      <div className={styles.programsTitleStrip}>
        <h2 id="programsTitle" className={styles.programsTitle}>
          COURSE SCHEDULE
        </h2>
      </div>

      <br></br>
      <br></br>

      {/* Search & Filter Section */}
      <div className={styles.searchContainer}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search for modules or schedules"
          aria-label="Search for modules or schedules"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>  
      <br></br>

      {/* Filter Buttons */}
      <div
        className={styles.filterButtons}
        style={{ padding: "15px 0", display: "flex", gap: "15px" }}
      >
        {[
          { label: "All", value: "all" },
          { label: "Completed", value: "completed" },
          { label: "Ongoing", value: "ongoing" },
          { label: "Upcoming", value: "upcoming" },
        ].map(({ label, value }) => (
          <button
            key={value}
            className={`${styles.filterButton} ${
              filter === value ? styles.active : ""
            }`}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <br/>
      <br></br>

      {/* Toggle Completed Schedule */}
      <label
        className={styles.toggleLabel}
        style={{ marginTop: "15px", display: "block" }}
      >
        <input
          type="checkbox"
          checked={viewCompleted}
          onChange={() => setViewCompleted(!viewCompleted)}
        />
        Show Completed
      </label>

      {/* Course Table */}
      <table className={styles.courseTable}>
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Module Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {courseData
            .filter((course) => {
              const matchesSearch = course.module
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
              const matchesFilter =
                filter === "all" ||
                (filter === "completed" && course.completed) ||
                (filter === "ongoing" && !course.completed);
              const matchesCompletedToggle = viewCompleted || !course.completed;

              return matchesSearch && matchesFilter && matchesCompletedToggle;
            })
            .map((course, index) => (
              <tr key={index}>
                <td>{course.program}</td>
                <td>{course.module}</td>
                <td>{course.startDate}</td>
                <td>{course.endDate}</td>
                <td>{course.trainer}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default CourseList;
