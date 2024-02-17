import React from "react";
import styles from "./Ministries.module.css";
import kama from '../../assets/ministry/KAMA_LOGO.png';
import mu from '../../assets/ministry/mothersunionlogo.jpg';
import kayo from '../../assets/ministry/kayo.png';
import choir from '../../assets/ministry/choir.png';

function Ministries() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutMinistry}>
        <hr className={styles.line} />
        <p>Ministries</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.departments}>
        <div className={styles.departmentsContainer}>
            <a href="/kama" className={styles.kama}>
                <img src={kama} alt="kama"/>
                <div className={styles.description}>
                    <h3> Kenya Anglican Men Association(KAMA)</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

            <a href="/mu" className={styles.kama}>
                <img src={mu} alt="kama"/>
                <div className={styles.description}>
                    <h3> Mothers' Union</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

            <a href="/kayo" className={styles.kama}>
                <img src={kayo} alt="kama"/>
                <div className={styles.description}>
                    <h3> Kenya Anglican Youth Organization(KAYO)</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

            <a href="/teens" className={styles.kama}>
                <img src={choir} alt="kama"/>
                <div className={styles.description}>
                    <h3> Children's and Teen's Ministry</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

            <a href="/choir" className={styles.kama}>
                <img src={choir} alt="kama"/>
                <div className={styles.description}>
                    <h3> Choir</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

            <a href="/cell" className={styles.kama}>
                <img src={kama} alt="kama"/>
                <div className={styles.description}>
                    <h3> Cell Groups</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </a>

        </div>

      </div>
    </section>
  );
}

export default Ministries;
