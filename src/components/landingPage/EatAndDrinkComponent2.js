import React, { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Center, Text, Button, HStack, Divider, ScaleFade, Slide } from '@chakra-ui/react'
import Image from 'next/image'

const EatAndDrinkComponent2 = () => {
  
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

  return (
    <Box minH={'100vh'} >
      <Box minH={{base:' 160vh', md:'120vh'}} 
      bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723823743/A7300820-1024x683_rh8gsj.jpg'} 
             bgSize="cover" bgPosition="center" 

       >
        <ScaleFade initialScale={0.9}
            in={isInView1}>

            <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'right'}}>
            <Box 
            ref={ref1}
            bg={'whiteAlpha.900'} 
            border={'2px'}
            borderColor='white'
            maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
            p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
            shadow={'xl'}
            pt={{base: 8,  md: 12, xl: 24}}>

            <Box p={{base: 4, md: 4, lg: 0}}>
                <HStack mt={{base:6,  md:2}}>
                    <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
                <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
                EAT AND DRINK
                </Text>
                </HStack>

                <Text  fontFamily={'navBarFont'} 
                letterSpacing={'1px'} 
                pb={{base:8, md: 4, lg: 4, xl: 8}} 
                lineHeight={{lg: '55px' ,xl:'55px'}} 
                // textColor='white'
                textColor='#0e2a4e'
                
                fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
                Indulge in Healthy & Fresh Food
                </Text>

                <Text 
                // textColor='white'
                // textColor='blue.800'
                textColor='#0e2a4e'

                fontFamily={'bodyFont'} fontSize='lg' py={4} fontWeight={400}>
                It is said that food is symbolic of love when words are inadequate. To that end, our meals are prepared and served with love, and our expert chefs make sure to prepare a range of dishes. 
                </Text>
                <Text 
                // textColor='white'
                textColor='#0e2a4e'

                // textColor='blue.800'
                fontFamily={'bodyFont'} fontSize='lg'>
                From continental dishes, to local Ugandan foods, your tastebuds will experience a full range of culinary delights. Get ready to indulge!
                </Text>

                <Box py={{base:10, md: 6}} >
                <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                    Call to Book
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

export default EatAndDrinkComponent2