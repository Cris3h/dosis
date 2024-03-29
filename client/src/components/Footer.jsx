import React from "react";
import Image from "next/image";
import Link from "next/link";
import cafecito from '../../public/images/cafecito.png'
import styles from "@/styles/footer.module.css";

const Footer = () => {
    const anchor = ()=>{
        
    }
  return (
    <div className={styles.footerContainer}>
        <Link href={'https://cafecito.app/cris3h'}
        target="_blank"
        rel="noopener noreferrer"
        > 
        <Image src={cafecito} alt="icono cafecito" height={200} width={200} className={styles.coffee}/>
        </Link>
      <p>all rights reserved</p>
    </div>
  );
};

export default Footer;
