import React, { useState } from "react";
import styles from "./LearnerDashboard.module.css";

function ProfileDetails() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className={styles.profileDetails}>
      <h2 className={styles.profileDetailsTitle}>Profile</h2>
      
      <p className={styles.profileDetailsDescription}>
        <strong>CGPA:</strong> 9.39 | <strong>Stream:</strong> Electronics and Instrumentation | <strong>Tools:</strong> Python
      </p>
      <button className={styles.viewDetailsButton} onClick={togglePopup}>
        View Details
      </button>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={togglePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
           
            <h2>Mahima Yadav</h2>
            <p><strong>ID:</strong> 21280</p>
            <p><strong>CGPA:</strong> 9.39</p>
            <p><strong>Stream:</strong> Electronics and Instrumentation</p>
            <p><strong>Tools:</strong> Python</p>
            <p><strong>🏡 Address:</strong> Mahagun Villament, Noida</p>
            <p><strong>🎓 College:</strong> RV College of Engineering</p>
            <p><strong>🎓 Graduation Year:</strong> 2023</p>
            <button className={styles.closeButton} onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileDetails;
