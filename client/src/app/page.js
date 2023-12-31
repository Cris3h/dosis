"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { amoxicillin } from "@/formulas";

export default function Home() {
  const [weight, setWeight] = useState();
  const [error, setError] = useState(); 

  const handleWeightInput = (e) => {
    let result = amoxicillin(e.target.value);
    e.target.value.length > 4 ? setWeight('wrong input!') : setWeight(result);
  };

  return (
    <main className={styles.main}>
      <div className={styles}>
        <h1>Dr Helper!</h1>
        <aside>
          {" "}
          The best world wide pediatrician helper is here! / El mejor ayudante
          de los pediatras del mundo está acá!
        </aside>
      </div>
      <div>
        <aside> Amoxicillin: </aside>
        <label>Insert weight / Ingrese peso </label>
        <input
          type="number"
          name="weight"
          onChange={(e) => handleWeightInput(e)}
        />
      </div>
      <p> Dosis: {weight}</p>
    </main>
  );
}
