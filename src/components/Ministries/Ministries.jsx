import React from "react";
import styles from "./Ministries.module.css";
import ministriesData from "../../Data/Ministries.json";
import { Link } from "react-router-dom";

function Ministries() {
  return (
    <section className={styles.container} id="ministries">
      <div className={styles.aboutMinistry}>
        <hr className={styles.line} />
        <p>Ministries</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.departments}>

        {/* Render different departments*/}


        <div className={styles.departmentsContainer}>
          {ministriesData.map((ministry, index) => (
            <Link to={ministry.href} key={index} className={styles.kama}>
              <img src={ministry.imageSrc} alt={ministry.name} />
              <div className={styles.description}>
                <h3>{ministry.name}</h3>
                <hr className={styles.kamaLine} />
                <p>{ministry.link}</p>
              </div>
            </Link>
          ))}

          
        </div>
      </div>
    </section>
  );
}

export default Ministries;
