import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';
import projects from '../../Data/Data.json'


function About() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.aboutContainer}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>
      <h1> MISSION & VISION</h1>
      {/* <hr className={styles.lineMission} /> */}
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

          {
            projects.map((project, index)=>{
              return (
              <div key={index} className={styles.value}>
                <h3> {project.title} </h3>
                <p> {project.Description} </p>

              </div>
              )
            })
          }

        </div>

      </div>
    </section>
  );
}

export default About;
