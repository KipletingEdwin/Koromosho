import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/nav/koro.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className={styles.container}>
       <hr className={styles.line} />
      <div className={styles.aboutChurch}>
        <div className={styles.ack}>
          <h4>ACK ST JAMES KOROMOSHO</h4>
          <img src={logo} alt="koromosho" />
          <p>Welcome to ACK St James Koromosho,feel free to worship with us</p>
        </div>
        <div className={styles.aboutSection}>
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ministries">Ministries</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.shop}>
          <h4>Join our email list</h4>
          <form className={styles.inputContainer}>
            <input name="email" type="email" placeholder="Email" required />
          </form>
          <button>Subscribe</button>
          <p>
            By completing this form you are signing up to receive our emails and
            can unsubscribe at any time
          </p>
        </div>
      </div>
      <div className={styles.footerLine}>
        <hr className={styles.line} />
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.rights}>
          <p>
            &copy; Copyright{" "}
            <span className={styles.copyright}>
              {" "}
              <a href="https://www.ackenya.org/">
                Anglican Church of Kenya
              </a>{" "}
            </span>
          </p>
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
