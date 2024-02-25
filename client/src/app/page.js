import styles from "./page.module.css";
import Amoxicillin from '@/components/Amoxicillin';


export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        <h1>Dr Dosage</h1>

        <div className={styles}>
          <Amoxicillin />
        </div>
      </div>
    </main>
  );
}
