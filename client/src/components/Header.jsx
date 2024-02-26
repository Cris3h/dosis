"use client";
import React from "react";
import Image from "next/image";
import DrDosage from "../../public/images/DrDosage.png";
import styles from "@/styles/header.module.css";
import Link from "next/link";

const Header = () => {
  const resetHandler = () => {
    window.location.reload();
  };
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1>Dr Dosage</h1>

        <div className={styles.imageContainer}>
          <button
            type="button"
            style={{ background: "none", border: "none" }}
            onClick={resetHandler}
          >
            <Image
              src={DrDosage}
              alt="dr dosage icon"
              width={200}
              height={200}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
