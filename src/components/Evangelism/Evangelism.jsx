import React from "react";
import styles from "./Evangelism.module.css";
import trump from "../../assets/leaders/kama/trump.png";

function Evangelism() {
  return (
    <section className={styles.container}>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <h2 className={styles.title}> Mission and Evangelism</h2>
          <p>
            {" "}
            Until 2017 the Cathedral has been holding annual Mission weeks in
            the month of August. The mission would target all areas covered by
            our cell groups, namely, Karoha, Ngegu, Kirigiti, Ndumberi and
            Ruthiru-ini. The Mission involves home visitations, assistance for
            those affected by alcohol and substance abuse, crusades, and Church
            services. Starting 2018, the Cathedral missions will happen monthly
            starting February with the climax being in the month of August. The
            Cathedral partners with professionals to provide support in medical
            services and counselling. Many people have come to know Christ as
            their personal savior through the work done by Missioners, glory to
            God.{" "}
          </p>
        </div>
        <div className={styles.descriptionImage}>
          <img src={trump} alt="evangelism" />
          <img src={trump} alt="evangelism" />
        </div>
      </div>
    </section>
  );
}

export default Evangelism;
