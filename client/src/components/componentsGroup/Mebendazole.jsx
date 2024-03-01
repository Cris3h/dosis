import React, { useState } from 'react';
import { mebendazole } from '@/utils';
import styles from '@/styles/shared.module.css';

const Mebendazole = () => {
  const [option, setOption] = useState(undefined);
  const [mebendazoleState, setMebendazoleState] = useState();

  const handleSelect = (event) => {
    event?.target.value && event.target.value !== undefined
    ? setOption(event.target.value)
    : setOption(undefined)
  }

  const handleSubmit = ()=>{
    const response = mebendazole(option)
    setMebendazoleState(response)
  }

  return (
    <div className={styles.boxContainer}>
    <section>
      <label>choose bacteria: </label>
      <select name="type" onChange={(e) => handleSelect(e)}>
        <option value="oxiuros">oxiuros</option>
        <option value="ascharis">Ascharis</option>
        <option value="trichiurus">Trichiurus</option>
        <option value="tenias">Tenias</option>
      </select>
      </section>

      <section>
      <button type="submit" onClick={() => handleSubmit()}>calculate</button>
    </section>
    <p>each dose: {mebendazoleState ? mebendazoleState : null}</p>
  </div>
  )
}

export default Mebendazole