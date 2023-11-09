import About from "./About";
import { LoginPopup } from "./Login";
import NavBar from "./NavBar";
import { DebateRequests } from "./DebateRequests/DebateRequests";
import styles from './App.module.css';
import { DebateProfile } from "./DebateProfile/DebateProfile";
import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

export const App =() => {
    const [loginPopup, setLoginPopup] = useState(false);
    
    return(
    <div className = {styles.app}>
    <Router>
      <NavBar setLoginPopup={() =>{
        setLoginPopup(true)
      }}/>
      <Routes>
          <Route path="/"  element={<DebateRequests/>}/>
          <Route path="/about" element={<About/>} />
          <Route path='/debateProfile' element={<DebateProfile/>} />
      </Routes>
      <LoginPopup show={loginPopup} setShow={setLoginPopup}/>
  </Router>
    </div>
  );
}