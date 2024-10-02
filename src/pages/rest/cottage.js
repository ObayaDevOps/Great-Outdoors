import {
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

import * as Icons from "react-icons/fa";


import Head from 'next/head';
import Image from 'next/image'

import Carousel from '../../components/carousel3'

import NavBar from '../../components/navbar' 
import Footer from '../../components/footer' 
import Link from 'next/link'

import client from '../../../src/sanity/lib/client'


export async function getStaticProps() {
  const cottagePageContent = await client.fetch(`
  *[_type == "cottagePage"]{
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
      cottagePageContent,
    },
    revalidate: 10, //In seconds
  };
}


export default function cottagesPage(props) {
  const cottagePageContent  = props.cottagePageContent[0] || [];

  console.log('cottagePageContent')

  console.log(props)

  return (
    <Box>
    <Head>
      <title>cottages | Great Outdoors</title>
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
        pt={{ base: 32, md: 44 }}
        bg={'#0b1722'}
      >

        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} p={{base:8}}>
          <chakra.h3
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"white"}
            fontFamily="bodyFont"
            align="center"
          >
            ACCOMMODATION
          </chakra.h3>
          <Heading
            as={"h1"}
            mb={{ base: 2, md: 10 }}
            fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
            minHeight={"1vh"}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color="purple.900"
            textAlign="center"
            fontFamily={'navBarFont'}             >
            <Text
              display={{
                base: "block",
                // lg: "inline",
              }}
              w="full"
              bgClip="text"
              color={"white"}
              fontWeight="extrabold"
              transition="all .65s ease"
              _hover={{
                transform: "scale(1.005)",
                filter: "brightness(120%)",
              }}
              py={6}
            >
              
              {cottagePageContent.roomTitle1}
            </Text>
          </Heading>
          <chakra.h2
            margin={"auto"}
            width={"100%"}
            fontWeight={"medium"}
            fontSize={"lg"}
            color={useColorModeValue("gray.900", "gray.400")}
            mt={{ base: -2, md: -8, lg: -8 }}
            fontFamily={"bodyFont"}
            color={"white"}

            align="center"
          >
            {cottagePageContent.roomSubTitle1}
            
          </chakra.h2>
        </Box>


        <Section1 content={cottagePageContent} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}


//Make this into a Carousel
const Section1 = (props) => {
  console.log('Hej');
  console.log(props.content);


  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    // py={4}
    p={{base: 6, md: 12, lg: 16}}
    minHeight={{ base:'100vh', md: "110vh" }}
    bg="white"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "10vh", lg: "25vh" }}
  >
      <Carousel slides={props.content.images} />
      <Section1Content content={props.content} />
    </Container>
  )
} 

const Section1Content = (props) => {
  return (
    <Box>

      <Box>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}
        >
          
          {props.content.roomTitle2}
        </Text>
      </Box>

      <Box>
        <Text 
        textColor='#cf2e2e' fontFamily={'bodyFont'} 
        fontSize={{base:'sm', md: 'xl'}}
        pb={4}
        >
        
        {props.content.priceSubtitle}
        </Text>
      </Box>

      <Flex pb={8}>
        <Button  colorScheme={'red'} size={{base: 'sm', md: 'lg'}} fontFamily='bodyFont'>
          <Link href='/reservations' fontSize={{base: '7px', md: 'sm'}} >
          Book Now
          </Link>
        </Button>
      </Flex>

      <Box pb={{base: 12, md: 16}}>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
         
         {props.content.paragraph1}
        </Text>
        <Text pb={4} textColor={'gray.600'} fontFamily={'bodyFont'} fontSize={{base:'sm', md: 'lg'}} >
        
         {props.content.paragraph2}
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}}>
        
        {props.content.paragraph3}
        </Text>
      </Box>

      <Divider />

      <Box pt={12}>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        py={{base:2, md: 2, lg: 4, xl: 4}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'xl' ,lg: 'xl', xl:'3xl'}}
        >
          Amenities
        </Text>

          <Box ml={4} textColor={'#0e2a4e'} >
            <ul>
              {props.content.amenities.map((rule, index) => (
                <li key={index}>

                  <Text  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >

                  {rule}
                  </Text>
                  
                  </li>
              ))}
            </ul>
          </Box>

      </Box>

      <Box py={8}>
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
          >
          <Box textColor={'gray.600'} ml={2}  >
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
              CHECK IN
            </Text>
            <ul>
              {props.content.houseRules.checkIn.map((rule, index) => (
                <li key={index}>
                  <Text textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
                  {rule}
                  </Text>
                  </li>
              ))}
            </ul>
          </Box>
          <Box textColor={'gray.600'}>
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
        CHECK OUT
            </Text>

            <ul>              
              {props.content.houseRules.checkOut.map((rule, index) => (
                <li key={index}>
                  <Text textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
                  {rule}
                  </Text>
                  </li>
              ))}
            </ul>
          </Box>
        </SimpleGrid>
      </Box>

      <Box pb={6}>
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pt={{base:6, md: 6, lg: 6, xl: 6}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'lg' ,lg: 'xl', xl:'3xl'}}
        >
          Special Check-in Instructions
        </Text>
        <Text pb={4}  textColor={'gray.600'} fontFamily={'bodyFont'}  fontSize={{base:'sm', md: 'lg'}} >
        {props.content.specialInstructions}
        </Text>
      </Box>

      <Box pb={4}>
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
        
        {props.content.childrenAndExtraBeds}
        </Text>
      </Box>

      <Box pb={4}>
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
        
        {props.content.petPolicy}
        </Text>
      </Box>

      <Box pb={4}>
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
        {props.content.cancellationPolicy}
        </Text>
      </Box>

      <Box py={4}>
      <Button
        maxW={{base:'2xl', md:'6xl'}}
        as="a"
        colorScheme="red"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        rounded='lg'
        href='/reservations'
        fontFamily='bodyFont'

        w={{
            base: "full",
            sm: "full",
        }}
        mb={{
            base: 2,
            sm: 0,
        }}
        size="lg"
        cursor="pointer"
        >                        
          Book Now
        </Button>
      </Box>
    </Box>   
  )
}




