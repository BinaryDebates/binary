import React from "react";
import { useParams } from "react-router-dom";
import  styles from './DebateProfile.module.css';
import rfkvshotez from '../imgs/rfkvshotez.jpeg';


export const DebateProfile = () => {
    // static for now
    return(
        <div className={styles.debateProfile}>
              <img className={styles.debateProfileImg}  src={rfkvshotez}/>
            <div className={styles.debateProfileHeader}>
                <div>
                    <h1 className={styles.debateSectionTitle}>{'RFK vs Hotez'}</h1>
                    <p className={styles.debateSectionSummary}>{'Debate on the safety and efficacy of vaccines'}</p> 
                </div>
                <div className={styles.buttons}>
                    <button className={styles.shareButton}>Share</button>
                    <button className={styles.pledgeButton}>$1.2mil Pledged</button>
                </div>
            </div>

        </div>
    );
};