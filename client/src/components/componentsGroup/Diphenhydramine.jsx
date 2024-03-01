import React, { useState } from 'react';
import { diphenhydramine } from '@/utils';
import styles from '@/styles/shared.module.css';

const Diphenhydramine = () => {
  const [input, setInput] = useState(undefined);
  const [diphenhydramineState, setDiphenhydramineState] = useState();


  const handleInput = (event) =>{
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  };


  const handleSubmit = ()=>{
    const response = diphenhydramine(input)
    const newState = response.toFixed(2)
    setDiphenhydramineState(newState)
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
      <p>presentation: 12,5mg</p>
      <p>each dose: {diphenhydramineState ? diphenhydramineState : null}ml</p>
    </div>
  );
}

export default Diphenhydramine