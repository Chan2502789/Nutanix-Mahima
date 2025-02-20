import React from "react";
import { Link } from "react-router-dom";
import styles from "./LearnerDashboard/LearnerDashboard.module.css";

function TopBar() {
  return (
    <header className={styles.topBar}>
      <h1 className={styles.logo}>NUTANIX</h1>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/schedule" className={styles.navLink}>Schedule</Link>
          </li>
          <li>
            <Link to="/profile" className={styles.navLink}>Profile</Link>
          </li>
          <li>
            <a href="#feedback" className={styles.navLink}>Feedback</a>
          </li>
        </ul>
        <form className={styles.searchForm} role="search">
          <label htmlFor="siteSearch" className={styles.visuallyHidden}>
            Search in site
          </label>
          <input
            type="search"
            id="siteSearch"
            className={styles.searchInput}
            placeholder="Search in site"
          />
          <button type="submit" className={styles.searchButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/c82cd62e7d67c6d07f1a7e8587b1a06e31f25b89c681133bdc74d4fbb1532f59?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
              alt="Search"
              className={styles.searchIcon}
            />
          </button>
        </form>
      </nav>
    </header>
  );
}

export default TopBar;
