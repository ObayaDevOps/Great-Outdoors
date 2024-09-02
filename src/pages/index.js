import Head from 'next/head'
import Image from 'next/image'

import { Box} from '@chakra-ui/react'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../util/cloudinaryImageRetreival';

import NextLink from 'next/link'

import FloatingReservationsComponent from '../components/landingPage/floatingReservationsComponent'
import AboutUsComponent from '../components/landingPage/AboutUsComponent'
import AmenitiesComponent from '../components/landingPage/AmenitiesComponent'
import EatAndDrinkComponent from '../components/landingPage/EatAndDrinkComponent'
import ForestComponent from '../components/landingPage/ForestComponent'
import TestimonialsComponent from '../components/landingPage/TestimonialsComponent'
import OffersComponent from '../components/landingPage/OffersComponent'
import LandingPageImageSlider from '../components/landingPage/LandingPageImageSlider'
import Carousel from '../components/carousel'
import ForestComponent2 from '../components/landingPage/ForestComponent2'
import AboutUsComponent2 from '../components/landingPage/AboutUsComponent2'
import EatAndDrinkComponent2 from '../components/landingPage/EatAndDrinkComponent2'
import Carousel2 from '../components/carousel2'
import BookingsWidget from '../components/bookingsWidget'

import NavBar from '../components/navbar' 
import Footer from '../components/footer' 


export default function Home() {
  return (
    <Box>
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

      <Box>
        <NavBar />
      </Box>
      
      <Box 
      bg={'whiteAlpha'} 
        // minH={'100vh'} 
        // backgroundSize={'100%'}
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
        // backgroundImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg'}        
      >
        <Box>
          <LandingPageImageSlider />

          < BookingsWidget />
          {/* <Carousel /> */}
          {/* <Carousel2 /> */}
          {/* <FloatingReservationsComponent /> */}
          {/* <AboutUsComponent /> */}
          <AboutUsComponent2 />
          {/* <EatAndDrinkComponent /> */}
          <EatAndDrinkComponent2 />
          <AmenitiesComponent />
          {/* <ForestComponent /> */}
          <ForestComponent2 />
          {/* <TestimonialsComponent /> */}
          <OffersComponent />
        </Box>


              
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
      
  )
}
