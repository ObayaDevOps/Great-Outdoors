import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid, Image, 
  Button, VStack, HStack, useColorModeValue, Grid, GridItem,
     Flex } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import client from '../../src/sanity/lib/client';

import ImageGridPhotoGallery from '../components/image-grid-Lightbox/imageGridPhotoGallery'

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

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
    <MotionBox
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      overflow="hidden"
      shadow="md"
      transition="all 0.3s"
      _hover={{ shadow: 'lg' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </MotionBox>
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
      <MotionBox
        width="100vw"
        position="relative"
        left="50%"
        right="50%"
        marginLeft="-50vw"
        marginRight="-50vw"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionImage
          src={heroImage.url}
          alt="Corporate Retreat"
          objectFit="cover"
          w="100%"
          h="800px"
        />
        <MotionBox
          position="absolute"
          bottom={4}
          left={4}
          bg={accentColor}
          color="white"
          px={4}
          py={2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MotionHeading size="lg" fontFamily={'navBarFont'}>{heroTitle}</MotionHeading>
        </MotionBox>
      </MotionBox>
      <Container maxW="container.xl" py={32}>
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
              <Box>
                <MotionHeading size="xl" fontFamily={'navBarFont'} mb={4}>
                  {corporateSpace.title}
                </MotionHeading>
                <MotionText textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                  {corporateSpace.description}
                </MotionText>
                <MotionButton colorScheme="orange" size="lg">
                  Enquire Now
                </MotionButton>
              </Box>
              <MotionImage
                src={corporateSpace.image.url}
                alt="Corporate Space"
              />
            </SimpleGrid>
          </MotionBox>

          <MotionBox
            my={8}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <MotionHeading size="xl" fontFamily={'navBarFont'} mb={6}>
              Our Group Activities
            </MotionHeading>
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
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
              <MotionImage
                src={accommodation.image.url}
                alt="Accommodation"
              />
              <Box>
                <MotionHeading size="xl" fontFamily={'navBarFont'} mb={4}>
                  {accommodation.title}
                </MotionHeading>
                <MotionText textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
                  {accommodation.description}
                </MotionText>
                <MotionButton colorScheme="orange" size="lg">
                  Book Now
                </MotionButton>
              </Box>
            </SimpleGrid>
          </MotionBox>

          <MotionBox
            my={8}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <MotionHeading size="xl" fontFamily={'navBarFont'} mb={6}>
              {gallery.title}
            </MotionHeading>
            <MotionText textColor='#797979' fontWeight={'400'} fontSize="lg" mb={4} fontFamily={'bodyFont'}>
              {gallery.description}
            </MotionText>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
              {gallery.images.map((image, index) => (
                <MotionImage
                  key={index}
                  src={image.url}
                  alt={`Gallery Image ${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                />
              ))}
            </SimpleGrid>
          </MotionBox>
        </VStack>
      </Container>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CorporateRetreats;
