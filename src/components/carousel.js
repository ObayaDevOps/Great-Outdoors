import React, { useCallback, useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import NextImage from 'next/image'


export default function App(){
  const SLIDE_CHANGE_THRESHOLD = 100;

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };


  const slides =[
    {   
        img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg",
        width: 770,
        height: 300,
        caption: "Great Outdoors",
        label: "At Home in Nature",

    },
    {   
      img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg",
      width: 1024,
      height: 683,
      caption: "Great Outdoors",
      label: "Cozy Cottages",
    
    },
    {   
      img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
      width: 1024,
      height: 683,
      caption: "Great Outdoors",
      label: "Corporate Retreats",
    
    },
  // {   
  //   img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101818/A7300337-1024x683_trpffp.jpg",
  //   width: 770,
  //   height: 300,
  //   caption: "Great Outdoors",
  //   label: "At Home in Nature",

  // },
    
  ] 

  // const slides = [
  //   {
  //     img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "First Slide",
  //     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, []);
  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, []);

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        const diffX = e.clientX - dragStartX;
        setDragOffset(diffX);
        e.preventDefault();
      }
    },
    [dragging, dragStartX]
  );

  const handleMouseUp = useCallback(() => {
    if (dragging) {
      setDragging(false);
      if (Math.abs(dragOffset) > SLIDE_CHANGE_THRESHOLD) {
        const slideChange = dragOffset > 0 ? prevSlide : nextSlide;
        slideChange();
      }
      setDragOffset(0);
    }
  }, [dragging, dragOffset, prevSlide, nextSlide]);

  // Do not move first slide to the right and last slide to the left
  const slideOffset =
    currentSlide === 0
      ? Math.min(dragOffset, 0)
      : currentSlide === slidesCount - 1
      ? Math.max(dragOffset, 0)
      : dragOffset;

  const carouselStyle = {
    transition: dragging ? "none" : "all .5s",
    ml: `calc(-${currentSlide * 100}% + ${slideOffset}px)`,
  };

  return (
    <Flex
      // w="full"
      // bg="#edf3f8"
      minH={{md:'60vh'}}
      // mt={-20}
      _dark={{ bg: "#3e3e3e" }}
      // p={10}
      alignItems="center"
      justifyContent="center"
      style={{ cursor: dragging ? "grabbing" : "auto" }}
      onMouseLeave={handleMouseUp}
    >
      <Flex w="full"  overflow="hidden"  textAlign='center' pos="relative">
        <Flex
          h={{base: "90vh", xl:"850px"}}
          w="full"
          // h="full"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Flex key={`slide-${sid}`} boxSize="full" 
            overflow='hidden'
             w='100%' shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              {/* <Image
                src={slide.img}
                alt="Great Outdoors Uganda carousel image"
                boxSize="full"
                backgroundSize="cover"
                transform={'translate(-50%,0)'}
                position='relative'
                left='50%'

                

              /> */}
              <NextImage
                src={slide.img}
                layout='fill'
                // height={slide.height} width={slide.width}
                alt="carousel image"
                boxSize="full"
                // backgroundSize="fit"
              />


              <Stack
                // p="8px 12px"
                pos="absolute"
                bottom={{base:"24px", lg: "40vh"}}
                textAlign="center"
                w="full"
                // mb="8"
                color="white"
              >
                <Text fontSize={{base:"3xl", lg: "8xl"}} fontFamily='navBarFont'>{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Flex>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setCurrentSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
