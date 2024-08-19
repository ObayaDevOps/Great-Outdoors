import { Box, Spinner, Text, Center } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'


const imageGridImages =[

  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720008924/MG_2634-3-e1671000104768_k2zbhy.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101466/IMG_4045-scaled_umaqq6.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101623/IMG_9124-scaled_tvyhqg.jpg",
      width: 1000,
      height: 666,
      caption: "Great Outdoors",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101643/IMG_0685-scaled_hwn4m2.jpg",
    width: 1000,
    height: 666,
    caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101623/IMG_9124-scaled_tvyhqg.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101656/IMG_9127-1024x683_mtfxvr.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101663/IMG_4353-1024x683_wt2qsj.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101678/IMG_3959-scaled_jd1awh.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101689/IMG_9107-scaled_cbnbbk.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101728/A7300369-1024x683_cxdn75.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104893/IMG_9060_mtrnge.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104889/A7300790-1024x683_ifl3hn.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104883/A7300768-1024x683_qlsaig.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104874/MG_2065-1024x683_khthhc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104863/MG_1907-1024x683_agoyxy.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104854/IMG_3897-1024x683_kpibsc.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104851/IMG_3908-1024x683_suoh8v.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104842/A7300376-1024x683_uv82ns.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724104810/IMG_3701-scaled_agc8bi.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101810/A7300734-1024x645_xt0ed2.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101818/A7300337-1024x683_trpffp.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723823743/A7300820-1024x683_rh8gsj.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720103322/A7301110-1024x665_rxooji.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
},
{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720104864/A7301120-1024x683_ulqp5l.jpg",
  width: 1000,
  height: 666,
  caption: "Great Outdoors",
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


        <Box px={{base: 4, md: 12, lg: 64}} py={{base: 4, md: 12, lg: 20}}>
                <ImageGridPhotoGallery photos={imageGridImages} />
        </Box>

        <Box>
          <Footer />
        </Box> 
  
      </Box>      
    )
  }
