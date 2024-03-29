import React, { useState } from "react";
import { diphenhydramine } from "@/utils";
import styles from "@/styles/shared.module.css";

const Diphenhydramine = () => {
  const [input, setInput] = useState(undefined);
  const [option, setOption] = useState(undefined);
  const [diphenhydramineState, setDiphenhydramineState] = useState();

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
    const response = diphenhydramine(input, option);
    const newState = response.toFixed(2);
    setDiphenhydramineState(newState);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>
      <section className={styles.selectContainer}>
        <label>select presentation: </label>
        <select name="type" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled>
            form
          </option>
          <option value="injectable">injectable</option>
          <option value="syrup">syrup</option>
        </select>
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          send
        </button>
      </section>
      <section className={styles.dataParagraph}>
        <p>
          each dose: {diphenhydramineState ? diphenhydramineState : null} ml /
          8hrs
        </p>
      </section>
      <p>presentation: 5ml, 12,5mg</p>
    </div>
  );
};

export default Diphenhydramine;
