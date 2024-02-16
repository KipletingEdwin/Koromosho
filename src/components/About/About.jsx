import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <section className={styles.container}>
      <div className={styles.aboutContainer}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>
      <h1> MISSION & VISION</h1>
      <hr className={styles.lineMission} />
      <div className={styles.vmContainer}>
       
        <div className={styles.vision}>
          <div className={styles.churchMission}> 
          <FontAwesomeIcon icon={faEye} className={styles.icons} />
          <h3> VISION</h3>
          </div>
          <p>A growing and caring Anglican Church boldly proclaiming Christ.</p>
        </div>
        <div className={styles.mission}>
          <div className={styles.churchMission}> 
          <FontAwesomeIcon icon={faBullseye} className={styles.icons} />
          <h3> MISSION</h3>
          </div>
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
        <h3 className={styles.coreValuesTitle}>Core Values</h3>
        <div className={styles.coreValues}>
          <div className={styles.value}>
            <h3>Faith in Christ</h3>
            <p> Demonstrating a deep and committed acknowledgement of Christ and his teachings in all our work and engagement. </p>
          </div>

          <div className={styles.value}>
            <h3>Love</h3>
            <p> Sharing the Love of Christ with the world. </p>
          </div>

          <div className={styles.value}>
            <h3>Integrity</h3>
            <p> Being good and responsible stewards of Church resources and ensuring prudent management of the same, through 
              establishment of well-defined structures and policies. </p>
          </div>

          <div className={styles.value}> 
            <h3>Honor</h3>
            <p>Honoring God in our Work and service and engagement with the World. </p>
          </div>

          <div  className={styles.value}>
            <h3>Professionalism</h3>
            <p> Being professional in all our service and maintaining good relations at all levels. </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
