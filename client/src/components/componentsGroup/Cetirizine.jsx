import React, { useState } from 'react';
import { cetirizine } from '@/utils';
import styles from '@/styles/shared.module.css';

const Cetirizine = () => {
  const [input, setInput] = useState(undefined);
  const [cetirizineState, setCetirizineState] = useState();


  const handleInput = (event) =>{
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  };


  const handleSubmit = ()=>{
    const response = cetirizine(input)
    setCetirizineState(response)
  }

  return (
    <div className={styles.boxContainer}>
      <section>
        <label>age: </label>
        <input type="number" onChange={(e)=> handleInput(e)} />
      </section>
      <section>
        <button type="submit" onClick={() => handleSubmit()}>calculate</button>
      </section>
      <p>if the age it's less than one year put <q>1</q>. Do not give to minors of 6 months</p>
      <p>{cetirizineState ? cetirizineState : null}</p>
    </div>
  );
}

export default Cetirizine