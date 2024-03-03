import React, { useState } from "react";
import { amoxicillin } from "@/utils";

import styles from "@/styles/shared.module.css";

const Amoxicillin = () => {
  const [input, setInput] = useState(undefined);
  const [option, setOption] = useState(undefined);
  const [amoxiState, setAmoxiState] = useState();


  const handleInput = (event) =>{
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  };

  const handleSelect = (event) => {
    event?.target.value && event.target.value !== undefined
    ? setOption(event.target.value)
    : setOption(undefined)
  }

  const handleSubmit = ()=>{
    const response = amoxicillin(input, option)
    const newState = response.toFixed(2)
    setAmoxiState(newState)
  }

  return (
    <div className={styles.boxContainer}>
      <section>
        <label>weight (kg's): </label>
        <input type="number" onChange={(e)=> handleInput(e)} />
      </section>
      <section>
      <label>select presentation: </label>
      <select name="mg" onChange={(e) => handleSelect(e)} defaultValue=''>
      <option value='' disabled>presentation</option>
        <option value="250">5ml: 250mg</option>
        <option value="500">5ml: 500mg</option>
      </select>
      </section>
      <section>
        <button type="submit" onClick={() => handleSubmit()}>calculate</button>
      </section>
      <p>each dose: {amoxiState ? amoxiState : ''} ml / 8hrs</p>
    </div>
  );
};

export default Amoxicillin;
