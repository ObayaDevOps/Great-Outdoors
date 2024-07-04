import { Box, Spinner, Text, Center } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'


const imageGridImages =[

  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236519/WhatsApp_Image_2024-06-24_at_16.37.47_spjob2.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_3_h2dfyi.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_1_iydamo.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236509/WhatsApp_Image_2024-06-24_at_16.37.48_oepx0a.jpg",
      width: 854,
      height: 1280,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.49_2_hap7cd.jpg",
      width: 1280,
      height: 1024,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236510/WhatsApp_Image_2024-06-24_at_16.37.49_pdadpr.jpg",
      width: 1024,
      height: 1280,
      caption: "Henry Robinson Lela Pit",
  },

{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719235391/WhatsApp_Image_2024-06-24_at_15.23.27_f1iavz.jpg",
  width: 1080,
  height: 608,
  caption: "Henry Robinson Lela Pit",
  },
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719235391/WhatsApp_Image_2024-06-24_at_15.23.29_hbpm28.jpg",
  width: 1080,
  height: 608,
  caption: "Henry Robinson Lela Pit",
  },

] 


export default function GalleryPage() {

    return (
      <Box minH='100vh' bg='blue.900'>
        <Head>
          <title>Gallery | Great Outdoors</title>
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

        <Center minH={'55vh'} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720099212/IMG_844443-2_lvd6bz.jpg'} p={20} >
          <Text fontFamily='navBarFont' fontSize='6xl' textColor='white'>
            Gallery
          </Text>
        </Center>


        <Box px={{base: 4, md: 12, lg: 64}} py={{base: 4, md: 12, lg: 2}}>
                <ImageGridPhotoGallery photos={imageGridImages} />
        </Box>

        <Box>
          <Footer />
        </Box> 
  
      </Box>      
    )
  }
