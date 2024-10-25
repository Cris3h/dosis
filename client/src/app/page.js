'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Select from "@/components/FirstStep";
import Footer from "@/components/Footer";
import arrowDown from "../../public/images/arrowDown.svg";

import styles from "./page.module.css";
import Modal from "@/components/Modal";

export default function Home() {
  const [modal, setModal] = useState(true);
  const selectRef = useRef()

  const scrollDown = () => {
    selectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const closeModal = ()=>{
    setModal(false)
  }

  return (
    <div>
      <Modal isOpen={modal} onClose={closeModal}/>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <section className={styles.sectionStart}>
        <p>Hey there! Need help with your pediatric dosage? *</p>
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
      <div ref={selectRef} className={styles.views}>
        <Select />
      </div>
      <div className={styles.footer}>
      <Footer />
      </div>
      <script async src="http://100.71.94.17:2337/tracker.js" data-ackee-server="http://100.71.94.17:2337/" data-ackee-domain-id="45aeacd8-5e65-4849-b9cc-886bbfb71e99"></script>
    </div>
  );
}
