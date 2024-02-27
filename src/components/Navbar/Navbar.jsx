import React, { useState } from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
          ACK ST. JAMES KOROMOSHO
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ul
            className={`${styles.menuList} ${isMenuOpen && styles.menuOpen}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#events">Events</a>
            </li>

            <li>
              <a href="#ministries">Ministries</a>
            </li>

            <li>
              <a href="#news">News</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
