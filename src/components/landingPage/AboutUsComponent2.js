import React, { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Center, Text, Button, HStack, Divider, ScaleFade, Slide } from '@chakra-ui/react'
import Image from 'next/image'

const AboutUsComponent2 = () => {
  
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

  return (
    <Box minH={'100vh'} >
      <Box minH={{base:' 160vh', md:'120vh'}} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg'} 
             bgSize="cover" bgPosition="center" bgAttachment="fixed" 

       >
        <ScaleFade initialScale={0.8}
            in={isInView1}>

            <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
            <Box 
            ref={ref1}
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
                ABOUT US
                </Text>
                </HStack>

                <Text  fontFamily={'navBarFont'} 
                letterSpacing={'1px'} 
                pb={{base:8, md: 4, lg: 4, xl: 8}} 
                lineHeight={{lg: '55px' ,xl:'55px'}} 
                // textColor='white'
                textColor='#0e2a4e'
                
                fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
                Retreat. Rest. Rejuvenate
                </Text>

                <Text 
                // textColor='white'
                // textColor='blue.800'
                textColor='#0e2a4e'

                fontFamily={'bodyFont'} fontSize='lg' py={4} fontWeight={400}>
                The Great Outdoors is the ideal retreat for nature lovers, teams,
                and people that just want to leave the metropolitan hustle & bustle behind, 
                get a breath of fresh air, rest, and rejuvenate in the lap of nature.
                </Text>
                <Text 
                // textColor='white'
                textColor='#0e2a4e'

                // textColor='blue.800'
                fontFamily={'bodyFont'} fontSize='lg'>
                This eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala,
                is a place people come to for unique retreat experiences, 
                unforgettable weekends, relaxation, corporate retreats, and reconnecting with family.
                </Text>

                <Box py={{base:10, md: 6}} >
                <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                    Discover More
                </Button>
                </Box>
                </Box>
            </Box>

            </HStack>

        </ScaleFade>
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default AboutUsComponent2