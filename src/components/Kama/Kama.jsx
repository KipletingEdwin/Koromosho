import React from 'react'
import styles from './Kama.module.css';
import trump from '../../assets/leaders/kama/trump.png';

function Kama() {
  return (
    <section className={styles.container} id='kama'>
        <div className={styles.introduction}>
            <div className={styles.intro}>
                <h2> Who we are</h2>
                <h3> Kenya Anglican Men’s Association (KAMA) </h3>
            </div>
            <div className={styles.description}>
                <p> KAMA was established to create a forum for men in the Anglican
                     Church of Kenya to fellowship and serve Christ. It also prepares 
                     men to play their God given roles within family, the church and 
                     Country. </p>
                <p> The Provincial KAMA in Kenya received recognition and blessing
                     of the Provincial Synod in July 2001, by this time nearly all diocese
                      had established KAMA. Before KAMA their existed the Father’s 
                       which was established in Diocese of Mt. Kenya South in 1985.
                        It is both a privilege and responsibility to be a KAMA member 
                        because it constantly reminds men of their faith in Jesus 
                        Christ.
                 </p>
            </div>
        </div>
        <div className={styles.leadershipContainer}>
            <h1> KAMA Leadership </h1>
            <div className={styles.leaders}>
                <div className={styles.leader}>
                    <img src={trump} alt='chairman'/>
                    <h3> David Kamari</h3>
                    <p> Chairman</p>
                </div>

                <div className={styles.leader}>
                    <img src={trump} alt='secretary'/>
                    <h3> Edward Gikonyo</h3>
                    <p> Secretary KAMA</p>
                </div>

                <div className={styles.leader}>
                    <img src={trump} alt='treasurer'/>
                    <h3> Mophat Wanjau</h3>
                    <p> Treasurer KAMA</p>
                </div>

            </div>

            <div className={styles.moto}>
                <h2> KAMA Motto </h2>
                <h4> “But as for me and my house, we will serve the Lord.”  </h4>
                <p> Joshua 24:15.
                        As KAMA members it is our obligation to keep away from any 
                        form of idol worship (worshipping that which is made by man),
                         but instead we should worship only God our creator. We
                          should also obey and serve God alone. </p>

            </div>
            <div className={styles.objectives}>
                <ul>
                    <li> To promote God’s Kingdom and to set forth His glory </li>
                    <li> To help its members to grow in spirit, mind and body, and be natured in faith for every good work. </li>
                    <li> To encourage members to play an active role in the mission of Church. </li>
                    <li> To promote Christian principles in national, civic and community life. </li>
                    <li>To encourage members to undertake acts of Christian service for the distressed, disadvantaged and the disabled. </li>
                    <li> To encourage members to use the gifts God has given them as good stewards of God’s varied grace. </li>
                    <li> To encourage members to use their resources in supporting the work of the Church at all levels. </li>
                    <li> To encourage Anglican lay men and women to play positive roles as Christians in political, social and economic life of the nation. </li>
                    <li> To honour the institution of marriage as ordained by God and to promote Christian family values. </li>
                    <li> To promote Christian fellowship, love and unity in the Church and society, and to promote spiritual enthusiasm among members. </li>
                </ul>

            </div>

            <div className={styles.fellowshipsContainer}>
                <div className={styles.fellowshopDescription}>
                    <p> KAMA at the Cathedral brings together all men in fellowship to learn God’s word, hold empowerment activities, and 
                        address issues that may be afflicting members. We hold meetings twice a month during the first and third Sunday 
                        after all four services; Holy Communion, Kiswahili, English and Kikuyu service. Additionally we hold monthly
                         afternoon prayers every third Sunday of the month at the home of a member. </p>
                         <span> Men also participate in empowerment talks that aim at improving their family relations, community
                             participation and wealth creation. KAMA aims to empower men at the Cathedral in an all-round manner. </span>
                </div>
                <div className={styles.fellowshipImages}>

                </div>

                <div className={styles.enrolment}>
                    <div className={styles.enrolmentDescription}>
                        <h3> Enrolment:</h3>
                        <p> Annually KAMA in the diocese enrolls men to formally join KAMA as members, this is a ceremony that is officiated
                             by the Diocesan Bishop. </p>
                             <span> Contact David +254 723 842 083 </span>

                    </div>
                    <div className={styles.giving}>
                        <h3> Giving</h3>
                        <p> KAMA Cathedral holds its annual fundraiser during the month of August. The funds raised go towards development
                             projects in our Cathedral that identified by members. Our current project is the Construction of new Church 
                             gate and perimeter wall, a landmark project in Kiambu town. </p>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Kama