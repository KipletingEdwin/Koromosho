import React from 'react'
import styles from './SundaySchool.module.css';
import trump from '../../assets/leaders/kama/trump.png';

function SundaySchool() {
  return (
    <section className={styles.container}>
        <div className={styles.school}>
            <div className={styles.schoolImage}>
                <img src={trump} alt='sundy-school'/>
            </div>
            <div className={styles.description}>
                <p> St James children department is an integral part of the church ministry that caters for
                     the children from 2 years to 12 years. The department has divided the classes according
                      to the age groups in order to provide customized ministry to the children. 
                      The age groups are;</p>
                      <ul>
                        <li> Youngsters for children aged 2 to 5 years </li>
                        <li> Explorers for children aged 6 to 8 years </li>
                        <li> Ambassadors for children aged 9 to 11 years </li>
                        <li> Eagles for children aged 12 years </li>
                      </ul>
            </div>
        </div>

        <div className={styles.missionContainer}> 
        <div className={styles.mission}>
            <h2> Mission</h2>
            <p> Our mission is; </p>
            <ul>
                <li>  Helping our children to KNOW Jesus Christ, GROW to be like Him, and GO serve Him. </li>
                <li>   We believe that God has called us, in partnership with parents, to help our children. </li>
                <li>  To provide education and guidance on Christianity within the Anglican context; </li>
                <li> To provide opportunities for spiritual growth and development; </li>
                <li>  To provide opportunities for our children to develop social and life skills; </li>
                <li> To be Committed and exemplary educators within our community. </li>
            </ul>

        </div>

        <div className={styles.schoolTeacher}>
            <img src={trump} alt='teacher'/>

        </div>

        <div className={styles.visionContainer}>
            <h2> Vision</h2>
            <p> To help our children know Jesus Christ by creating opportunities for spiritual 
                growth and development in the Anglican faith.
                </p>
                <h2> Enrolment</h2>
                <p> The Sunday school department serves over 600 children every Sunday. We endeavour
                     to provide spiritual nourishment for the children in order to enable them grow
                      in the spiritual walk with Jesus Christ. 
                </p>
        </div>
        </div>

        <div className={styles.fellowshipContainer}>
            <div className={styles.fellowship}>
                <h2> FELLOWSHIP </h2>
            </div>
            <div className={styles.fellowshipDescription}>
                <p> The department runs programs for the children as follows </p>
                <ul>
                    <li> Sunday school services are held at the following times; </li>
                    <li> Vocational Bible Study (VBS) every school holidays </li>
                    <li> Training in music, drama and public speaking. </li>
                    <li> Boys and Girls brigade programs </li>
                    <li> Home visits and fellowship for the needy, sick children </li>
                    <li> Training program and fellowship for the Sunday school teachers and mentors </li>
                </ul>

            </div>

        </div>

        <div className={styles.sundaySchoolImages}>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>
            <img src={trump} alt='sunday-school'/>

        </div>



    </section>
  )
}

export default SundaySchool