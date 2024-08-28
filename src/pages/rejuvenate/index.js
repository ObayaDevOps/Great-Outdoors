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
  
  import NavBar from '../components/navbar' 
  import Footer from '../components/footer' 
  
  
  
  export default function RetreatPage() {
    return (
      <Box>
        <Head>
          <title>Retreat | Great Outdoors</title>
          <meta name="description" content="Retreat.Rest.Rejuvenate" />

          <meta property="og:title" content="Great Outdoors Kalanamu" />
          <meta
            property="og:description"
            content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
          />
          <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
          <meta property="og:type" content="website" />

          <link
            rel="icon"
            href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png"
          />
        </Head>

        <Box>
          <NavBar />
        </Box>

        <Box
          py={{ base: 28, md: 44 }}
          // bgGradient='linear(to-br, #0e2a4e, whiteAlpha.100)'
          // bg={'#0e2a4e'}
          bg={'#0b1722'}
          // bgImage={
          //   "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170783/IMG_2432-2-scaled-e1671037067747_xsovzl.jpg"
          // }
          bgSize="cover"
          bgPosition="center"
          bgAttachment="fixed"
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
              Corporate Packages
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
                Retreats
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
              Relax, enjoy get-aways with your colleagues, friends, and
              reconnect.
            </chakra.h2>
          </Box>

          <Section1 />

          <Section2 />

          <Section3 />


          {/* <Container
            maxW={{ base: "80%", md: "90%" }}
            py={4}
            minHeight={{ md: "110vh" }}
            // background="rgba(240,255,244,0.55)"
            // bg="whiteAlpha.700"
                      bgImage={
            "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170783/IMG_2432-2-scaled-e1671037067747_xsovzl.jpg"
          }
          bgSize="cover"
          bgPosition="center"
          bgAttachment="fixed"
            rounded="3xl"
            shadow="2xl"
            border={"1px"}
            borderColor={"white"}
            mt={{ base: "35vh", lg: "25vh" }}
          >
            <Flex
              textAlign={"center"}
              pt={0}
              justifyContent={"center"}
              direction={"column"}
              width={"full"}
              overflow={"hidden"}
            >
              <GetAwayAndRetreatContent />

            </Flex>
          </Container> */}

        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>
    );
  }
  
  const Section1 = () => {


    return (
      <Container
      maxW={{ base: "80%", md: "90%" }}
      py={4}
      minHeight={{ md: "110vh" }}
      // background="rgba(240,255,244,0.55)"
      // bg="whiteAlpha.700"
      bgImage={
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170783/IMG_2432-2-scaled-e1671037067747_xsovzl.jpg"
    }
    bgSize="cover"
    bgPosition="center"
    bgAttachment="fixed"
      rounded="3xl"
      shadow="2xl"
      border={"1px"}
      borderColor={"white"}
      mt={{ base: "35vh", lg: "25vh" }}
    >
      <Flex
        textAlign={"center"}
        pt={0}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <Section1Content />

      </Flex>
    </Container>



    )
  } 

  const Section2 = () => {


    return (
      <Container
      maxW={{ base: "80%", md: "90%" }}
      py={4}
      minHeight={{ md: "110vh" }}
      // background="rgba(240,255,244,0.55)"
      // bg="whiteAlpha.700"
                bgImage={
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg"
    }
    bgSize="cover"
    bgPosition="center"
    bgAttachment="fixed"
      rounded="3xl"
      shadow="2xl"
      border={"1px"}
      borderColor={"white"}
      mt={{ base: "35vh", lg: "25vh" }}
    >
      <Flex
        textAlign={"center"}
        pt={0}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <Section2Content />


      </Flex>
    </Container>



    )
  } 

  const Section3 = () => {


    return (
      <Container
      maxW={{ base: "80%", md: "90%" }}
      py={4}
      minHeight={{ md: "110vh" }}
      // background="rgba(240,255,244,0.55)"
      // bg="whiteAlpha.700"
                bgImage={
      "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170785/IMG_2498-2-scaled-e1671048069683_vfr5dv.jpg"
    }
    bgSize="cover"
    bgPosition="center"
    bgAttachment="fixed"
      rounded="3xl"
      shadow="2xl"
      border={"1px"}
      borderColor={"white"}
      mt={{ base: "35vh", lg: "25vh" }}
    >
      <Flex
        textAlign={"center"}
        pt={0}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
      >
        <Section3Content />

      </Flex>
    </Container>



    )
  } 

  const Section1Content = () => {
    return (
      <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
      <Box 
      bg={'whiteAlpha.900'} 
      border={'2px'}
      borderColor='white'
      shadow={'xl'}

      maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
      p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
      pt={{base: 8,  md: 12, xl: 24}}>

      <Box p={{base: 4, md: 4, lg: 0}}>
          <HStack mt={{base:6,  md:2}}>
              <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
          <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
          GET-AWAY & RETREAT
          </Text>
          </HStack>

          <Text  fontFamily={'navBarFont'} 
          letterSpacing={'1px'} 
          pb={{base:8, md: 4, lg: 4, xl: 8}} 
          lineHeight={{lg: '55px' ,xl:'55px'}} 
          // textColor='white'
          textColor='#0e2a4e'
          textAlign={'left'}
          fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
          Take a break from the office.
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            The Great Outdoors is where people come for serene getaways, unforgettable weekends. Relax, 
            enjoy corporate retreats, and reconnect.
          </Text>
          <Text 
          // textColor='white'
          textColor='#0e2a4e'

          // textColor='blue.800'
          fontFamily={'bodyFont'}
          textAlign={'left'}

          fontSize='lg'>
            The well-designed cottages, fully in harmony with nature (made from and of the forest!), have modern 
            comforts and are nestled among the trees, making the resort the ideal retreat for nature lovers.
          </Text>

          <Text 
          textColor='#cf2e2e'
          // textColor='#0e2a4e'

          // textColor='blue.800'
          textAlign={'left'}
          pt={6}

          fontFamily={'bodyFont'} fontSize='lg'>
            Open Daily: 7:00pm - 11:00pm
          </Text>

          <Box py={{base:10, md: 6}} justify={'left'}>
          <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
              Contact to Book
          </Button>
          </Box>
          </Box>
      </Box>

      </HStack>      
    )
  }
  

  const Section2Content = () => {
    return (
      <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
      <Box 
      bg={'whiteAlpha.900'} 
      border={'2px'}
      borderColor='white'
      shadow={'xl'}

      maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
      p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
      pt={{base: 8,  md: 12, xl: 24}}>

      <Box p={{base: 4, md: 4, lg: 0}}>
          <HStack mt={{base:6,  md:2}}>
              <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
          <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
          REJUVENATE AND BOND
          </Text>
          </HStack>

          <Text  fontFamily={'navBarFont'} 
          letterSpacing={'1px'} 
          pb={{base:8, md: 4, lg: 4, xl: 8}} 
          lineHeight={{lg: '55px' ,xl:'55px'}} 
          // textColor='white'
          textColor='#0e2a4e'
          textAlign={'left'}
          fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
          Ride, Walk, Run
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            This exclusive eco-friendly retreat provides a unique space to rejuvenate your body, 
            senses and spirits while taking in the goodness of the forest life along the way.
          </Text>

          <Text 
          textColor='#cf2e2e'
          // textColor='#0e2a4e'

          // textColor='blue.800'
          textAlign={'left'}
          pt={6}

          fontFamily={'bodyFont'} fontSize='lg'>
            Ask about our activity list, or make a custom booking for your team.
          </Text>

          <Box py={{base:10, md: 6}} justify={'left'}>
          <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
              Contact to Book
          </Button>
          </Box>
          </Box>
      </Box>

      </HStack>      
    )
  }
  

  const Section3Content = () => {
    return (
      <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
      <Box 
      bg={'whiteAlpha.900'} 
      border={'2px'}
      borderColor='white'
      shadow={'xl'}

      maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
      p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
      pt={{base: 8,  md: 12, xl: 24}}>

      <Box p={{base: 4, md: 4, lg: 0}}>
          <HStack mt={{base:6,  md:2}}>
              <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
          <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
          CONFERENCES & TRAININGS
          </Text>
          </HStack>

          <Text  fontFamily={'navBarFont'} 
          letterSpacing={'1px'} 
          pb={{base:8, md: 4, lg: 4, xl: 8}} 
          lineHeight={{lg: '55px' ,xl:'55px'}} 
          // textColor='white'
          textColor='#0e2a4e'
          textAlign={'left'}
          fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
          Events & meetings
          </Text>

          <Text 
          // textColor='white'
          // textColor='blue.800'
          textColor='#0e2a4e'

          fontFamily={'bodyFont'}           textAlign={'left'}
          fontSize='lg' py={4} fontWeight={400}>
            Efficient meetings and events ought to happen in spacious spaces that inspire fun, creativity and comfort for everyone.

          </Text>
          <Text 
          // textColor='white'
          textColor='#0e2a4e'

          // textColor='blue.800'
          fontFamily={'bodyFont'}
          textAlign={'left'}

          fontSize='lg'>
            At the Great Outdoors, you could use our elaborate, tropical and beautiful gardens or our luxurious boardroom that 
            will accommodate the whole team with a perfect environment to keep you focused.
          </Text>

          <Text 
          textColor='#cf2e2e'
          // textColor='#0e2a4e'

          // textColor='blue.800'
          textAlign={'left'}
          pt={6}

          fontFamily={'bodyFont'} fontSize='lg'>
            Free Wifi, Special stay offers, Projector & Screen, refreshments on order.
          </Text>

          <Box py={{base:10, md: 6}} justify={'left'}>
          <Button fontFamily={'bodyFont'} colorScheme='red'  textColor='white' fontSize='lg'>
              Contact to Book
          </Button>
          </Box>
          </Box>
      </Box>

      </HStack>      
    )
  }
  
  
  const SolutionsListItem = (props) => {
    return (
        <Box
        maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
        padding={3}
        paddingRight={{base:8,md:12}}
        // bgColor="gray.100"
        background="whiteAlpha.800"
        // border='30px'
        // shadow={'md'}
        >
        <HStack  align={'flex-start'} >
          
          <Box color={'green.400'} px={2} >
            <Icon as={CheckIcon} />
          </Box>
          <VStack align={'start'}>
            <Text color={'black'} textAlign='left' fontWeight={200} fontSize={'xl'} fontFamily='bodyFont' >{props.text}</Text>
          </VStack>
        </HStack>
        </Box>
    )
  }
  
  
  
