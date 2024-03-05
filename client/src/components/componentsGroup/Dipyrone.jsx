import React, { useState } from "react";
import { dipyrone } from "@/utils";
import styles from "@/styles/shared.module.css";

const Dypirone = () => {
  const [input, setInput] = useState();
  const [option, setOption] = useState(undefined);
  const [dipyroneState, setDipyroneState] = useState();

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
    const response = dipyrone(input, option);
    const newState = response.toFixed(2);
    setDipyroneState(newState);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.selectContainer}>
        <label>type of: </label>
        <select name="mg" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled>
            form
          </option>
          <option value="injectable">injectable</option>
          <option value="syrup">syrup</option>
        </select>
      </section>
      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>
      <section className={styles.dataParagraph}>
        <p>each dose: {dipyroneState ? dipyroneState : ""} ml / 8hrs</p>
      </section>
    </div>
  );
};

export default Dypirone;
