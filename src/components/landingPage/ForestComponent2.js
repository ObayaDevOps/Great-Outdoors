import React from 'react'
import { Box, Center, Text, Button, HStack, Divider } from '@chakra-ui/react'
import Image from 'next/image'

const ForestComponent2 = () => {
  return (
    <Box minH={'100vh'} >
      <Box minH={'100vh'} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720011506/MG_4163_vbv2ja.jpg'} 
       >

        <HStack p={{base:8, md: 4,lg:8, xl: 20}} float={{base: 'none', md:'left'}}>
          <Box 
          // bg={'gray.100'} 
          bg={'blackAlpha.500'}
          border={'2px'}
          borderColor='white'
          maxW={{base: '6xl', md: 'lg', lg: 'md',  xl:'xl'}}
           p={{base: 3, md: 6, lg:10, xl: 14}} rounded={'lg'}>

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
            textColor='white'
            // textColor='#0e2a4e'
            
            fontWeight={800} fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}>
            A truly natural experience for the senses
            </Text>

            <Text 
            textColor='white'
            // textColor='blue.800'

             fontFamily={'bodyFont'} fontSize='lg' py={4} fontWeight={400}>
              For special rates please contact the front office : +256 701519853
            </Text>


            <Box py={{base:10, md: 6}} >
              <Button fontFamily={'bodyFont'} colorScheme='red' textColor='white' fontSize='lg'>
                See Offers and Discounts
              </Button>
            </Box>
            </Box>
          </Box>

        </HStack>
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default ForestComponent2