import React, { useState } from "react";
import { betamethasone } from "@/utils";
import styles from "@/styles/shared.module.css";

const Betamethasone = () => {
  const [input, setInput] = useState(undefined);
  const [betamethasoneState, setBetamethasoneState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = betamethasone(input);
    setBetamethasoneState(response);
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
          Drops: {betamethasoneState ? betamethasoneState : ""} drops / 8hrs
        </p>
      </section>

      <q>Dose: 3 times per day, continue for only 3 days.</q>
    </div>
  );
};

export default Betamethasone;
