import React, { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Center, Text, Button, HStack, Divider, ScaleFade } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link";

import  { urlFor } from '../../sanity/lib/image'


const ForestComponent2 = (props) => {
  const landingPageContent  = props.pageContent[0] || [];

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
    <Box minH={'100vh'} >
      <Box minH={{base:' 160vh', md:'120vh'}} 
          //  bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720011506/MG_4163_vbv2ja.jpg'} 
           bgImage={urlFor(landingPageContent.forestBackgroundImage).url()}

           bgSize="cover" bgPosition="center" 
           overflowX='hidden'
      >
        <ScaleFade initialScale={0.9} in={isInView1}>
          <HStack p={{base:4, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
            <Box 
              ref={ref1}
              bg={'whiteAlpha.900'} 
              border={'2px'}
              borderColor='white'
              maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
              p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}
              my={{base:'64', md: '0vh'}}
              pt={{base: 2,  md: 12, xl: 24}}
            >
              <Box p={{base: 4, md: 4, lg: 0}}>
                <HStack mt={{base:6,  md:2}}>
                  <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
                  <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
                    THE FOREST
                  </Text>
                </HStack>

                <Text  fontFamily={'navBarFont'} 
                  letterSpacing={'1px'} 
                  pb={{base:8, md: 4, lg: 4, xl: 8}} 
                  lineHeight={{lg: '55px' ,xl:'55px'}} 
                  textColor='#0e2a4e'              
                  fontWeight={800} 
                  fontSize={{base:'30px' ,lg: '35px', xl:'50px'}}>
                  {landingPageContent.forestTitle}
                </Text>

                <Text 
                  textColor={'gray.600'}
                  fontFamily={'bodyFont'}  
                  fontSize={{base:'sm', md: 'lg'}} 
                  py={2} fontWeight={400}>
                  {landingPageContent.forestParagraph1}  
                </Text>

                <Box pt={{base:10, md: 6}} pb={{base:2, md: 6}} >
                  <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                    <Link href='/gallery'>
                      {landingPageContent.forestButtonText}
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Box>
          </HStack>
        </ScaleFade>
      </Box>
    </Box>
  )
}

export default ForestComponent2
