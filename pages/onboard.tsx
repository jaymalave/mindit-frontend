import React, { useState } from "react";
import { DoctorOnboarding } from "../components/DoctorOnboard/DoctorOnboard";
import { PatientOnboarding } from "../components/PatientOnboarding/PatientOnboarding";
import styles from "../styles/Onboard.module.css";

export default function OnboardPage() {
  const [isDoctor, setIsDoctor] = useState(false);
  return (
    <div className={styles.onboard}>
      <div className={styles.onboardContainer}>
        <div className={styles.buttonsRow}>
          <button
            className={isDoctor ? styles.selected : styles.button}
            onClick={() => setIsDoctor(true)}
          >
            I am a Doctor
          </button>
          <button
            className={!isDoctor ? styles.selected : styles.button}
            onClick={() => setIsDoctor(false)}
          >
            I am a Patient
          </button>
        </div>
        {isDoctor ? <DoctorOnboarding /> : <PatientOnboarding />}
      </div>
    </div>
  );
}
