import React, { useState } from "react";
import styles from "@/styles/shared.module.css";
import { penicillinV } from "@/utils";

const PenicillinV = () => {
  const [input, setInput] = useState();
  const [penicillinVState, setPenicillinVState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = penicillinV(input);
    const newState = response.toFixed(2);
    setPenicillinVState(newState);
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
        <p>each dose: {penicillinVState ? penicillinVState : ""} ml / 12hrs</p>
      </section>
    </div>
  );
};

export default PenicillinV;
