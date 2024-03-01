import React, { useState } from 'react';
import { amoxicillinAC } from '@/utils';

import styles from '@/styles/shared.module.css'

const AmoxiAcClav = () => {
  const [input, setInput] = useState(undefined);
  const [option, setOption] = useState(undefined);
  const [aacState, setAacState] = useState();


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
    const response = amoxicillinAC(input, option)
    const newState = response.toFixed(2)
    setAacState(newState)
  }

  return (
    <div className={styles.boxContainer}>
      <section>
        <label>weight: </label>
        <input type="number" onChange={(e)=> handleInput(e)} />
      </section>

      <section>
      <label>mg: </label>
      <select name="mg" onChange={(e) => handleSelect(e)}>
        <option value="250">250</option>
        <option value="500">500</option>
      </select>
      </section>
      <section>
        <button type="submit" onClick={() => handleSubmit()}>calculate</button>
      </section>
      <p>each dose: {aacState ? aacState : null}ml</p>
    </div>
  );
}

export default AmoxiAcClav