"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/drugs.module.css";
import drugs from "@/utils/drugs.json";
import DataBox from "./DataBox";

const Drugs = ({ medList }) => {
  const [singleMed, setSingleMed] = useState(undefined);
  const listFind = drugs?.groups.find((e) => e.name === medList);
  const handleSelect = (event) => {
    event.target.value !== "Choose the drug" && event.target.value !== singleMed
      ? setSingleMed(event.target.value)
      : undefined;
  };

  return (
    <>
      <label className={styles.label}>2nd step: </label>
      <select className={styles.select} onClick={handleSelect}>
        <option style={{ display: "none" }}>Choose the drug</option>
        {listFind?.drugs.map((drugName, index) => (
          <option key={index} value={drugName} className={styles.option}>
            {drugName}
          </option>
        ))}
      </select>
      {
        singleMed && <DataBox medGroup={medList} medicine={singleMed}/>
      }
    </>
  );
};

export default Drugs;
