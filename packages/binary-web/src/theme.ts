import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, serif'
  },
  initialColorMode: 'light',
  useSystemColorMode: true
})

export default theme
