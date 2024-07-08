import { Box, Spinner, Center, Text, Stack } from '@chakra-ui/react'
import Head from 'next/head'

import NavBar from '../components/navbar' 
import Footer from '../components/footer' 



export default function RetreatPage() {

    return (
      <Box bg={'blue.900'} >
      <Head>
        <title>Retreat | Great Outdoors</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />

        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />


        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      </Head>

        <Box>
          <NavBar />
        </Box>

        <Center minH={'55vh'} p={20} >
          <Text fontFamily='navBarFont' fontSize='6xl' textColor='white'>
            Retreats
          </Text>
        </Center>

        <Box bgColor={'white'} m={20} rounded='2xl' shadow='xl' >
          <Stack>

          </Stack>
        </Box>


        <Box>
          <Footer />
        </Box> 
  
      </Box>      
    )
  }
