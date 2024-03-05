import React from "react";
import styles from "./Choir.module.css";
import trump from "../../assets/leaders/kama/trump.png";

function Choir() {
  return (
    <section className={styles.container}>
      <div className={styles.choirContainer}>
        <div className={styles.choir}>
          <img src={trump} alt="choir" />
        </div>
        <div className={styles.choirDescription}>
          <div className={styles.description}>
            <h2> Choir </h2>
            <p>
              {" "}
              ACK St James Cathedral Choir is vibrant ministry that spices up
              our services in Cathedral. The current number of choir members
              range from 60 to 70 cutting across all ages. The church has
              invested a lot in both instruments and personnel where the current
              Music Director/Teacher is rated as among the top cream in Kiambu
              County.
            </p>
            <p>
              ACK St James Cathedral choir has been honoured to perform in major
              county and national events in addition to winning trophies in
              Diocesan and regional competitions.
            </p>
            <p>
              The long term projection is for the choir number to reach at least
              100 and to acquire modern sound equipment.
            </p>
            <p>
              A Vibrant Choir is part of the rebranded Cathedral that is admired
              by many.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.management}>
        <h2> Management Team of the Cathedral Choir </h2>
        <ul>
          <li> Music Director – Dishon Thiong’o </li>
          <li> Chairperson – Susan Wangui </li>
          <li> Secretary – Samuel Ngatia </li>
          <li> Treasurer – Anne Wandia </li>
        </ul>
      </div>

      <div className={styles.choirImages}>
        <img src={trump} alt="choir-image" />
        <img src={trump} alt="choir-image" />
        <img src={trump} alt="choir-image" />
        <img src={trump} alt="choir-image" />
        <img src={trump} alt="choir-image" />
        <img src={trump} alt="choir-image" />
      </div>
    </section>
  );
}

export default Choir;
