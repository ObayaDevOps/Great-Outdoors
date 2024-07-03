import React from 'react'
import { Box, Center, Text, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const ForestComponent = () => {
  return (
    <Box minH={'100vh'} bg={'blue.900'}>
      <Box bg={'white'} mx={10}  p={12} rounded='xl'>

        <HStack p={28}>
          <Box bg={'gray.200'} maxW={'35vw'} p={12}>
            <Text textColor='red' fontFamily={'navBarFont'}>
            THE FOREST
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='4xl'>
            A truly natural experience for the senses
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg' py={4}>
            The Great Outdoors is the ideal retreat for nature lovers, teams,
            and people that just want to leave the metropolitan hustle & bustle behind, 
            get a breath of fresh air, rest, and rejuvenate in the lap of nature.
            </Text>
          </Box>


          <Box>
            <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720011506/MG_4163_vbv2ja.jpg'}
              width={2048}
              height={1365}      
            />
            </Box>

        </HStack>
        </Box>


        <Box>

        </Box>
        
      </Box>
    // </Box>
  )
}

export default ForestComponent