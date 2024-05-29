import Head from 'next/head'
import Image from 'next/image'

import { Box} from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import SideBar from '../components/sidebar'

import NextLink from 'next/link'


export default function Home() {
  return (
    <Box >
      <Head>
        <title>Great Outdoors Kalanamu - Retreat.Rest.Rejuvenate</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />

        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />


        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      </Head>

    
      
      <Box bg={'red.600'} minH={'98vh'} >

        <Box>
          <SideBar />
        </Box>


        <Box position='relative' >
        {/* <AbsoluteCenter mt={{base: 40, md: 0}}> */}
        <Box position='absolute' top='80%' left='50%'
          transform={{base:'translate(-50%, 15vh)', md:'translate(-50%, 20vh)'}}  >
          <NextLink href='/about'>
            <Image
              // src={getCloudinaryImage('yujo9.svg')} 
              src={getCloudinaryImage('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg')} 
              
              alt="Great Outdoors Brand Logo"
              width={250}
              height= {250}
              priority={true}
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg')}
              />
              
            </NextLink>
            </Box>
        {/* </AbsoluteCenter> */}
        </Box>
        
      </Box>

    </Box>
  )
}
