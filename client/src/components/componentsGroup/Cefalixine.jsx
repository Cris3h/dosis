import React, { useState } from "react";
import { cefalexina } from "@/utils";

import styles from "@/styles/shared.module.css";

const Cefalexine = () => {
  const [input, setInput] = useState(undefined);
  const [option, setOption] = useState(undefined);
  const [cefalexineState, setCefalexineState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setInput(event.target.value)
      : setInput(undefined);
  };

  const handleSelect = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setOption(event.target.value)
      : setOption(undefined);
  };

  const handleSubmit = () => {
    const response = cefalexina(input, option);
    const newState = response.toFixed(2);
    setCefalexineState(newState);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.selectContainer}>
        <label>select presentation: </label>
        <select name="mg" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled>
            presentation
          </option>
          <option value="250">5ml: 250mg</option>
          <option value="500">5ml: 500mg</option>
        </select>
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>

      <section className={styles.dataParagraph}>
        <p>each dose: {cefalexineState ? cefalexineState : ""} ml / 8hrs</p>
      </section>
    </div>
  );
};

export default Cefalexine;