import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

//fonts - https://github.com/chakra-ui/chakra-ui/discussions/7235
import { Permanent_Marker, Space_Mono } from 'next/font/google'
import Footer from '../components/footer' 

import NavBar from '../components/navbar' 



import { extendTheme } from '@chakra-ui/react'

const headingFont = Permanent_Marker({ subsets: [ 'latin' ], weight: ['400'],display: 'swap', adjustFontFallback: false  })
const navBarFont = Space_Mono({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })
// const bodyFont = Poor_Story({ subsets: [ 'latin' ], weight: ['400'], display: 'swap', adjustFontFallback: false })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    // bodyFont: bodyFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>

      )
}
