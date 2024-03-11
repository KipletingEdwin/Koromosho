import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.container}>
      <hr className={styles.line} />
      <div className={styles.aboutChurch}>
        <p>A.C.K St James Koromosho,Kaptinga,Simat Location</p>
        <div className={styles.contactFooter}>
          <p> Tel:0712345678</p>
          <p> Email:ackstjameskoromosho@gmail.com</p>
          <p> Web:www.stjameskoromosho.or.ke</p>
        </div>
        <p>
          <p>Copyright &copy; 2016- St James Koromosho</p>
        </p>
      </div>
    </section>
  );
}

export default Footer;
