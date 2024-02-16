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
      <h1> MISSION & VISION</h1>
      <hr className={styles.line} />
      <div className={styles.vmContainer}>
       
        <div className={styles.vision}>
          <h3> VISION</h3>
          <p>A growing and caring Anglican Church boldly proclaiming Christ.</p>
        </div>
        <div className={styles.mission}>
          <h3> MISSION</h3>
          <p>
            To equip God’s people to reach out and transform society with the
            gospel of Christ.
          </p>
        </div>
      </div>
      <div className={styles.churchHistory}>
        <h3>Church History</h3>
        <p> The Anglican Church, originating in England during the 16th century, emerged amidst the tumultuous period of
           the English Reformation. Rooted in the theological disputes between Henry VIII and the Roman Catholic Church
            over his desire for an annulment of his marriage, the establishment of the Church of England marked a significant
             departure from papal authority. Under the reign of subsequent monarchs, particularly Elizabeth I, the Church 
             solidified its identity, adopting a via media or "middle way" approach, blending elements of Catholic tradition 
             with Protestant theology. Throughout its history, the Anglican Church has undergone numerous theological and
              ecclesiastical shifts, including the rise of Puritanism, the Civil War era, the Evangelical revival, and the 
              Oxford Movement. Today, it is a global communion, comprising diverse traditions, practices, and theological 
              perspectives, while maintaining its historic ties to the Church of England.</p>

      </div>
      <div className={styles.faith}>
        <h3>Statement of faith</h3>

      </div>
    </section>
  );
}

export default About;
