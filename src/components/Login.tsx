import React, { Dispatch, SetStateAction, useState } from 'react';
import {GoogleLogin} from 'react-google-login';
import styles from './Login.module.css';
import { Modal } from 'react-bootstrap';
import TwitterLogin from "react-twitter-login";
// TODO: SETUP CLIENT ID PROPERLY BEFORE LAUNCH!!!
const googleClientId = '1020258403267-qacp7l47fmp5a1669ejpgsm9lufs2kgt.apps.googleusercontent.com';
const twitterClientId = 'YjlENWwtLTNFTm4wdlY0a04wLU06MTpjaQ';
const twitterClientSecret = 'wgeeFAKLfqEeSpJJVtz11bpmAaf6R2ToAcKaRBHG4mWT6-BRyj';

const onSuccess = () => {
    console.log("Login success.");
}

const onFailure = () => {
    console.log("Login failed.");
}

export interface LoginPopupProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

export function LoginPopup(loginPopupProps: LoginPopupProps) {
   return (
        <Modal  
            show={loginPopupProps.show} onHide={() =>loginPopupProps.setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login with a social media account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={styles.login}>
            <GoogleLogin clientId={googleClientId}
            buttonText = 'Login with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            >
            </GoogleLogin> 
        </div>
        <div className={styles.login}>
            <TwitterLogin
                consumerKey={twitterClientId}
                consumerSecret={twitterClientSecret}
                authCallback={() =>{}}
            />
        </div>
        </Modal.Body>
      </Modal>
    ) ;
}
