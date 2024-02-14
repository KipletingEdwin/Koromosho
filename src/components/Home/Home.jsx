import React from "react";
import styles from "./Home.module.css";
import koroProfile from "../../assets/koro/koroProfile1.jpg";

function Home() {
  return (
    <section className={styles.container}>
      <img className={styles.backImage} src={koroProfile} alt="koro" />
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}> ACK ST. JAMES KOROMOSHO</h1>
        </div>
        <h4>-UPCOMING SERVICE-</h4>
      </div>
    </section>
  );
}

export default Home;
