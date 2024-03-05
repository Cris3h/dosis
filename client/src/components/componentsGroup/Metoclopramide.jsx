import React, { useState } from "react";
import { metoclopramide } from "@/utils";
import styles from "@/styles/shared.module.css";

const Metoclopramide = () => {
  const [input, setInput] = useState();
  const [option, setOption] = useState(undefined);
  const [metoclopramideState, setMetoclopramideState] = useState();

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
    const response = metoclopramide(input, option);
    setMetoclopramideState(response);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.inputContainer}>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e) => handleInput(e)} />
      </section>

      <section className={styles.selectContainer}>
        <label>presentation: </label>
        <select name="mg" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled>
            {" "}
            form{" "}
          </option>
          <option value="injectable">injectable</option>
          <option value="drops">drops</option>
        </select>
      </section>
      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          calculate
        </button>
      </section>
      <section className={styles.dataParagraph}>
        <p>
          each dose: {metoclopramideState ? metoclopramideState : ""} / 8hrs
        </p>
      </section>
    </div>

    //   <div>
    //   <p>This drug is not available yet!</p>
    //   <br />
    //   <p>It will be available soon tho {'(:'}</p>
    // </div>
  );
};

export default Metoclopramide;
