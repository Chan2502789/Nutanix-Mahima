import React from "react";
import styles from "./LearnerDashboard.module.css";

const sidebarItems = [
  { icon: "😊", title: "Virtualization" },
  { icon: "🌐", title: "Networking" },
  { icon: "🪀", title: "Yoyo" },
  { icon: "🐧", title: "LINUX" },
  { icon: "🎓", title: "Interns2023" },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className={styles.sidebarItem}>
              <a href={`#${item.title.toLowerCase()}`}>
                <span className={styles.sidebarIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span className={styles.sidebarTitle}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
