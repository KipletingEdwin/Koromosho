import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Ministries from './components/Ministries/Ministries'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Ministries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
