import React, {useState} from 'react'
import styles from './Navbar.module.css'
import closeIcon from '../../assets/nav/closeIcon.png';
import menuIcon from '../../assets/nav/menuIcon.png';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <a href='/' className={styles.title}>ACK ST. JAMES KOROMOSHO</a>
            <div className={styles.menu}>
            <img src={isMenuOpen ? menuIcon : closeIcon} alt='menu' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                <ul className={styles.menuList}>
                    <li>
                        <a href='/'>Home</a>
                    </li>

                    <li>
                        <a href='/about'>About</a>
                    </li>

                    <li>
                        <a href='/events'>Events</a>
                    </li>

                    <li>
                        <a href='/sermons'>Sermons</a>
                    </li>

                    <li>
                        <a href='/news'>News</a>
                    </li>

                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>

            </div>

        </nav>
    </div>
  )
}

export default Navbar