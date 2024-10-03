import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, VStack, HStack, useColorModeValue, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/navbar';  // Import the NavBar component
import Footer from '../components/footer' 


export const Card = ({ children, ...props }) => {
    const bgColor = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
  
    return (
      <Box
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        shadow="md"
        transition="all 0.3s"
        _hover={{ shadow: 'lg' }}
        {...props}
      >
        {children}
      </Box>
    );
  };

const CorporateRetreats = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('orange.500', 'orange.300');

  return (
    <Box bg={bgColor} color={textColor}>
      <NavBar />  {/* Add the NavBar component here */}
      <Box width="100vw" position="relative" left="50%" right="50%" marginLeft="-50vw" marginRight="-50vw">
        <Image
          src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg"
          alt="Corporate Retreat"
          objectFit="cover"
          w="100%"
          h="700px"
        />
        <Box
          position="absolute"
          bottom={4}
          left={4}
          bg={accentColor}
          color="white"
          px={4}
          py={2}
          borderRadius="md"
        >
          <Heading size="lg" fontFamily={'navBarFont'}>Corporate Retreats</Heading>
        </Box>
      </Box>
      <Container maxW="container.xl" py={32}>
        <VStack spacing={12} align="stretch">
          {/* Corporate Space Section */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
            <Box>
              <Heading size="xl" fontFamily={'navBarFont'} mb={4}>
                Corporate Space
              </Heading>
              <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                Whether it's team-building or simply a change in environment to inspire creativity and productivity, our corporate retreats are the perfect getaway. At The Great Outdoors, you can use our extensive, modern and beautiful gardens as your boardroom.
              </Text>
              <Button colorScheme="orange" size="lg">
                Enquire Now
              </Button>
            </Box>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg"
              alt="Corporate Space"
              borderRadius="lg"
            />
          </SimpleGrid>

          {/* Activities Section */}
          <Box my={8}>
            <Heading size="xl" fontFamily={'navBarFont'} mb={6}>
              Our Group Activities
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4}>
              <GridItem colSpan={1}>
                <Card position="relative">
                  <Image src={activities[0].image} alt={activities[0].name} borderRadius="lg" />
                  <Text
                    position="absolute"
                    top={2}
                    right={2}
                    fontWeight="bold"
                    fontFamily={'bodyFont'}
                    textColor='#797979'
                    bg="rgba(255, 255, 255, 0.8)"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {activities[0].name}
                  </Text>
                </Card>
              </GridItem>
              <Grid templateRows="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <Card position="relative">
                    <Image src={activities[1].image} alt={activities[1].name} borderRadius="lg" />
                    <Text
                      position="absolute"
                      top={2}
                      right={2}
                      fontWeight="bold"
                      fontFamily={'bodyFont'}
                      textColor='#797979'
                      bg="rgba(255, 255, 255, 0.8)"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {activities[1].name}
                    </Text>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card position="relative">
                    <Image src={activities[2].image} alt={activities[2].name} borderRadius="lg" />
                    <Text
                      position="absolute"
                      top={2}
                      right={2}
                      fontWeight="bold"
                      fontFamily={'bodyFont'}
                      textColor='#797979'
                      bg="rgba(255, 255, 255, 0.8)"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {activities[2].name}
                    </Text>
                  </Card>
                </GridItem>
              </Grid>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <GridItem>
                    <Card position="relative">
                      <Image src={activities[3].image} alt={activities[3].name} borderRadius="lg" />
                      <Text
                        position="absolute"
                        top={2}
                        right={2}
                        fontWeight="bold"
                        fontFamily={'bodyFont'}
                        textColor='#797979'
                        bg="rgba(255, 255, 255, 0.8)"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {activities[3].name}
                      </Text>
                    </Card>
                  </GridItem>
                  <GridItem>
                    <Card position="relative">
                      <Image src={activities[4].image} alt={activities[4].name} borderRadius="lg" />
                      <Text
                        position="absolute"
                        top={2}
                        right={2}
                        fontWeight="bold"
                        fontFamily={'bodyFont'}
                        textColor='#797979'
                        bg="rgba(255, 255, 255, 0.8)"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {activities[4].name}
                      </Text>
                    </Card>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </Box>

          {/* Accommodation Section */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg"
              alt="Accommodation"
              borderRadius="lg"
            />
            <Box>
              <Heading size="xl" fontFamily={'navBarFont'} mb={4}>
                Rooms
              </Heading>
              <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                The well-appointed cottages fully in harmony with their natural setting. Each room is designed to ensure comfort and are nestled among the trees, making for ideal retreat for corporate groups.
              </Text>
              <Button colorScheme="orange" size="lg">
                Book Now
              </Button>
            </Box>
          </SimpleGrid>

          {/* Resort Gallery Section */}
          <Box my={8}>
            <Heading size="xl" fontFamily={'navBarFont'} mb={6}>
              Check Our Resort Gallery
            </Heading>
            <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
              The stunning natural energy of the outdoors sets the scenery to the perfect setting for a retreat. Experience nature like never before, swimming in our pool, relaxing in our stunning Dining & Restaurant, or enjoying our Event Space.
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
              {galleryImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  borderRadius="lg"
                />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CorporateRetreats;

// Sample data for activities and gallery images
const activities = [
  { name: 'Cycling', image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg' },
  { name: 'Nature Walk', image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg' },
  { name: 'Bonfire', image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg' },
  { name: 'Darts', image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg' },
  { name: 'Darts', image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg' },

];

const galleryImages = [
  { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg', alt: 'Dining & Restaurant' },
  { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg', alt: 'Event Space' },
  { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1724170789/IMG_4904-Copy_xd8f6m.jpg', alt: 'Pool' },
];