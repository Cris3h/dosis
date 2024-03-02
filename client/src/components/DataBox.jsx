import React from "react";
import styles from "@/styles/databox.module.css";
import { componentChooser } from "@/utils/componentChoose";

const DataBox = ({ medGroup, medicine }) => {
  // useEffect(()=>{}, [medGroup, medicine])
  return (
    <div className={styles.boxContainer}>
      {medGroup && medicine ? componentChooser(medicine) : undefined}
    </div>
  );
};

export default DataBox;
