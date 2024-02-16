import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutContainer}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>
    </section>
  );
}

export default About;
