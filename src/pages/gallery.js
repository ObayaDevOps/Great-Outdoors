import { motion } from 'framer-motion';
import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Center,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'

import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'

import Head from 'next/head';
import Image from 'next/image'

import client from '../sanity/lib/client.js'
import imageUrlBuilder from '@sanity/image-url';
import {getImageDimensions} from '@sanity/asset-utils'




import NavBar from '../components/navbar' 
import Footer from '../components/footer' 

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export async function getStaticProps() {
  const galleryPageContent = await client.fetch(`
  *[_type == "galleryPage"]{
    ...,
        images[] 
          {
        "url": image.asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    }`);

  return {
    props: {
      galleryPageContent,
    },
    revalidate: 10, //In seconds
  };
}

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}



export default function GalleryPage(props) {
  const galleryPageContent  = props.galleryPageContent[0] || [];
  
  const imageUrls = galleryPageContent.galleryImages.map((image) => {
    const { width, height } = getImageDimensions(image);
    return {
      src: urlFor(image).url(),
      width: width,
      height: height,
      caption: image.caption || "Great Outdoors"
    };
  });


  return (
    <Box 
    bgImage={
      'https://cdn.sanity.io/images/y563wtf6/production/35a3e3596bdce55f18130641113e1878c77eaffd-1920x660.jpg'
    }
    bgSize="cover"
    bgRepeat='no-repeat'
    bgPosition="center"
    bgAttachment="fixed"
    overflowX='hidden'
    minH={'80dvh'}
    >
    <Head>
      <title>Gallery | Great Outdoors</title>
      <meta name="description" content="Retreat.Rest.Rejuvenate" />

      <meta property="og:title" content="Great Outdoors Kalanamu" />
      <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
      <meta property="og:image" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
      <meta property="og:image:secure_url" content="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
      <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
      <meta property="og:type" content="website" />


      <link rel="icon" href="https://cdn.sanity.io/images/y563wtf6/production/641970a92ad5743a146ec13fa1baef3e15a014f6-800x520.png" />
    </Head>

      <Box>
        <NavBar />
      </Box>

      <Box
        pt={{ base: 32, md: 44 }}

      >

        <HeadingSection />

        <Section1 content={imageUrls} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

const HeadingSection = () => {
  return (
    <MotionBox 
      width={{ base: "full", sm: "lg", lg: "xl" }} 
      margin={"auto"} 
      p={{base:8}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <MotionText
        as={chakra.h3}
        fontWeight={"bold"}
        fontSize={20}
        textTransform={"uppercase"}
        color={"white"}
        fontFamily="bodyFont"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        ABOUT
      </MotionText>
      <MotionHeading
        as={"h1"}
        mb={{ base: 2, md: 10 }}
        fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
        minHeight={"1vh"}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="purple.900"
        textAlign="center"
        fontFamily={'navBarFont'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <MotionText
          display={{
            base: "block",
          }}
          w="full"
          bgClip="text"
          color={"white"}
          fontWeight="extrabold"
          _hover={{
            transform: "scale(1.005)",
            filter: "brightness(120%)",
          }}
          py={6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Gallery
        </MotionText>
      </MotionHeading>
      <MotionText
        as={chakra.h2}
        margin={"auto"}
        width={"100%"}
        fontWeight={"medium"}
        fontSize={"lg"}
        mt={{ base: -2, md: -8, lg: -8 }}
        fontFamily={"bodyFont"}
        color={"white"}
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        See scenes from around our expansive grounds 
      </MotionText>
    </MotionBox>
  )
}

//Make this into a Carousel
const Section1 = (props) => {
  console.log('props section 1', props)
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <Container
        maxW={{ base: "95%", md: "90%" }}
        p={{base: 6, md: 12, lg: 16}}
        minHeight={{ base:'100vh', md: "110vh" }}
        bg="white"
        rounded="3xl"
        shadow="2xl"
        border={"1px"}
        borderColor={"white"}
        mt={{ base: "10vh", lg: "25vh" }}
      >
        <Box>
          <ImageGridPhotoGallery photos={props.content} />
        </Box>
      </Container>
    </MotionBox>
  )
} 

const Section1Content = () => {
  return (
    <Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:2, md: 2, lg: 2, xl: 2}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}
        >
          Cottages
        </Text>
      </Box>

      <Box>
        <Text 
        textColor='#cf2e2e' fontFamily={'navBarFont'} 
        fontSize={{base:'sm', md: 'xl'}}
        pb={6}
        >
        Price from UGX 200,000 Night
        </Text>
      </Box>

      <Box>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        The room is in a lovely brick, stone and wood cottage, surrounded by trees. 
        It has a private patio with mesh that keeps bugs out,
         so you can stay out on the patio as long as you want in the evening without being bothered by bugs!
        </Text>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'} fontSize={{base:'sm', md: 'lg'}} >
        The patio looks out on a front garden with avocado and mango trees.
         There is a common area / lobby that is beautifully decorated with paintings of common birds in the area.
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
        The room comes with a mosquito net as well, for extra protection. The sleeping space is separated 
        from the showers and toilet by a door for privacy. It is close to the wide veranda with tables, 
        which makes for good work space.
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Amenities
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 4, md: 8, lg: 16 }}
          py={2}
          // mt={4}
          mx={'auto'}>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}   textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
          <Box>
            <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            High speed WiFi
            </Text>
          </Box>
        </SimpleGrid>



      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          House Rules
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={'16'}
          py={2}
          // mt={4}
          // mx={'auto'}
          
          >
          <Box textColor={'gray.600'}>
            <Text pb={4}  fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            CHECK IN
            </Text>
            <VStack >
              <Text textAlign={'left'}>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
            </VStack>
          </Box>
          <Box textColor={'gray.600'}>
            <Text pb={4}  fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
            CHECK OUT
            </Text>
            <VStack>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
              <Text>Check-in from 12:00 PM – anytime</Text>
            </VStack>
          </Box>

        </SimpleGrid>



      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:6, md: 6, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Special Check-in Instructions
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        List any Special Check-in Instructions here
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Children and Extra Beds
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Youngsters are welcome Kids stay free! Youngsters stay free when utilizing existing sheet material; kids may not be qualified for free breakfast Rollaway/additional beds are accessible for UGX 50,000 each day
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Pets
        </Text>

        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Not Allowed
        </Text>
      </Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:2, md: 2, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Cancellations
        </Text>

        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        Please email for cancellation policy
        </Text>



      </Box>


    </Box>   
  )
}




