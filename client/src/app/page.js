'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Select from "@/components/FirstStep";
import Footer from "@/components/Footer";
import arrowDown from "../../public/images/arrowDown.svg";

import styles from "./page.module.css";

export default function Home() {

  const scrollDown = () => {
    document.getElementById('select').scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <section className={styles.sectionStart}>
        <p>Hey there! Need help with dosage? *</p>
        <p>
          You're super close to nailing it! Just finish up the quick
          questionnaire, and we'll get you sorted!
        </p>
        <div className={styles.arrowDownContainer}>
          <h2>CLICK HERE!!!</h2>
          <Image
            src={arrowDown}
            alt="arrow pointing down"
            width={200}
            height={200}
            onClick={scrollDown}
            priority
          />
        </div>
      </section>
      <div id="select" className={styles.views}>
        <Select />
      </div>
      <div>
        
      </div>
      <Footer />
    </div>
  );
}
