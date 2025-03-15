import React from "react";
import { Link } from "react-router-dom";
import styles from "./topbar.module.css";
import nutanixLogo from "../../images/nutanix.png";

function TopBar() {
  return (
    <header className={styles.topBar}>
      <Link to="/">
        <img src={nutanixLogo} alt="NUTANIX" className={styles.logo} />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
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
          <li>
            <Link to="/feedback" className={styles.navLink}>
              Discussions
            </Link>
          </li>
          <li>
            <Link to="/feedback" className={styles.navLink}>
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;
