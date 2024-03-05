import React, { useState } from "react";
import { azithromycin } from "@/utils";
import styles from "@/styles/shared.module.css";

const Azithromycin = () => {
  const [input, setInput] = useState();
  const [azithro, setAzithro] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = azithromycin(input);
    const newState = response.toFixed(2);
    setAzithro(newState);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>

      <section className={styles.dataParagraph}>
        <p>each dose: {azithro ? azithro : ""} ml / 24hrs</p>
      </section>
    </div>
  );
};

export default Azithromycin;
