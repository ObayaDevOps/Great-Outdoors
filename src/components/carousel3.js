import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { Box, Flex, Text} from '@chakra-ui/react'



const Carousel3 =(props)=> {

  const slides = props.slides;

    // const slides =[
    //     {   
    //         img: "https://cdn.sanity.io/images/y563wtf6/production/f2df4a9d73ef620357e06dff709bc5de4fafe9ed-2560x1707.jpg",
    //         width: 770,
    //         height: 300,
    //         caption: "Great Outdoors",
    //         label: "At Home in Nature",
    
    //     },
    //     {   
    //       img: "https://cdn.sanity.io/images/y563wtf6/production/eb731f11d3d652d46dce1693378769069bb0fd4a-2048x1248.jpg",
    //       width: 1024,
    //       height: 683,
    //       caption: "Great Outdoors",
    //       label: "Cozy Cottages",
        
    //     },
    //     {   
    //       img: "https://cdn.sanity.io/images/y563wtf6/production/5137b34e2b874e50e5e934b4a2941860377e0ba5-2021x1267.jpg",
    //       width: 1024,
    //       height: 683,
    //       caption: "Great Outdoors",
    //       label: "Corporate Retreats",
        
    //     },
        
        
    //   ] 
        return (
          <Box  
          // bgColor={'#0b1722'}
          // mb={-16} 
          >
            <Carousel
            preventMovementUntilSwipeScrollTolerance={true} 
             swipeScrollTolerance={50}
            >
              {slides.map((slide, sid) => (                
                <Box
                // minH='100vh' 
                w='full'
                // backgroundSize={'cover'}
                // bgPosition="center" 
                // bgRepeat={'no-repeat'}  
                // backgroundImage={'https://cdn.sanity.io/images/y563wtf6/production/f2df4a9d73ef620357e06dff709bc5de4fafe9ed-2560x1707.jpg'}   
                // backgroundImage={slide.img}  
                 
                >

                  <Box >
                    <Image
                      src={slide.url}
                      height={slide.height}
                      width={slide.width}

                    />
                  </Box>
                </Box>
                ))}
            </Carousel>
            </Box>
        )
};


export default Carousel3