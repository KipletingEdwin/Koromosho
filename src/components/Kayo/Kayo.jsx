import React from "react";
import styles from "./Kayo.module.css";
import trump from "../../assets/leaders/kama/trump.png";

function Kayo() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {" "}
        Kenya Anglican Youth Organisation (KAYO){" "}
      </h1>
      {/* <div className={styles.introduction}> */}

      <div className={styles.introduction}>
        <div className={styles.chairman}>
          <div className={styles.chairmanContainer}>
            <img src={trump} alt="chairman" />
            <h4> FRANCIS KINUTHIA</h4>
            <p> Chairman </p>
          </div>
        </div>
        <div className={styles.leadershipContainer}>
          <h3> Kayo Leadership </h3>
        </div>
      </div>
      {/* </div> */}

      <div className={styles.objectives}>
        <div className={styles.kayoObjectives}>
          <h2> KAYO OBJECTIVES: </h2>
          <ul>
            <li>
              {" "}
              To bring young people to know, to love Jesus Christ as Savior and
              Lord.{" "}
            </li>
            <li>
              {" "}
              To build up young people in the knowledge and behavior of the
              Christian faith, the Bible being the foundation.{" "}
            </li>
            <li>
              {" "}
              To educate young people in good Christian character and to
              encourage them to be leaders of the Church.{" "}
            </li>
            <li>
              {" "}
              To help the Church understand its responsibility towards young
              people.{" "}
            </li>
          </ul>
        </div>
        <div className={styles.vision}>
          <h2> VISION: </h2>
          <p> A Strong Dynamic Anglican Youth boldly proclaiming Christ. </p>
          <h2> CORE VALUES: </h2>
          <ul>
            <li> Commitment, </li>
            <li> Integrity, </li>
            <li> Love, </li>
            <li> Trustworthiness, </li>
            <li> Humility, </li>
            <li> Compassion and </li>
            <li> Holiness </li>
          </ul>
          <h2> KAYO PRAYER:</h2>
          <p>
            {" "}
            Teach us good Lord to serve you with all our strength, body, soul
            and mind. To love you and rejoice in you always. To offer our
            services without counting the cost.{" "}
          </p>
        </div>
        <div className={styles.mission}>
          <div className={styles.content}>
            <h2> MISSION: </h2>
            <p>
              {" "}
              To reach and equip the Youth to transform Society with Gospel.
            </p>
          </div>

          <div className={styles.content}>
            <h2> KAYO ANTHEM: </h2>
            <p>
              {" "}
              OO KAYO, Mashahidi wa Yesu Chama kikuu, chenye kusudi kubwa
              Kinawapendeza vijana, wasichana na wavulana OO KAYO Mashahidi wa
              Yesu.
            </p>
          </div>

          <div className={styles.content}>
            <h2> KAYO PROMISE: </h2>
            <p>
              {" "}
              I promise to serve Jesus Christ all the days of my life To pray
              and read the Bible each day, to reach out to the other young
              people Especially K.A.Y.O members and to abide by the rules of the
              group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kayo;
