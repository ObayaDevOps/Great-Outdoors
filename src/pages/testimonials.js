import { Box, Spinner } from '@chakra-ui/react'
import Head from 'next/head'


export default function TestimonialsPage() {

    return (
      <Box bg={'red.600'} >
      <Head>
        <title>Testimonials | Great Outdoors</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />

        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
        <meta property="og:image:secure_url" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />


        <link rel="icon" href="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
      </Head>

        <Box mb='-10'>
        Testimonials !
        </Box>
  
      </Box>      
    )
  }
