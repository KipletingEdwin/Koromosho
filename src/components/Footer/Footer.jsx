import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.footerLine}>
        <hr className={styles.line} />
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.rights}>
          <p>&copy; Copyright <span className={styles.copyright}>  <a href="https://www.ackenya.org/">Anglican Church of Kenya</a> </span></p>
          <p> All rights reserved.</p>
        </div>

        <div className={styles.terms}>
          <a href="">Terms & Conditions</a>
          <a href="">Private Policy</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
