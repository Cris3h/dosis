import React from "react";
import Image from "next/image";
import cafecito from '../../public/images/cafecito.png'
import styles from "@/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
    const anchor = ()=>{

    }
  return (
    <div className={styles.footerContainer}>
        {/* <Link href={'https://cafecito.app/cris3h'}>  */}
        <Image src={cafecito} height={200} width={200} className={styles.coffee}/>
        {/* </Link> */}
      <p>all rights reserved</p>
    </div>
  );
};

export default Footer;
