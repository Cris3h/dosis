import styles from "@/styles/modal.module.css";
import Link from "next/link";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button onClick={onClose}> x </button>

              <h2 className={styles.legalTitle}>Legal Disclaimer</h2>

              <section className={styles.disclaimerSection}>
                <p>
                  - The use of this application is purely informational.
                  <br />
                  <br />
                  <span className={styles.boldSpan}>
                    * Under no circumstances should it be considered as medical
                    advice.
                  </span>
                  <br />
                  <br />- We strongly recommend consulting your trusted doctor
                  or pediatrician for proper diagnosis and medication.
                </p>
              </section>

              <section className={styles.developer}>
                <p>
                  developed by{" "}
                  <Link
                    href={"https://github.com/cris3h"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C3H
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
