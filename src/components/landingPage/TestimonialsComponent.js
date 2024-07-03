import React from 'react'
import { Box, Center, Text, Button, HStack, Icon } from '@chakra-ui/react'
import Image from 'next/image'

const TestimonialsComponent = () => {
  return (
    <Box minH={'110vh'} bg={'blue.900'}pt={10}>
      <Box bg={'white'} mx={10}  p={12} rounded='xl'>

        <HStack p={28}>
          <Box bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720012115/IMG_4029-scaled_wygye5.jpg'} maxW={'35vw'} p={12}>
            <Text textColor='red' fontFamily={'navBarFont'}>
              TESTIMONIALS
            </Text>
            <Text textColor='white' fontFamily={'navBarFont'} fontSize='4xl'>
              Clients Review
            </Text>

            <Box py={4}>
              <Button fontFamily={'navBarFont'}>
                Verified Google Reviews
              </Button>
            </Box>
          </Box>

          <Box bg={'red.600'} h={'15vh'} w={'10vw'}>
            <Text textColor='white' fontFamily={'navBarFont'} fontSize='lg'>
              Satisfied Customers
            </Text>
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
            </Icon>

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

export default TestimonialsComponent