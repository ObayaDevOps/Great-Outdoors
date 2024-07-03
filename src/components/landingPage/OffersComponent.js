import React from 'react'
import { Box, Center, Text, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const OffersComponent = () => {
  return (
    <Box minH={'100vh'} >
      <Box minH={'100vh'} bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720012553/IMG_8943-2_jh9wgb.jpg'} 
       rounded='xl'>

        <HStack p={28} float='right'>
          <Box bg={'gray.200'} maxW={'35vw'} p={12}>
            <Text textColor='red' fontFamily={'navBarFont'}>
            OUR OFFER
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='4xl'>
            Christmas Season Full Board Offers:
            </Text>

            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg' py={4}>
              Double Cottages at UGX500,000 and Family Cottages starting at UGX650,000 with all meals included.
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg'>
              Single and Double Deluxe Rooms starting at UGX300,000 | Family Deluxe Rooms starting UGX550,000
            </Text>

            <Box py={4}>
              <Button fontFamily={'navBarFont'} colorScheme='red' textColor='white'>
                See Offers and Discounts
              </Button>
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

export default OffersComponent