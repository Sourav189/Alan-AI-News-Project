import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.p}>&copy; Copyright {year} Sourav-Singh</p>
      </footer>
    </div>
  );
}

export default Footer;
