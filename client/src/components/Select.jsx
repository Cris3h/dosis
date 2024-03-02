"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/select.module.css";
import Drugs from "./DrugsSelector";
import drugs from "@/utils/drugs.json";

const Select = () => {
  const [drugSelected, setDrugSelected] = useState("");

  const handleSelect = (event) => {
    event?.target.value !== "Choose the drug group" &&
    event.target.value !== drugSelected
      ? setDrugSelected(event.target.value)
      : undefined;
  };

  useEffect(()=> {
    console.log('First Select')
  },[drugSelected])

  return (
    <>
      <label className={styles.label}> 1st step: </label>
      <select name="first" className={styles.select} onChange={handleSelect}>
        <option style={{ display: "none" }}>Choose the drug group</option>
        {drugs.groups.map((opt, index) => (
          <option key={index} value={opt.name} className={styles.option}>
            {opt.name}
          </option>
        ))}
      </select>
      {drugSelected && <Drugs medList={drugSelected} />}
    </>
  );
};

export default Select;
