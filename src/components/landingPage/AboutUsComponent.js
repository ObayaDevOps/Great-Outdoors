import React from 'react'
import { Box, Center, Text, Button, HStack, Divider, Stack } from '@chakra-ui/react'
import Image from 'next/image'

const AboutUsComponent = () => {
  return (
    <Box minH={'100vh'} bg={{base:'#ffffff' , lg:'#0e1720'}} >
      <Box bg={'#ffffff'} mx={{base: 0, lg: 10}}  p={{base: 0 ,lg: 0}} rounded='xl' >

        <Stack p={8} direction={{base: 'column', lg: 'row'}}>
          <Box 
          bg={'#f5f6f9'}
           maxW={'xl'} p={{base: 6, md: 20}} py={{base: 16, lg:24}}
           rounded={'xl'}
           >
             <HStack>
               <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}} />
            <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
            ABOUT US
            </Text>
            </HStack>
            <Text textColor='#0e2a4e' fontFamily={'navBarFont'} letterSpacing={'1px'} pb={10} lineHeight={'55px'} fontWeight={800} fontSize='50px'>
            Retreat. Rest. Rejuvenate
            </Text>

            <Box maxW={'9xl'} letterSpacing={'1px'} fontSize={{base: '17px', lg:'15px'}} >
              <Text textColor='#797979' fontWeight={'400'} fontFamily={'bodyFont'} mb={4} >
              The Great Outdoors is the ideal retreat for nature lovers, teams,
              and people that just want to leave the metropolitan hustle & bustle behind, 
              get a breath of fresh air, rest, and rejuvenate in the lap of nature.
              </Text>
              <Text textColor='#797979' fontWeight={'400'} fontFamily={'bodyFont'}   >
              This eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala,
              is a place people come to for unique retreat experiences, 
              unforgettable weekends, relaxation, corporate retreats, and reconnecting with family.
              </Text>
            </Box>

            <Box mt={6}>
              <Button fontFamily={'bodyFont'}>
                Discover More
              </Button>
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

          <Box rounded={'xl'}>
            <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720008924/MG_2634-3-e1671000104768_k2zbhy.jpg'}
              width={1000}
              height={666} 
            />
            </Box>

        </Stack>
        </Box>


        <Box>
        </Box>
      </Box>
  )
}

export default AboutUsComponent