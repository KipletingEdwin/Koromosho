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
            <div className={styles.kama}>
                <img src={kama} alt="kama"/>
                <div className={styles.description}>
                    <h3> Kenya Anglican Men Association(KAMA)</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

            <div className={styles.kama}>
                <img src={mu} alt="kama"/>
                <div className={styles.description}>
                    <h3> Mothers' Union</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

            <div className={styles.kama}>
                <img src={kayo} alt="kama"/>
                <div className={styles.description}>
                    <h3> Kenya Anglican Youth Organization(KAYO)</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

            <div className={styles.kama}>
                <img src={choir} alt="kama"/>
                <div className={styles.description}>
                    <h3> Children's and Teen's Ministry</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

            <div className={styles.kama}>
                <img src={choir} alt="kama"/>
                <div className={styles.description}>
                    <h3> Choir</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

            <div className={styles.kama}>
                <img src={kama} alt="kama"/>
                <div className={styles.description}>
                    <h3> Cell Groups</h3>
                    <hr className={styles.kamaLine} />
                    <p>Learn More</p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}

export default Ministries;
