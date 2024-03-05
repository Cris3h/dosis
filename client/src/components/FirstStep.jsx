import React, { useState } from "react";
import Drugs from "./SecondStep";
import drugs from "@/utils/drugs.json";
import styles from "@/styles/firststep.module.css";

const FirstStep = () => {
  const [drugSelected, setDrugSelected] = useState("");

  const handleSelect = (event) => {
    event?.target.value !== "Choose the drug group" &&
    event.target.value !== drugSelected
      ? setDrugSelected(event.target.value)
      : undefined;
  };


  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}> 1st step </label>
      <select name="first" className={styles.select} onChange={handleSelect} defaultValue=''>
        <option value='' disabled className={styles.option}>Choose the group</option>
        {drugs.groups.map((opt, index) => (
          <option key={index} value={opt.name} className={styles.option}>
            {opt.name}
          </option>
        ))}
      </select>
      {drugSelected && <Drugs medList={drugSelected} />}
    </div>
  );
};

export default FirstStep;
