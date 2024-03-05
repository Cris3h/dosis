import React, { useState } from "react";
import { mebendazole } from "@/utils";
import styles from "@/styles/shared.module.css";

const Mebendazole = () => {
  const [option, setOption] = useState(undefined);
  const [mebendazoleState, setMebendazoleState] = useState();

  const handleSelect = (event) => {
    event?.target.value && event.target.value !== undefined
      ? setOption(event.target.value)
      : setOption(undefined);
  };

  const handleSubmit = () => {
    const response = mebendazole(option);
    setMebendazoleState(response);
  };

  return (
    <div className={styles.dataContainer}>
      <section className={styles.selectContainer}>
        <label>choose parasites: </label>
        <select name="type" onChange={(e) => handleSelect(e)} defaultValue="">
          <option value="" disabled></option>
          <option value="oxiuros">oxiuros</option>
          <option value="ascharis">Ascharis</option>
          <option value="trichiurus">Trichiurus</option>
          <option value="tenias">Tenias</option>
        </select>
      </section>

      <section className={styles.buttonContainer}>
        <button type="submit" onClick={() => handleSubmit()}>
          send
        </button>
      </section>
      <section className={styles.dataParagraph}>
        <p>each dose: {mebendazoleState ? mebendazoleState : null}</p>
      </section>
    </div>
  );
};

export default Mebendazole;
