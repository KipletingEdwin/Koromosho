import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.containerTop}>
        <hr className={styles.line} />
        <p>Contact Us</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <p>Drop us a message</p>
          <form>
            <ul>
              <li>
                <input type="text" placeholder="Name" name="name" required />
              </li>

              <li>
                <input type="email" placeholder="Email" name="email" required />
              </li>

              <li>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </li>

              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
            <div className={styles.address}>
                <p> Call us: +254712345678 </p>
                <p> Email: ackstjameskoromosho@gmail.com</p>
            </div>
            <div className={styles.socials}>
                <h3> Follow Us:</h3>
                <div className={styles.icons}>
                    
                    <a href="/facebook.com">  <FontAwesomeIcon icon={faXTwitter} /> </a>
                    <a href="/facebook.com">  <FontAwesomeIcon icon={faFacebook} /> </a>
                    <a href="/facebook.com">  <FontAwesomeIcon icon={faInstagram} /> </a>
               
               

                </div>

            </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
