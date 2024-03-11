import React, { useEffect, useState } from "react";
import styles from "./Notices.module.css";

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notices")
      .then((response) => response.json())
      .then((data) => {
        setNotices(data);
      })
      .catch((error) => console.error("Error fetching notices:", error)); //Log any errors
  }, []);

  return (
    <section className={styles.noticesContainer} id="notices">
      <div className={styles.containerTop}>
        <hr className={styles.line} />
        <p>Notices</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.notices}>
        <table>
          <thead>
            <tr>
              <th> Event </th>
              <th> Venue </th>
              <th> Date </th>
              <th> Time </th>
              <th> Expected Attendees </th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, id) => (
              <tr key={id}>
                <td>{notice.event}</td>
                <td>{notice.venue}</td>
                <td>{notice.date}</td>
                <td>{notice.time}</td>
                <td>{notice.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Notices;
