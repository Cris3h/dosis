import React, { useState } from "react";
import { amoxicillinAC } from "@/utils";

import styles from "@/styles/shared.module.css";

const AmoxiAcClav = () => {
  const [input, setInput] = useState(undefined);
  const [option, setOption] = useState(undefined);
  const [aacState, setAacState] = useState();

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
    const response = amoxicillinAC(input, option);
    const newState = response.toFixed(2);
    setAacState(newState);
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
          <option value="400">5ml: 400mg</option>
          <option value="600">5ml: 600mg</option>
        </select>
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()} class="button">
          calculate
        </button>
      </section>

      <section className={styles.dataParagraph}>
        <p>each dose: {aacState ? aacState : ""} ml / 8hrs</p>
      </section>
    </div>
  );
};

export default AmoxiAcClav;
