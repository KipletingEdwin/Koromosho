import React from 'react'
import styles from './Notices.module.css';

function Notices() {
  return (
    <section className={styles.noticesContainer} id='notices'>
         <div className={styles.containerTop}>
        <hr className={styles.line} />
        <p>Notices</p>
        <hr className={styles.line} />
      </div>
        Notices
    </section>
  )
}

export default Notices