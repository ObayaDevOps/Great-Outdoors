'use client'

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head';


const testimonials = [
  {
    name: 'ISU, Board of Directors',
    role: 'Governance Course ',
    content: 'Your flexibility and willingness to rethink the agenda midway was necessary to ensure the successful outcomes.',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637864/images_1_jje5hj.jpg',
  },
  {
    name: 'Little Cranes Montessori Kindergarten, Headteacher',
    role: 'Professional Development Course',
    content: 'Well-equipped and well-informed about the specific field. Variety of examples to study and good use of the tangible material. No room for detachment!',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637805/images_fjxltj.jpg',
  },
  {
    name: 'Taibah International School, Headteacher',
    role: 'School Operations Audit & Review Course',
    content: 'Thorough and very useful in giving us a clear view of areas of strength and our overlooked areas.',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637806/Taibah-International-School-logo-300x155_kzzuvd.jpg',
  },
  {
    name: 'The North Green School, Director',
    role: 'School Start Up Course',
    content: 'The Consultantcy support received was beyond exceptional. It exceeded our expectations!',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637987/images_2_zpvxof.jpg',
  },
  {
    name: 'Kings International School Kampala, Director',
    role: 'Equipping Leaders Course',
    content:'​I just wanted to write and let you know how much we have enjoyed having you coach us. You really are an extremely good communicator. Everything we\'ve heard or discussed with you has been exactly what we\'ve needed to hear. You are really, really good at your job! ',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637806/thTJLxxo_400x400_jgniba.jpg',
  },
]

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

export default function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props
  return (
    <Flex
      boxShadow={'md'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
      border={'1px'}
      borderColor={'purple.600'}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
      >
      <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
        <chakra.p fontFamily={'bodyFont'} fontWeight={'medium'} fontSize={'lg'} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'bodyFont'} fontWeight={'bold'} fontSize={'lg'}>
          {name}
          <chakra.span fontFamily={'bodyFont'} fontWeight={'medium'} color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  )
}

 function GridBlurredBackdrop() {
  return (
      <Box py={6} >
        <Container 
            maxW={{base:'1xl',md:'85vw'}} 
            py={6} 
            minHeight={{md:'110vh'}}   
            // background="rgba(240,255,244,0.55)"
            bg='whiteAlpha.600'
            rounded='3xl' 
            shadow='2xl'
            border={'1px'}
            borderColor={'purple.600'}    
        >
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}
          fontFamily='bodyFont'
          >
          Past Client Testimonials
        </chakra.h3>
        <Heading
          as={'h1'}
            mb={{base: 2, md: 10}}
            fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
            minHeight={'1vh'}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{base: "normal",md: "tight" }}
            color="purple.900"
            textAlign='center'
            fontFamily={'bodyFont'}
          >
            <Text
              display={{
                    base: "block",
                              // lg: "inline",
                          }}
                          w="full"
                          bgClip="text"
                          bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                          fontWeight="extrabold"
                          transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                          py={10}
                          
                          >
              Course Evaluations
            </Text>
          </Heading>
        <chakra.h2
          margin={'auto'}
          width={'100%'}
          fontWeight={'medium'}
          fontSize={'lg'}
          color={useColorModeValue('gray.500', 'gray.400')}
          mt={{lg:-4}}
          fontFamily={'bodyFont'}

          >
          ​Following their team training, participants from Kampala were asked to reflect on their experience.
        </chakra.h2>
      </Box>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={{base:10, lg:8}} mb={16} mx={'auto'}>
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>

    </Flex>
    </Container>
    </Box>
  )
}