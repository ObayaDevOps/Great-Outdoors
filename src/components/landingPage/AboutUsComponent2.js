import React, { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Center, Text, Button, HStack, Divider, ScaleFade, Slide } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link";
const AboutUsComponent2 = (props) => {
  const landingPageContent  = props.pageContent[0] || [];

  
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

  return (
    <Box bgColor={'#0b1722'} minH={'100vh'} >

      
      <Box minH={{base:' 160%', md:'120vh'}} 
      bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg'} 
             bgSize="cover" bgPosition="center" 
             bgAttachment="fixed" 
             overflowX='hidden'


       >
        {/* <ScaleFade initialScale={0.8}
            in={isInView1}> */}


            <HStack  p={{base:4, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
            <Box 
            ref={ref1}
            bg={'whiteAlpha.900'} 
            border={'2px'}
            borderColor='white'
            shadow={'xl'}
            my={{base:'64', md: '0vh'}}

            maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
            p={{base: 2, md: 6, lg:10, xl: 14}} rounded={'lg'}
            pt={{base: 2,  md: 12, xl: 24}}>

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
                fontWeight={800} 
                fontSize={{base:'30px' ,lg: '35px', xl:'50px'}}>
                {landingPageContent.aboutUsTitle}
                </Text>



                <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
                {landingPageContent.aboutUsParagraph1}
                </Text>
                <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
                {landingPageContent.aboutUsParagraph2}
                </Text>

                <Box pt={{base:10, md: 6}} pb={{base:2, md: 6}} >
                <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                  <Link href='/reservations'>
                  {landingPageContent.aboutUsButtonText}
                  </Link>
                </Button>
                </Box>
                </Box>
            </Box>

            </HStack>

        {/* </ScaleFade> */}
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default AboutUsComponent2