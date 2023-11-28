import React from "react";
import  styles from './DebateProfile.module.css';
import rfkvshotez from '../imgs/rfkvshotez.jpeg';
import { Participant, ParticipantId } from "./Participant";
import * as uuid from 'uuid';
import hotez from '../imgs/hotez.jpeg';
import RFK from '../imgs/RFK.jpeg';
import JR from '../imgs/JR.jpeg';
export const DebateProfile = () => {
    const dummyParticipants:DebateParticipantsProps = {
        participants:[
            {name: 'RFK', id: ParticipantId.of(uuid.v4()), role: 'participant',imgRoute:RFK},
            {name: 'Hotez', id: ParticipantId.of(uuid.v4()), role: 'moderator', imgRoute:hotez},
            {name: 'Joe Rogan', id: ParticipantId.of(uuid.v4()), role: 'moderator', imgRoute: JR}
        ]
    }
    // static for now
    return(
        <div className={styles.debateProfile}>
              <img className={styles.debateProfileImg} alt={'Debate profile'} src={rfkvshotez}/>
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
            <hr className="solid" />
            {DebateParticipants(dummyParticipants)}
        </div>
    );
};

interface DebateParticipantsProps {
    participants: Participant[];
}

export const DebateParticipants = ({participants}: DebateParticipantsProps) => {
    
    return (
        <div className={styles.participantSection}>
             <h1 >Participants</h1>
            <div className={styles.debateParticipants}>
                {participants.map((participant) => DebateParticipant(participant))}
            </div>
        </div>
    )
}

export const DebateParticipant = (participant: Participant) => {
    return (
        <div>
            <img className={styles.participantImg} alt={'Participant profile'} src={participant.imgRoute}/>
            <h1 className={styles.centeredText}>{participant.name}</h1>
            <p className={styles.centeredText}>{participant.role}</p>
        </div>
    )
}

