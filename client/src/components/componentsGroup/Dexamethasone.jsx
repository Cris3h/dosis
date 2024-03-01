import React, { useState } from 'react';
import { dexamethasone } from '@/utils';
import styles from '@/styles/shared.module.css';

const Dexamethasone = () => {
  const [input, setInput] = useState(undefined);
  const [dexamethasoneState, setDexamethasoneState] = useState();


  const handleInput = (event) =>{
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  };


  const handleSubmit = ()=>{
    const response = dexamethasone(input)
    const newState = response.toFixed(2)
    setDexamethasoneState(newState)
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
      <p>each dose: {dexamethasoneState ? dexamethasoneState : null}ml</p>
    </div>
  );
}

export default Dexamethasone