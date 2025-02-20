import React from "react";
import styles from "./CourseScheduleDashboard.module.css";
import {Link} from "react-router-dom";

const TopBar = () => {
  return (
    <header className={styles.topBar} role="banner">
      
      <h1 className={styles.title}>Nutanix</h1>
      <nav className={styles.navigation} aria-label="Main Navigation">
        <Link href="/home" className={styles.navLink}>
          Home
        </Link>
        <Link href="/schedule" className={styles.navLink}>
          Schedule
        </Link>
        <Link href="/profile" className={styles.navLink}>
          Profile
        </Link>
        <a href="#logout" className={styles.navLink}>
          Logout
        </a>
        <form className={styles.searchForm} role="search">
          <label htmlFor="siteSearch" className={styles.visuallyHidden}>
            Search in site
          </label>
          <input
            type="search"
            id="siteSearch"
            className={styles.searchInput}
            placeholder="Search in site"
            aria-label="Search in site"
          />
          <button
            type="submit"
            className={styles.searchButton}
            aria-label="Submit search"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/56479d0e141f4cffbfea5abf9c9f5a63/c13d2f6c73d108dafd9b5810f4740d0d8f26f3defd8ef10835e1a2701d4eb5b9?apiKey=56479d0e141f4cffbfea5abf9c9f5a63&"
              alt=""
              className={styles.searchIcon}
              aria-hidden="true"
            />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default TopBar;
