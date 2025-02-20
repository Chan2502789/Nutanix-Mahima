import React from "react";
import styles from "./CourseScheduleDashboard.module.css";

const CourseSearch = () => {
  return (
    <section
      className={styles.courseSearch}
      aria-labelledby="courseSearchTitle"
    >
      <div className={styles.searchContainer}>
        <h2 id="courseSearchTitle" className={styles.searchTitle}>
          Course Schedule
        </h2>
        <p className={styles.searchDescription}>
          View and search your course schedule below
        </p>
        <form className={styles.searchForm} role="search">
          <label htmlFor="courseSearch" className={styles.visuallyHidden}>
            Search for modules or schedules
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="search"
              id="courseSearch"
              className={styles.searchInput}
              placeholder="Search for modules or schedules"
              aria-label="Search for modules or schedules"
            />
            <button
              type="submit"
              className={styles.searchButton}
              aria-label="Submit course search"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/603206775f545b44d451d5691578c8f5c7c3347960f36a4553dd4028315301ea?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
                alt=""
                className={styles.searchIcon}
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
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

export default CourseSearch;
