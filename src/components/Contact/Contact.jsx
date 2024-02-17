import React from "react";
import styles from "./Contact.module.css";

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
                    <input type="text" placeholder="Name" name="name" required/>
                    </li>

                    <li> 
                    <input type="email" placeholder="Email" name="email" required/>
                    </li>

                    <li> 
                    <input type="tel" placeholder="Phone Number" name="phone" required/>
                    </li>

                    <li> 
                    <textarea placeholder="Message" name="message" required>
                        
                    </textarea>
                    </li>
                </ul>

            </form>
          

        </div>

      </div>
    </section>
  );
}

export default Contact;
