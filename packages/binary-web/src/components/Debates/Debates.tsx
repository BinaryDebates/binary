import React from 'react'
import styles from './Debates.module.css'
// import rfkvshotez from '../../imgs/rfkvshotez.jpeg';

export const Debates = (): React.JSX.Element => {
  return (
       <div className={styles.debateRequests}>
        <div className={styles.debateRequestsHeader}>
        <p className={styles.debateRequestsTitle}>
            Request for debates
        </p>
        <p className={styles.debateRequestsSubitle}>
            Vote on the matchups you want to see
        </p>
        </div>

        <ul className={styles.navMenu}>
            <li>
            {/* <a href='/debateProfile' className={styles.navLink}> */}
            {/* <DebateSection title={'RFK vs Hotez'} summary={'Debate on the safety and efficacy of vaccines'} imgRoute={rfkvshotez}/>   */}
            {/* </a> */}
            </li>

          </ul>
       </div>
  )
}
