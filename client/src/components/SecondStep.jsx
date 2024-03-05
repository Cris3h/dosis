import React, { useEffect, useState } from "react";
import DataBox from "./DataBox";
import drugs from "@/utils/drugs.json";
import styles from "@/styles/secondstep.module.css";

const SecondStep = ({ medList }) => {
  const [singleMed, setSingleMed] = useState(undefined);
  const [key, setKey] = useState(0)
  const listFind = drugs?.groups.find((e) => e.name === medList);

  const handleSelect = (event) => {
    event.target.value !== "Choose the drug" && event.target.value !== singleMed
      ? setSingleMed(event.target.value)
      : undefined;
  };

  useEffect(() => {
    setSingleMed(undefined); 
    setKey(optkey => optkey + 1);
  }, [medList]);


  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>2nd step</label>
      <select key={key} className={styles.select} onChange={handleSelect} defaultValue=''>
        <option value='' disabled className={styles.option}>Choose the drug</option>
        {listFind?.drugs.map((drugName, index) => (
          <option key={index} value={drugName} className={styles.option}>
            {drugName}
          </option>
        ))}
      </select>
      {
        singleMed && <DataBox medGroup={medList} medicine={singleMed}/> 
      }
    </div>
  );
};

export default SecondStep;
