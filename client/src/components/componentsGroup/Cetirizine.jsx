import React, { useState } from "react";
import { cetirizine } from "@/utils";
import styles from "@/styles/shared.module.css";

const Cetirizine = () => {
  const [input, setInput] = useState(undefined);
  const [cetirizineState, setCetirizineState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSubmit = () => {
    const response = cetirizine(input);
    setCetirizineState(response);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>Select age: </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>

      <section className={styles.dataParagraph}>
        <p>Dose: {cetirizineState ? cetirizineState : null}</p>
      </section>

      <section className={styles.ceterizineRecomendation}>
        <p>
          if the age it's less than one year old put <q>1</q>. Do not give it to
          minors of 6 months
        </p>
      </section>
    </div>
  );
};

export default Cetirizine;
