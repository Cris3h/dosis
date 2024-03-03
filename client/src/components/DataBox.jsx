import React from "react";
import LegalDisclaimer from "./LegalDisclaimer";
import { componentChooser } from "@/utils/componentChoose";
import styles from "@/styles/databox.module.css";

const DataBox = ({ medGroup, medicine }) => {
  // useEffect(()=>{}, [medGroup, medicine])
  return (
    <div className={styles.boxContainer}>
      <div className={styles.dataBox}>
        {medGroup && medicine ? componentChooser(medicine) : undefined}
      </div>

      <section>
        <p>
          * Legal disclaimer: The use of this application is purely informational. Under no
          circumstances should it be considered as medical advice. We strongly
          recommend consulting your trusted doctor or pediatrician for proper
          diagnosis and medication.
        </p>
      </section>
    </div>
  );
};

export default DataBox;
