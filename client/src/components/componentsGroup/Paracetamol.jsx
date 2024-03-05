import React, { useState } from "react";
import { paracetamol } from "@/utils";
import styles from "@/styles/shared.module.css";

const Paracetamol = () => {
  const [input, setInput] = useState();
  const [paracetamolState, setParacetamolState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = paracetamol(input);
    const newState = response.toFixed(2);
    setParacetamolState(newState);
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
        <p>
          each dose: {paracetamolState ? paracetamolState : null} drops / 6hrs
          or 8hrs
        </p>
      </section>
    </div>
  );
};

export default Paracetamol;
