import React, { useState } from 'react'
import { dipyrone } from '@/utils';
import styles from '@/styles/shared.module.css';

const Dypirone = () => {
  const [input, setInput] = useState();
  const [option, setOption] = useState(undefined);
  const [dipyroneState, setDipyroneState] = useState();

  const handleInput = (event) => {
    event?.target.value && event.target.value !== undefined 
    ? setInput(event.target.value)
    : setInput(undefined)
  }
  const handleSelect = (event) => {
    event?.target.value && event.target.value !== undefined
    ? setOption(event.target.value)
    : setOption(undefined)
  }
  const handleSubmit = ()=>{
    const response = dipyrone(input, option)
    const newState = response.toFixed(2)
    setDipyroneState(newState)
  }


  return (
    <div className={styles.boxContainer}>
    <section>
      <label>weight: </label>
      <input type="number" onChange={(e)=> handleInput(e)} />
    </section>

    <section>
      <label>type of: </label>
      <select name="mg" onChange={(e) => handleSelect(e)}>
        <option value="injectable">injectable</option>
        <option value="syrup">syrup</option>
      </select>
      </section>
    <section>
      <button type="submit" onClick={() => handleSubmit()}>calculate</button>
    </section>
    <p>each dose: {dipyroneState ? dipyroneState : null} ml</p>
  </div>
  )
}

export default Dypirone