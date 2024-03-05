import React, { useState } from "react";
import { tms } from "@/utils";
import styles from "@/styles/shared.module.css";

const Tms = () => {
  const [input, setInput] = useState();
  const [tmsState, setTmsState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = tms(input);
    const newState = response.toFixed(2);
    setTmsState(newState);
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
        <p>each dose: {tmsState ? tmsState : ""} ml / 12hrs</p>
      </section>
    </div>
  );
};

export default Tms;
