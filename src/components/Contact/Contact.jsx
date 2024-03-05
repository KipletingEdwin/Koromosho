import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../../assets/socials/facebook.png";
import X from "../../assets/socials/X.png";
import instagram from "../../assets/socials/Instagram.png";

function Contact() {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.containerTop}>
        <hr className={styles.line} />
        <p>Contact Us</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <p>Drop us a message</p>
          <form className={styles.myForm}>
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
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <button className={styles.contactBtn}>SEND</button>
            </ul>
          </form>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <div className={styles.address}>
              <div className={styles.eyeContact}>
                <FontAwesomeIcon icon={faBullseye} className={styles.icon} />
                <h3>Contact Information</h3>
              </div>
              <p>
                <FontAwesomeIcon icon={faPhone} /> : +254712345678{" "}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />:
                ackstjameskoromosho@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />: Kaptinga,Simat
                Location,Kapseret Constituency,Uasin Gishu County
              </p>
            </div>
            <div className={styles.socials}>
              <h3> Follow Us:</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/groups/282547165136513"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" />
                </a>

                <a
                  href="https://www.facebook.com/groups/282547165136513"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="Twitter" />
                </a>

                <a
                  href="https://www.facebook.com/groups/282547165136513"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
