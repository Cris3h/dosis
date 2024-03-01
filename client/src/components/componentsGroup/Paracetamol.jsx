import React, { useState } from 'react';
import { paracetamol } from '@/utils';
import styles from '@/styles/shared.module.css';

const Paracetamol = () => {
  const [input, setInput] = useState();
  const [paracetamolState, setParacetamolState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  }

  const handleSubmit = ()=>{
    const response = paracetamol(input)
    const newState = response.toFixed(2)
    setParacetamolState(newState)
  }


  return (
    <div className={styles.boxContainer}>
    <section>
      <label>weight: </label>
      <input type="number" onChange={(e)=> handleInput(e)} />
    </section>

    <section>
      <button type="submit" onClick={() => handleSubmit()}>calculate</button>
    </section>
    <p>each dose: {paracetamolState ? paracetamolState : null} ml</p>
  </div>
  )
}

export default Paracetamol