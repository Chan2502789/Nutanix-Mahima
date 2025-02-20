import React from "react";
import { Link } from "react-router-dom";
import styles from "./LearnerDashboard.module.css";

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <h1 className={styles.title}>NUTANIX</h1>
      <div className={styles.rightSection}>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to="/" className={styles.tab}>Home</Link></li>
            <li><Link to="/schedule" className={styles.tab}>Schedule</Link></li>
            <li><Link to="/profile" className={styles.tab}>Profile</Link></li> {/* Updated Profile link */}
            <li><Link to="#feedback" className={styles.tab}>Feedback</Link></li>
          </ul>
        </nav>
        <form className={styles.searchForm} role="search">
          <label htmlFor="search" className={styles.visuallyHidden}>Search in site</label>
          <input
            type="text"
            id="search"
            className={styles.searchInput}
            placeholder="Search in site"
          />
          <button type="submit" className={styles.searchButton} aria-label="Search">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/4cd70d0ed7aabd6ee09200d86c8ff0156eb02383377c914d3a42996642d6d45b?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
              className={styles.searchIcon}
              alt=""
              width="20"
              height="20"
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default TopBar;
