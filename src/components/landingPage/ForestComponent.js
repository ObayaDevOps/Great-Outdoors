

import React from 'react'
import { Box, Center, Text, Button, HStack, Divider, Stack } from '@chakra-ui/react'
import Image from 'next/image'

const ForestComponent = () => {
  return (
    <Box minH={'100vh'} bg={{base:'#ffffff' , lg:'#0e1720'}} >
      <Box bg={'#ffffff'} mx={{base: 0, lg: 10, xl: 10}}  p={{base: 0 ,lg: 0}} rounded='xl'  >

        <Stack p={{base: 8, lg:4, xl:8}} direction={{base: 'column', lg: 'row'}}>
          <Box 
          bg={'#f5f6f9'}
           maxW={'6xl'} 
           p={{base: 6, md: 20, lg: 12}} py={{base: 16, lg:20}}
           rounded={'xl'}
           >
             <HStack>
               <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}} />
            <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
              THE FOREST
            </Text>
            </HStack>
            <Text textColor='#0e2a4e' fontFamily={'navBarFont'} letterSpacing={'1px'} pb={10} lineHeight={{lg: '55px' ,xl:'55px'}} fontWeight={800} fontSize={{base:'45px' ,lg: '45px', xl:'50px'}}>
            A truly natural experience for the senses
            </Text>

            <Box maxW={{lg:'2xl', xl:'xl' }} letterSpacing={'1px'} fontSize={{base: '17px', lg:'15px'}} >
              <Text textColor='#797979' fontWeight={'400'} fontFamily={'bodyFont'} mb={4} >
                For special rates please contact the front office : +256 701519853
              </Text>
            </Box>

          </Box>
{/* 
          <Box bg={'#da3c3c'} h={'165px'} w={'153px'} zIndex={999} >
            <Text textColor='white' fontFamily={'floatBoxFont'} fontSize='13px' textAlign='center'
            letterSpacing='2px'
            lineHeight='20px'
            >
             FIND CALM IN THE FOREST
            </Text>
          </Box> */}

          <Box rounded={'xl'} my={{lg: 24}}>
            <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720011506/MG_4163_vbv2ja.jpg'}
              width={2048}
              height={1365}  
            />
            </Box>

        </Stack>
        </Box>
      <Box>
    </Box>
    </Box>
  )
}

export default ForestComponent