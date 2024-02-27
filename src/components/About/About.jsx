import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';
import projects from '../../Data/Data.json'
import Reverend from '../../assets/socials/facebook.png';

function About() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.aboutContainer}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>


      <div className={styles.reverendContainer}>
        <img src={Reverend} alt="reverend"/>
        <p className={styles.name}>Reverend Rirei</p>
        <h3>  Reverend's word of welcome</h3>
        <p className={styles.description}> We are glad that you have found time to visit the St. Marks Church Westlands
           website, May I take this opportunity to personally welcome you and trust that
            you will connect with us and find a belonging.The doors of this church have 
            been open over the year to receive people of all races, nationalities,gender
             and age and we also praise God that many have through this doors come to 
             the savingknowledge of our Lord Jesus Christ.

        </p>

      </div>


      <h1> MISSION & VISION</h1>
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
        <p>{projects.churchHistory}</p>
      </div>
      <div className={styles.faith}>
        <h3 className={styles.coreValuesTitle}>Core Values</h3>
        <div className={styles.coreValues}>
          {
            projects.projects.map((project, index) => (
              <div key={index} className={styles.value}>
                <h3>{project.title}</h3>
                <p>{project.Description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default About;
