import Header from "@/components/Header";
import Image from "next/image";
import arrowDown from "../../public/images/arrowDown.svg";
import styles from "./page.module.css";
import Select from "@/components/Select";

export default function Home() {

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <section className={styles.sectionStart}>
        <p>Hey there! Need help with dosage?</p>
        <p>
          You're super close to nailing it! Just finish up the quick
          questionnaire, and we'll get you sorted!
        </p>
        <div className={styles.arrowDownContainer}>
          <Image
            src={arrowDown}
            alt="arrow pointing down"
            width={200}
            height={200}
            priority
          />
        </div>
      </section>
      <div className={styles.views}>
        <Select />
      </div>
    </div>
  );
}
