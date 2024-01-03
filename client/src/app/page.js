"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { amoxicillin } from "@/formulas";

export default function Home() {
  const [dosis, setDosis] = useState();
  const [ml, setMl] = useState(250);
  const [amoDosis, setAmoDosis] = useState();

  const handleInput = (e) => {
    e.target.value?.lenght > 4
      ? setDosis("wrong input!")
      : setDosis(e.target.value);
  };

  const handleSelect = (ml) => {
    setMl(ml.target.value);
  };

  const handleSubmit = () => {
    const result = amoxicillin(ml, dosis);
    setAmoDosis(result);
  };

  return (
    <main className={styles.main}>
      <div className={''}>
        <h1>Dr Helper!</h1>
        <aside>
          {" "}
          The best world wide pediatrician helper is here! / El mejor ayudante
          de los pediatras del mundo está acá!
        </aside>
      </div>

      <div style={{ display: "flex", justifyContent:'center', alignItems:'center', border:'solid', borderRadius: '8px', padding: '2rem', gap: '2rem'}}>
        <div style={{flexDirection: 'row'}}>
          <aside style={{marginBottom:'5px'}}> Amoxicillin: </aside>
          <label style={{marginBottom:'5px'}}>Insert weight / Ingrese peso </label>
          <input type="number" name="weight" onChange={(e) => handleInput(e)} style={{marginBottom:'5px'}}/>
          <br />
          <label style={{marginBottom:'5px'}}>ML: </label>
          <select
            name="ml"
            id="amoxicillin"
            onChange={(ml) => handleSelect(ml)}
            style={{marginBottom:'5px'}}
          >
            <option value="250">250</option>
            <option value="500">500</option>
          </select>
          <br />
          <button type="button" onClick={() => handleSubmit()}
          style={{marginBottom:'5px'}}>
            consultar
          </button>
        </div>
        <div style={{}}>
          <p> Dosis: {amoDosis ? Math.floor(amoDosis[0]) : "0"}ml / 8hrs</p>
          <p> {amoDosis ? Math.floor(amoDosis[1]) : "0"}ml / 12hrs</p>
        </div>
      </div>
    </main>
  );
}
