import React from 'react'
import { Box, Center, Text, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const EatAndDrinkComponent = () => {
  return (
    <Box minH={'100vh'} bg={'blue.900'} pt={4}>
      <Box bg={'white'} mx={10}  p={12} rounded='xl'>

        <HStack p={28}>
          <Box bg={'gray.200'} maxW={'35vw'} p={12}>
            <Text textColor='red' fontFamily={'navBarFont'}>
            EAT & DRINK
            </Text>
            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='4xl'>
            Indulge in healthy & fresh food
            </Text>

            <Text textColor='blue.800' fontFamily={'navBarFont'} fontSize='lg' py={4}>
            Open Daily : 7.30 am - 11.00pm
            </Text>


            <Box py={4}>
              <Button fontFamily={'navBarFont'}>
                Call to Book
              </Button>
            </Box>
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

export default EatAndDrinkComponent