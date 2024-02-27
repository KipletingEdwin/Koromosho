import React, {useEffect, useRef, useState} from "react";
import styles from "./Home.module.css";
import koroProfile from "../../assets/koro/koroProfile1.jpg";

function Home() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  const [sentence, setSentence] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullSentence = "Welcome to:";


  let interval = useRef();

  const startTimer = () => {
    let initialCountDownDate = new Date('March 3, 2024 10:00:00').getTime();
    let countDownDate = initialCountDownDate;
 
   

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if(distance < 0){
        initialCountDownDate +=7 * 24 *60 * 60 * 1000;
        countDownDate = initialCountDownDate
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current);
      } else {
        //update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 500);
  };

 

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  },[]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullSentence.length) {
        setSentence((prevSentence) => prevSentence + fullSentence[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset currentIndex to 0 to start the sentence again
        setCurrentIndex(0);
        setSentence(""); // Clear the sentence to start anew
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, fullSentence.length]);
  

  return (
    <section className={styles.container}>
      <img className={styles.backImage} src={koroProfile} alt="koro" />
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <h3>{sentence} </h3>
          <h1 className={styles.title}> ACK ST. JAMES KOROMOSHO</h1>
        </div>
        <div className={styles.countDownContainer}>
          <h3>-UPCOMING SERVICE-</h3>
          <div className={styles.timerContainer}> 
          <div className={styles.items}>{timerDays}<p>Days</p></div>
          <div className={styles.items}>{timerHours}<p>Hours</p></div>
          <div className={styles.items}>{timerMinutes}<p>Minutes</p></div>
          <div className={styles.items}>{timerSeconds}<p>Seconds</p></div>
          </div>
        </div>

        {/* <div className={styles.themeContainer}>
          <div className={styles.theme}>
            <h3>Theme 2024</h3>
            <h2> POSSESSING DIVINE OPPORTUNITIES </h2>
          </div>
          <p>Open up your eyes and see” (2 kings 6:17)</p>
        </div> */}
        
      </div>
    </section>
  );
}

export default Home;
