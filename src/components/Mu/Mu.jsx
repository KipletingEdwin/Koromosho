import React from 'react'
import styles from './Mu.module.css';
import trump from '../../assets/leaders/kama/trump.png';

function Mu() {
  return (
    <section className={styles.container} id='mu'>
        <h2> Mother’s Union Leadership </h2>
        <div className={styles.images}>
        Mother’s Union Leadership
        </div>
        <div className={styles.muLeadership}>
            <div className={styles.chairlady}>
                <img src={trump} alt='chairlady' />
                <h5>Lucy Njihia</h5>
                <p>Chairlady</p>
            </div>

            <div className={styles.chairlady}>
                <img src={trump} alt='chairlady' />
                <h5>Lucy Njihia</h5>
                <p>Chairlady</p>
            </div>

            <div className={styles.chairlady}>
                <img src={trump} alt='chairlady' />
                <h5>Lucy Njihia</h5>
                <p>Chairlady</p>
            </div>

        </div>

        <div className={styles.aboutContainer}>
            <div className={styles.about}>
                <h3>About the Mother’s Union </h3>
            </div>
            <div className={styles.aboutDescription}>
                <p>The Mother’s Union is the oganization that brings together women of the Anglican denomination 
                    from around the world. At St. James Cathedral the Mother’s Union is strong with members of 
                    all ages cutting across the different services. Mother’s Union focuses on entrenching and 
                    nurturing Christian Care for Families.</p>
                    <span> The Mother’s Union was founded in 1876 by Mary Sumner, a member of Church of England
                         parish of Old Alresford, near Winchester. Her inspiration to start the movement came 
                         after the birth of her first grandchild, she remebered her motherhood challenges and 
                         wanted to pool together mothers of all social classes to provide support for one another 
                         and to be trained in motherhood. In Kenya, the movement started in 1918 by settler women. </span>
                         <span> At St. James Cathedral, Mother’s Union is strong in fellowships, family education,
                             and income generating projects such as tailoring school and tents and seats for hire. </span>

            </div>
            <div className={styles.visionConatner}>
                <div className={styles.vision}>
                    <h2> VISION</h2>
                    <p> To promote the well-being of families world-wide as a Christian organization and in Kenya. </p>
                </div>
                <div className={styles.enrolment}>
                    <h3> ENROLMENT</h3>
                    <p> Every year the Mother’s Union enrolls new members who have to go through comprehensive
                         classes to train them on the objectives of the movement.</p>
                </div>
                <div className={styles.giving}>
                    <h3>GIVING</h3>
                    <p> The Mother’s Union is big on giving to the work of God, every August they hold their annual
                         fundraiser for projects to God’s glory. </p>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Mu