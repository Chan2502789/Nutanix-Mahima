import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearnerDashboard.module.css";

const ProgramList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const items = [
    "HARDWARE",
    "NETWORKING",
    "LINUX",
    "MOCK CALLS",
    "VIRTUALIZATION",
    "SECURITY",
    "DATABASE",
    "CLOUD COMPUTING",
    "ARTIFICIAL INTELLIGENCE",
    "CYBERSECURITY",
  ];

  const infoMap = {
    HARDWARE:
      "Evolution of Datacenters | Basic Hardware | Datacenter Components | Server +",
    NETWORKING: "Networking Basics | Switches and Routers | VLANs | Subnetting",
    LINUX: "Linux Basics | Terminal Commands | File Permissions | Cron Jobs",
    "MOCK CALLS":
      "Mock Interview Scenarios | Technical Troubleshooting | Customer Handling",
    VIRTUALIZATION: "VMware | Hyper-V | VirtualBox | Containers",
  };

  return (
    <section className={styles.programList} aria-labelledby="programsTitle">
      <h1 className={styles.programsHeader}>PROGRAM</h1>

      <div
        className={styles.programsTitleStrip}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
      >
        <h2 id="programsTitle" className={styles.programsTitle}>
          AEON 2025
        </h2>
      </div>

      <div
        className={`${styles.dropdownWrapper} ${
          isOpen ? styles.dropdownWrapperOpen : ""
        }`}
      >
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() =>
                navigate(`/programs/aeon-2025/${item.toLowerCase()}`)
              }
            >
              <span>{item}</span>
              <div
                className={styles.infoIconWrapper}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className={styles.infoIcon}>ℹ️</span>
                {hoveredItem === item && (
                  <div className={styles.tooltip}>
                    {infoMap[item]}
                    <span className={styles.tooltipArrow}></span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramList;
