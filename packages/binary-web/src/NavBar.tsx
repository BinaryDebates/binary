import React, { useEffect } from 'react'
// import styles from './NavBar.module.css'
import binaryLogo from './imgs/binaryLogo.png'
import { gapi } from 'gapi-script'
import { Avatar, Center, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'

const clientId = '1020258403267-qacp7l47fmp5a1669ejpgsm9lufs2kgt.apps.googleusercontent.com'

export interface NavBarItem {
  name: string
  link: string
}

export interface NavBarProps {
  setLoginPopup: () => void
  items: NavBarItem[]
}

const NavBarElement = ({ name, link }: NavBarItem): React.JSX.Element => {
  return (
    <Center>
    <Link href={link}>
      <Text fontSize='16px'>{name}</Text>
    </Link>
    </Center>
  )
}

const NavBar = ({ setLoginPopup, items }: NavBarProps): React.JSX.Element => {
  useEffect(() => {
    function start (): void {
      gapi.client.init({
        clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
   <Flex gap='32px' alignItems='center' padding='8px'>
      <Link href='/'>
        <Image src={binaryLogo} h='32px'/>
      </Link>
      {items.map((item) => {
        return <NavBarElement {...item} key={item.name} />
      })}
      <Spacer />
      <Link href='/settings'>
        <Avatar />
      </Link>
   </Flex>
  )
  // <div >
  //     <nav className={styles.navbar}>
  //       <a href='/' className={styles.navLink}>
  //         <img className={styles.binaryLogo} alt={'Binary Logo'} src={binaryLogo}/>
  //       </a>
  //       <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
  //         <li onClick={removeActive}>
  //           <a href='/about' className={styles.navLink}>About</a>
  //         </li>
  //         <li onClick={removeActive}>
  //           <a href='https://forms.gle/GS2hrsZ12BstKHHh7' className={styles.navLink}>Request a debate</a>
  //         </li>

  //       </ul>
  //       <div className={styles.login}>
  //       <button className={styles.loginButton} onClick = {() => { navBarProps.setLoginPopup() }}>
  //         Start using
  //         </button>
  //       </div>
  //     </nav>
  // </div>
}

export default NavBar
