import { Box } from "@chakra-ui/react";
import React, { Component } from "react"


interface DebateSectionProps {
  title:string;
  summary: string;
  imgRoute: string;
}

export default class Debate extends Component {
  render() {
    return (
      <Box>
        Hello
      </Box>
    )
  }
}

// const DebateSection = (debateSectionProps:DebateSectionProps) => {
//   let navigate = useNavigate(); 
//   const toDebateProfile = () =>{ 
//     let path = `/debateProfile`; 
//     navigate(path);
//   }

//   return(
//   <div className={styles.debateSection}>
//        <img className={styles.debateSectionImg} alt={'Debate section'} onClick={toDebateProfile}  src={debateSectionProps.imgRoute}/>
//       <div className={styles.debateInnerSection}>
//           <h1 className={styles.debateSectionTitle}>{debateSectionProps.title}</h1>
//           <p className={styles.debateSectionSummary}>{debateSectionProps.summary}</p>
//       </div>
//   </div>
//   )
// }