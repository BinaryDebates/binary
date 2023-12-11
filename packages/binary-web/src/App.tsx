import About from './About'
import { LoginPopup } from './Login'
import NavBar from './NavBar'
import { Debates } from './components/Debates/Debates'
import { DefaultDebateProfile } from './components/Debates/DebateProfile/DebateProfile'
import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultUserSettings } from 'components/Users/UserSettings'

export const App = (): React.JSX.Element => {
  const [loginPopup, setLoginPopup] = useState(false)

  return (
    <ChakraProvider >
        <Router>
            <NavBar
              setLoginPopup={() => {
                setLoginPopup(true)
              }}
              items={[
                { name: 'About', link: '/about' },
                { name: 'Request a Debate', link: 'https://forms.gle/GS2hrsZ12BstKHHh7' }
              ]}
            />
            <Routes>
                <Route path="/" element={<Debates/>}/>
                <Route path="/about" element={<About/>} />
                <Route path='/debateProfile' element={<DefaultDebateProfile/>} />
                <Route path='/settings' element={<DefaultUserSettings />} />
            </Routes>
            <LoginPopup show={loginPopup} setShow={setLoginPopup}/>
        </Router>
    </ChakraProvider>
  )
}
