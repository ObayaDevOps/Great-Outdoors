'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import NextLink from 'next/link'
import Image from 'next/image'



const Logo = (props) => {
  return (
    <Box p={4}>
        <Image src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723819779/tgo-logo-white_rnomcw.png'} 
        width={800/6} height={529/6}/>
    </Box>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('purple.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('purple.400', 'whiteAlpha.200'),
      }}>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={'#0e1720'}
      position='relative'
      // left='0'
      bottom='0'
      width='100vw'
      // h={'360px'}
      // mb={'-40vh'}
        // overflow='-moz-hidden-unscrollable'
        >
      <Container as={Stack} maxW={'7xl'} py={12}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr  2fr' }}
          spacing={8}>
          <Stack spacing={{base: 4,md:2}}>
            <Box>
              <Logo  />
            </Box>

            <Stack direction={'row'} spacing={4}>
              <SocialButton  label={'LinkedIn'} href={'/#'}>
                <FaLinkedinIn />
              </SocialButton>
              <Button as='a' href='https://www.dralegawebops.com/' size='sm' colorScheme='red' fontSize={{base:'xs',md:'xs'}}
                variant="outline"
                color='white'
                fontFamily='navBarFont'
                borderRadius='3px'
                boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')} >
              Built by DWO
             </Button>

            </Stack>
            <Box>
            <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>© 2024 Great Outdoors Ltd. All Rights Reserved</Text>
            </Box>

          </Stack>
          {/* <Stack align={'fl'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              Contact us
            </Box>
            <Box as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack> */}

          
          <Stack align={{base:'flex-start', md:'flex-end'}} pt={{md:4}}>
            <Box>
                <Text fontSize={'lg'} fontFamily='navBarFont' textColor='white'>manager@greatoutdoorsuganda.com</Text>
            </Box>
            <Box>
                <Text fontSize={'lg'} fontFamily='navBarFont' textColor='white'>+256 701519853</Text>
            </Box>
            <Box>
                <Text fontSize={'lg'} fontFamily='navBarFont' textColor='white'>Kalanamu, Gayaza Rd</Text>
            </Box>
          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  )
}