import React, { useEffect, useState } from 'react'
import  styles from './NavBar.module.css';
import binaryLogo from './imgs/binaryLogo.png'
import {gapi} from 'gapi-script';
import { LoginPopup } from './Login';

const clientId = '1020258403267-qacp7l47fmp5a1669ejpgsm9lufs2kgt.apps.googleusercontent.com';

export interface NavBarProps {
    setLoginPopup: () => void;
}

const NavBar = (navBarProps: NavBarProps) => {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  useEffect(() => {
    function start() {
        gapi.client.init({
            clientId:clientId,
            scope:""
        })
    }

    gapi.load('client:auth2', start);
  })

  
  return (
    <div >
        <nav className={styles.navbar}>
          <a href='/' className={styles.navLink}>
            <img className={styles.binaryLogo} src={binaryLogo}/>
          </a> 
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/about' className={styles.navLink}>About</a>
            </li>
            <li onClick={removeActive}>
              <a href='/debateRequest' className={styles.navLink}>Request a debate</a>
            </li>
     
          </ul>
          <div className={styles.login}>
          <button className={styles.loginButton} onClick = {() => navBarProps.setLoginPopup()}>
            Start using
            </button> 
          </div>
        </nav>
    </div>
  );
}


export default NavBar;