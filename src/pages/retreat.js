import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, 
  Button, VStack, HStack, useColorModeValue, Grid, GridItem,
     Flex } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import client from '../../src/sanity/lib/client';

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'


export async function getStaticProps() {
  const retreatPageContent = await client.fetch(`
  *[_type == "retreatPage"][0]{
    heroImage{
      "url": asset->url
    },
    heroTitle,
    corporateSpace{
      title,
      description,
      image{
        "url": asset->url
      }
    },
    activities[]{
      name,
      image{
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    },
    accommodation{
      title,
      description,
      image{
        "url": asset->url
      }
    },
    gallery{
      title,
      description,
      images[]{
        "url": asset->url
      }
    }
  }`);

  return {
    props: {
      retreatPageContent,
    },
    revalidate: 10,
  };
}

const Card = ({ children, ...props }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
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

const CorporateRetreats = ({ retreatPageContent }) => {
  const { heroImage, heroTitle, corporateSpace, activities, accommodation, gallery } = retreatPageContent;
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('orange.500', 'orange.300');

  return (
    <Box bg={bgColor} color={textColor}>
      <NavBar />
      <Box width="100vw" position="relative" left="50%" right="50%" marginLeft="-50vw" marginRight="-50vw">
        <Image
          src={heroImage.url}
          alt="Corporate Retreat"
          objectFit="cover"
          w="100%"
          h="800px"
        />
        <Box
          position="absolute"
          bottom={4}
          left={4}
          bg={accentColor}
          color="white"
          px={4}
          py={2}
        >
          <Heading size="lg" fontFamily={'navBarFont'}>{heroTitle}</Heading>
        </Box>
      </Box>
      <Container maxW="container.xl" py={32}>
        <VStack spacing={12} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
            <Box>
              <Heading size="xl" fontFamily={'navBarFont'} mb={4}>
                {corporateSpace.title}
              </Heading>
              <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                {corporateSpace.description}
              </Text>
              <Button colorScheme="orange" size="lg">
                Enquire Now
              </Button>
            </Box>
            <Image
              src={corporateSpace.image.url}
              alt="Corporate Space"
            />
          </SimpleGrid>

          <Box my={8}>
            <Heading size="xl" fontFamily={'navBarFont'} mb={6}>
              Our Group Activities
            </Heading>
{/* 
            <Box py={{base: 10, lg: 12}}>
              <ImageGridPhotoGallery photos={activities.map(activity => ({
                src: activity.image.url,
                height: activity.image.height,
                width: activity.image.width,
                alt: activity.name
              }))} />
            </Box> */}


            <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4}>
              <GridItem colSpan={1}>
                <Card position="relative">
                  <Image src={activities[0].image.url} alt={activities[0].name} />
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
                  >
                    {activities[0].name}
                  </Text>
                </Card>
              </GridItem>
              <Grid templateRows="repeat(2, 1fr)" gap={0}>
                {activities.slice(1, 3).map((activity, index) => (
                  <GridItem key={index}>
                    <Card position="relative">
                      <Image src={activity.image.url} alt={activity.name} />
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
                      >
                        {activity.name}
                      </Text>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  {activities.slice(3).map((activity, index) => (
                    <GridItem key={index}>
                      <Card position="relative">
                        <Image src={activity.image.url} alt={activity.name} />
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
                        >
                          {activity.name}
                        </Text>
                      </Card>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
            <Image
              src={accommodation.image.url}
              alt="Accommodation"
            />
            <Box>
              <Heading size="xl" fontFamily={'navBarFont'} mb={4}>
                {accommodation.title}
              </Heading>
              <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                {accommodation.description}
              </Text>
              <Button colorScheme="orange" size="lg">
                Book Now
              </Button>
            </Box>
          </SimpleGrid>

          <Box my={8}>
            <Heading size="xl" fontFamily={'navBarFont'} mb={6}>
              {gallery.title}
            </Heading>
            <Text textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
              {gallery.description}
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
              {gallery.images.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  alt={`Gallery Image ${index + 1}`}
                />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CorporateRetreats;