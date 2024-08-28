import React from 'react';
import {
  chakra,
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  useColorMode,
  Container,
  VStack,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';

import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'

  import NavBar from '../../components/navbar' 
  import Footer from '../../components/footer' 


//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed


const exhibitionDetails = [

  {
    roomName: 'Cabins',
    roomBeds: '1',
    roomBaths: '1',
    roomDescription: 'The room is a lovely wood cabin, surrounded by trees.' ,
    roomPrice: '230,000',
    roomPageLink: '/rest/cabins',
    roomPhoto: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg',

  },
  {
    roomName: 'Cottage',
    roomBeds: '1',
    roomBaths: '1',
    roomDescription: 'None',
    roomPrice: '300,000',
    roomPageLink: '/rest/cottage',
    roomPhoto: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg',

  },
  {
    roomName: 'Deluxe Room',
    roomBeds: '1',
    roomBaths: '1',
    roomDescription: 'The room is in a lovely brick, stone and wood cottage, surrounded by trees. It has a private patio with mesh that keeps bugs out, so you can stay out on the patio as long as you want in the evening without being bothered by bugs!',
    roomPrice: '200,000',
    roomPageLink: '/rest/deluxe-room',
    roomPhoto: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg',

  },
  {
    roomName: 'Cottage Double',
    roomBeds: '2',
    roomBaths: '1',
    roomDescription: 'None',
    roomPrice: '340,000',
    roomPageLink: '/rest/cottage-double-room',
    roomPhoto: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101654/IMG_9093-scaled_lb7gia.jpg',

  },

];



const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



function ExhibitionCard(props) {
  const { roomName, roomBeds,roomPhoto , roomBaths, roomDescription, roomPrice, roomPageLink } = props;

  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={roomPageLink} passHref>
              {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
                {/* <NextImage src={roomPhoto} layout='fill' ></NextImage> */}
                <Image
                  transform="scale(1.0)"
                  src={roomPhoto}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              {/* </Link> */}
              </NextLink>
            </Box>
            {/* <BlogTags tags={blogTags} marginTop="3" /> */}
            <Heading fontSize="2xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {roomName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {roomDescription}
            </Text>

          </Box>

  )

}


const RoomsListPage = () => {

  return (
    <Box       
    // bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101791/A7300733-1024x642_t1fd8f.jpg'}
    // bgSize="cover"
    // bgPosition="center"
    // bgAttachment="fixed" 
    
    >
        <Head>
          <title>Room List | Great Outdoors</title>
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


      
      
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} p={{base:8}}
      pt={44}
      >
            <chakra.h3
              fontWeight={"bold"}
              fontSize={20}
              textTransform={"uppercase"}
              color={"white"}
              fontFamily="bodyFont"
              align="center"
            >
              Rooms, Cabins & Cottages
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

                // bgGradient="linear(to-r, blackAlpha.800, #0e2a4e)"
                fontWeight="extrabold"
                transition="all .65s ease"
                _hover={{
                  transform: "scale(1.005)",
                  filter: "brightness(120%)",
                }}
                py={6}
              >
                Rest
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
              Find Calm in the Forest
            </chakra.h2>
          </Box>


          <Container
      maxW={{ base: "80%", md: "90%" }}
      py={4}
      minHeight={{ md: "110vh" }}
      // background="rgba(240,255,244,0.55)"
      bg="whiteAlpha.700"

      rounded="3xl"
      shadow="2xl"
      border={"1px"}
      borderColor={"white"}
      mt={{ base: "35vh", lg: "25vh" }}
    >        <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing={'20'}
            mt={16}
            mx={'auto'}>
            {exhibitionDetails.map((cardInfo, index) => (
              <ExhibitionCard {...cardInfo} index={index} key={index} />
            ))}
          </SimpleGrid>
          </Container>


      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default RoomsListPage
