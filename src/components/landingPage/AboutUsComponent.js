import React from 'react'
import { Box, Center, Text, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const AboutUsComponent = () => {
  return (
    <Box minH={'100vh'} bg={'blue.900'}>
      <Box bg={'white'} mx={10}  p={12} rounded='xl'>

        <HStack p={28}>
          <Box bg={'gray.200'} maxW={'35vw'} p={12}>
            <Text textColor='red' fontFamily={'navBarFont'}>
            ABOUT US
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='4xl'>
            Retreat. Rest. Rejuvenate
            </Text>

            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg' py={4}>
            The Great Outdoors is the ideal retreat for nature lovers, teams,
            and people that just want to leave the metropolitan hustle & bustle behind, 
            get a breath of fresh air, rest, and rejuvenate in the lap of nature.
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg'>
            This eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala,
            is a place people come to for unique retreat experiences, 
            unforgettable weekends, relaxation, corporate retreats, and reconnecting with family.
            </Text>

            <Box py={4}>
              <Button fontFamily={'navBarFont'}>
                Discover More
              </Button>
            </Box>
          </Box>

          <Box bg={'red.600'} h={'10vh'} w={'10vw'}>
            <Text textColor='white' fontFamily={'navBarFont'} fontSize='lg'>
              Find Calm in the Forest
            </Text>

          </Box>

          <Box>
            <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720008924/MG_2634-3-e1671000104768_k2zbhy.jpg'}
              width={1000}
              height={666}      
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

export default AboutUsComponent