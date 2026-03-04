import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { Box, Show} from '@chakra-ui/react'

import NextLink from 'next/link'

import FloatingReservationsComponent from '../components/landingPage/floatingReservationsComponent'
import AboutUsComponent from '../components/landingPage/AboutUsComponent'
import AmenitiesComponent from '../components/landingPage/AmenitiesComponent'
import CorporateComponent from '../components/landingPage/CorporateComponent'
import EatAndDrinkComponent from '../components/landingPage/EatAndDrinkComponent'
import ForestComponent from '../components/landingPage/ForestComponent'
import TestimonialsComponent from '../components/landingPage/TestimonialsComponent'
import OffersComponent from '../components/landingPage/OffersComponent'
import LandingPageImageSlider from '../components/landingPage/LandingPageImageSlider'
import Carousel from '../components/carousel3'
import ForestComponent2 from '../components/landingPage/ForestComponent2'
import AboutUsComponent2 from '../components/landingPage/AboutUsComponent2'
import EatAndDrinkComponent2 from '../components/landingPage/EatAndDrinkComponent2'
import Carousel2 from '../components/carousel2'

const BookingsWidget = dynamic(() => import('../components/bookingsWidget'), { ssr: false })

import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import client from '../../src/sanity/lib/client'


export async function getStaticProps() {
  const landingPageContent = await client.fetch(`
  *[_type == "landingPage"]{
    ...,
        images[] 
          {
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    }`);

  return {
    props: {
      landingPageContent,
    },
    revalidate: 10, //In seconds
  };
}




const slides =[
  {   
      img: "https://cdn.sanity.io/images/y563wtf6/production/f2df4a9d73ef620357e06dff709bc5de4fafe9ed-2560x1707.jpg",
      width: 770,
      height: 300,
      caption: "Great Outdoors",
      label: "At Home in Nature",

  },
  {   
    img: "https://cdn.sanity.io/images/y563wtf6/production/eb731f11d3d652d46dce1693378769069bb0fd4a-2048x1248.jpg",
    width: 1024,
    height: 683,
    caption: "Great Outdoors",
    label: "Cozy Cottages",
  
  },
  {   
    img: "https://cdn.sanity.io/images/y563wtf6/production/5137b34e2b874e50e5e934b4a2941860377e0ba5-2021x1267.jpg",
    width: 1024,
    height: 683,
    caption: "Great Outdoors",
    label: "Corporate Retreats",
  
  },
  
  
] 

export default function Home(props) {
  console.log('props')
  console.log(props)

  return (
    <Box>
      <Head>
        <title>Great Outdoors Kalanamu - Retreat.Rest.Rejuvenate</title>
        <meta name="description" content="Retreat.Rest.Rejuvenate" />
        <meta property="og:title" content="Great Outdoors Kalanamu" />
        <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
        <meta property="og:image" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
        <meta property="og:image:secure_url" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
        <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
      
        <link href="https://reservations.reserveport.com/static/css/app.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.reserveport.com/media/api5/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.css" />

      </Head>

      <Box>
        <NavBar />
      </Box>
      
      <Box 
      bg={'whiteAlpha'} 
        backgroundSize={'cover'}
        bgRepeat={'no-repeat'}
      >
        <Box>
          <Carousel2  slides={slides}/>
          {/* <search-availability id="1687"></search-availability> */}
          <BookingsWidget />
          {/* <Box
            width={{ base: '80%', md: '76%' }} // Responsive width
            margin="0 auto"
            marginTop={{ base: '0rem', md: '-10rem' }} // Responsive margin
            position="absolute"
            left="0"
            right="0"
            background="none"
            display="block"
            rounded={'xl'}
          >
          <search-availability id="1687" clientemail="true"></search-availability>
        </Box>         */}

          <AboutUsComponent2  pageContent={props.landingPageContent}/>         
          <CorporateComponent  pageContent={props.landingPageContent}/>
          <EatAndDrinkComponent2 pageContent={props.landingPageContent}/>
          <AmenitiesComponent  pageContent={props.landingPageContent}/>
          <ForestComponent2  pageContent={props.landingPageContent}/>
        </Box>

              
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
      
  )
}
