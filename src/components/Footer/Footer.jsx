import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.container}>
        <h2>Footer</h2>
      <div className={styles.footerLine}>
        <hr className={styles.line} />
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.rights}>
        <p>&copy; Copyright 2019. All rights reserved.</p>
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
