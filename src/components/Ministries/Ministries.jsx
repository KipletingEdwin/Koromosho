import React from "react";
import styles from "./Ministries.module.css";

function Ministries() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutMinistry}>
        <hr className={styles.line} />
        <p>Ministries</p>
        <hr className={styles.line} />
      </div>
    </section>
  );
}

export default Ministries;
