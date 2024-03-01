import React, { useState } from 'react';
import { azithromycin } from '@/utils';
import styles from '@/styles/shared.module.css';

const Azithromycin = () => {
  const [input, setInput] = useState();
  const [azithro, setAzithro] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  }

  const handleSubmit = ()=>{
    const response = azithromycin(input)
    const newState = response.toFixed(2)
    setAzithro(newState)
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
    <p>each dose: {azithro ? azithro : null}ml</p>
  </div>
  )
}

export default Azithromycin