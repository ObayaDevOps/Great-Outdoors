import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Carousel2 = ({ slides }) => {
  return (
    <Box bgColor={'#0b1722'} mb={-16}>
      <Carousel
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {slides.map((slide, sid) => (
          <Box
            key={sid}
            minH='100vh'
            w='full'
            backgroundSize={'cover'}
            bgPosition="center"
            bgRepeat={'no-repeat'}
            backgroundImage={slide.img}
          >
            <MotionBox
              maxW={{base:'xl', md: 'xl'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Heading
                  pt={{ base: '35vh', md: '45vh' }}
                pl={{ base: 0, md: '10vw' }}
                as="h1"
                mb={{ base: 2, md: 10 }}
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                minHeight="1vh"
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{ base: "normal", md: "tight" }}
                color="purple.900"
                textAlign="center"
                fontFamily={'navBarFont'}
              >
                <MotionText
                  display={{ base: "block" }}
                  w="full"
                  bgClip="text"
                  color="white"
                  fontWeight="extrabold"
                  _hover={{
                    transform: "scale(1.005)",
                    filter: "brightness(120%)",
                  }}
                  py={6}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {slide.label}
                </MotionText>
              </Heading>
            </MotionBox>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Carousel2;
