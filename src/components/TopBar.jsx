import React from "react";
import { Link } from "react-router-dom";
import styles from "./LearnerDashboard/LearnerDashboard.module.css";
import nutanixLogo from "../images/nutanix.png";

function TopBar() {
  return (
    <header className={styles.topBar}>
      <img src={nutanixLogo} alt="NUTANIX" className={styles.logo} />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/schedule" className={styles.navLink}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/profile" className={styles.navLink}>
              Profile
            </Link>
          </li>
        </ul>
        </nav>
    </header>
  );
}

export default TopBar;
