import About from './About'
import { LoginPopup } from './Login'
import NavBar from './NavBar'
import { Debates } from './components/Debates/Debates'
import styles from './App.module.css'
import { DebateProfile } from './components/Debates/DebateProfile/DebateProfile'
import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

export const App = (): React.JSX.Element => {
  const [loginPopup, setLoginPopup] = useState(false)

  return (
      <ChakraProvider>
    <div className = {styles.app}>
    <Router>
      <NavBar setLoginPopup={() => {
        setLoginPopup(true)
      }}/>
      <Routes>
          <Route path="/" element={<Debates/>}/>
          <Route path="/about" element={<About/>} />
          <Route path='/debateProfile' element={<DebateProfile/>} />
      </Routes>
      <LoginPopup show={loginPopup} setShow={setLoginPopup}/>
  </Router>
    </div>
    </ChakraProvider>
  )
}
