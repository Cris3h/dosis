import React, { useState } from "react";
import { ibuprofen } from "@/utils";
import styles from "@/styles/shared.module.css";

const Ibuprofen = () => {
  const [input, setInput] = useState();
  const [option, setOption] = useState(undefined);
  const [ibuprofenState, setIbuprofenState] = useState();

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
    const response = ibuprofen(input, option);
    const newState = response.toFixed(2);
    setIbuprofenState(newState);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.selectContainer}>
        <label>select mg: </label>
        <select name="mg" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled>
            presentation
          </option>
          <option value="2">2%</option>
          <option value="4">4%</option>
        </select>
      </section>
      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>
      <section className={styles.dataParagraph}>
        <p>
          each dose: {ibuprofenState ? ibuprofenState : null} ml / 6hrs or 8hrs
        </p>
      </section>
    </div>
  );
};

export default Ibuprofen;
