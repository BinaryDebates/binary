import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
   <App/>
  </React.StrictMode>
)
