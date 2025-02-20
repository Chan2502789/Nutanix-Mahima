import React, { useState } from "react";
import styles from "./LearnerDashboard/LearnerDashboard.module.css";

function PageDetail() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleViewDetailsClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <button className={styles.viewDetailsButton} onClick={handleViewDetailsClick}>
        View Details
      </button>

      {isCardVisible && (
        <div className={styles.detailCard}>
          <h3>Details</h3>
          <p>This is some detailed information.</p>
        </div>
      )}
    </div>
  );
}

export default PageDetail;
