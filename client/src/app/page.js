"use client"
import { useRef, useState } from 'react';
import Header from "@/components/Header";
// import drugs from "@/utils/drugs.json";
import Image from "next/image";
import arrowDown from '../../public/images/arrowDown.svg'

import styles from "./page.module.css";
import Amoxicillin from "@/components/Amoxicillin";

export default function Home() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const viewsRefs = [
    useRef(null), // Referencia para la primera vista
    useRef(null), // Referencia para la segunda vista
    // Agregar más referencias para cada vista adicional aquí si es necesario
  ];

  const handleScrollToNextView = () => {
    const nextIndex = currentViewIndex + 1;
    if (nextIndex < viewsRefs.length) {
      viewsRefs[nextIndex].current.scrollIntoView({ behavior: 'smooth' });
      setCurrentViewIndex(nextIndex);
    }
  };

  return (
    <div>
      <div style={{ zIndex:'1', position:'sticky', top:'0'}}>
      <Header />
      </div>
      <section className={styles.sectionStart}>
        <p>Hey there! Need help with dosage?</p>
        <p>
          You're super close to nailing it! Just finish up the quick
          questionnaire, and we'll get you sorted!
        </p>
        <div className={styles.arrowDownContainer}>
          <Image src={arrowDown} width={200} height={200} onClick={handleScrollToNextView} />
        </div>
      </section>
      {/* {viewsRefs.map((ref, index) => (
        <section key={index} ref={ref} id={`view-${index}`}> */}
          {/* Contenido de la vista */}
        {/* </section>
      ))} */}

      <div style={{height:'1500px', display:'flex' ,justifyContent:'flex-end', alignItems:'flex-end'}}>
        askndajklsd{}
      </div>
    </div>
  );
}
