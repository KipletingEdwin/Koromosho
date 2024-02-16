import styles from './App.module.css'
import About from './components/About/About'
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
    </div>
  )
}

export default App
