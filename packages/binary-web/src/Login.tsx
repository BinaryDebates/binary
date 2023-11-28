import React, { type Dispatch, type SetStateAction } from 'react'
import styles from './Login.module.css'
import { Modal } from 'react-bootstrap'
import TwitterLogin from 'react-twitter-login'
// import {GoogleLogin} from 'react-google-login';
// import GoogleButton from 'react-google-button';

// TODO: SETUP CLIENT ID PROPERLY BEFORE LAUNCH!!!
// const googleClientId = '1020258403267-qacp7l47fmp5a1669ejpgsm9lufs2kgt.apps.googleusercontent.com';
const twitterClientId = 'YjlENWwtLTNFTm4wdlY0a04wLU06MTpjaQ'
const twitterClientSecret = 'wgeeFAKLfqEeSpJJVtz11bpmAaf6R2ToAcKaRBHG4mWT6-BRyj'

// const onSuccess = () => {
//     console.log("Login success.");
// }

// const onFailure = () => {
//     console.log("Login failed.");
// }

export interface LoginPopupProps {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export function LoginPopup (loginPopupProps: LoginPopupProps): React.JSX.Element {
  return (
        <Modal
            show={loginPopupProps.show} onHide={() => { loginPopupProps.setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Login with a social media account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={styles.login}>
            TODO: fixme
            {/* <GoogleLogin className={styles.googleLossgin} clientId={googleClientId}
            buttonText = 'Sign in with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={renderProps => (
                <GoogleButton style={{
                    borderStyle: 'solid',
                    borderColor: 'lightgray',
                    alignItems:'center',
                    width:'300px',
                    fontSize: '16px',
                    backgroundColor:'white',
                    height: '52px',
                    boxShadow:'unset',
                    color:'gray',
                    display:'flex',
                    justifyContent:'center',
                    borderRadius:'8px',
                }} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
              )}
            >
            </GoogleLogin>  */}
        </div>
        <div className={styles.login}>
            <TwitterLogin
                consumerKey={twitterClientId}
                consumerSecret={twitterClientSecret}
                authCallback={() => {}}
            />
        </div>
        </Modal.Body>
      </Modal>
  )
}
