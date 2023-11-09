import React from "react"
import NavBar from "../NavBar";
import  styles from './DebateRequests.module.css';
import rfkvshotez from '../imgs/rfkvshotez.jpeg';
import { DebateProfile } from "../DebateProfile/DebateProfile";
import { useNavigate } from "react-router-dom";
export const DebateRequests = () =>{


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
            <DebateSection title={'RFK vs Hotez'} summary={'Debate on the safety and efficacy of vaccines'} imgRoute={rfkvshotez}/>  
            {/* </a> */}
            </li>
     
          </ul>
       </div>
      );
}


interface DebateSectionProps {
    title:string;
    summary: string;
    imgRoute: string;
}
const DebateSection = (debateSectionProps:DebateSectionProps) => {
    let navigate = useNavigate(); 
    const toDebateProfile = () =>{ 
      let path = `/debateProfile`; 
      navigate(path);
    }

    return(
    <div className={styles.debateSection}>
         <img className={styles.debateSectionImg} onClick={toDebateProfile}  src={debateSectionProps.imgRoute}/>
        <div className={styles.debateInnerSection}>
            <h1 className={styles.debateSectionTitle}>{debateSectionProps.title}</h1>
            <p className={styles.debateSectionSummary}>{debateSectionProps.summary}</p>
        </div>
    </div>
    )
}