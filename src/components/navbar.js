import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Center,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
  } from '@chakra-ui/react';

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import NextImage from 'next/image'


  import NextLink from 'next/link'
  import { MdNightlight } from 'react-icons/md';
  import Script from 'next/script'

//Dynamic Routing for NavBars: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths

  
  function ReservationsButton() {
    return (
        <Button  size={{base:'xs', md: 'sm'}} 
        
        letterSpacing={{base:'1px', md: '2px'}} rounded='sm' 
        colorScheme='red' fontFamily={'redTopFont'}
        // href={'/reservations'}
        >
          <Link href='/reservations' fontSize={{base: '7px', md: 'sm'}} >
            RESERVATIONS
          </Link>
          
        </Button>
    )
  }

  import { FaBeer } from 'react-icons/fa';


  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
  
    return (
      <Box
      zIndex={9999}
      top={{md:'25px'}}
      // left={'0px'}
      position={{base:'absolute', lg: 'absolute'}}
      width={'100vw'}
      align={'center'}
      

      >
        <Flex
        overflow='-moz-hidden-unscrollable'
          bg={useColorModeValue('white', 'gray.800')}
        
          
          color={useColorModeValue('gray.600', 'white')}
          shadow={'xl'}
          w={{base: '100%', md:'90%'}}

          minH={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          rounded={{base: 'none', md: 'lg'}}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('white', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} color='black'  /> : <HamburgerIcon w={5} h={5} color='black' />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>


          <Flex 
            justify={{ base: 'center', md: 'left' }}
            ml={{base:20, md: 8}}
            >
              <NextLink href='/#' passHref>
                    <NextImage 
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png'} 
                    width={70} height={70}/>
              </NextLink>
            </Flex>

          <Box flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-start' }}>
              <Flex display={{ base: 'none', md: 'none' , lg: 'flex'}} justify={{ base: 'center', md: 'center' }} >
                <DesktopNav />
              </Flex>
          </Box>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'right'}
            mr={{base: 0, md:4}}
            direction={'row'}
            spacing={6}>
            <ReservationsButton />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity >
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.800', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const { colorMode, toggleColorMode } = useColorMode()

  
    return (
      <Stack direction={'row'} spacing={4} 
      // paddingTop={1.5}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              {/* <NextLink href={navItem.href ?? '#'} passHref> */}
                <PopoverTrigger>
                  <Link
                  p={2}
                  fontSize={'13px'}
                  letterSpacing={'0.1em'}
                  href={navItem.href ?? '#'}
                  color={linkColor}
                  _hover={{  textColor: 'red.600'}}
                  fontFamily={'redTopFont'}
                  fontWeight={600}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
              {/* </NextLink> */}

  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  fontFamily={'redTopFont'}

                  rounded={'lg'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      // <NextLink href={href} passHref>
      <Link
        role={'group'}
        display={'block'}
        p={2}
        href={href} passHref
        rounded={'md'}
        _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'red.400' }}
              fontWeight={500}
              fontFamily={'redTopFont'}
              _hover={{ color: 'red.400' }}
              >
              {label}
            </Text>

            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-start'}
            align={'left'}
            flex={1}>
            <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
      // </NextLink>

    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={0} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          fontFamily="redTopFont"

          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={400}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={0}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <NextLink href={child.href} key={child.label}  fontFamily={'navBarFont'} passHref>
                  {/* <Link  py={2}  fontFamily="redTopFont" > */}
                    {child.label}
                  {/* </Link> */}
                </NextLink>

              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
    //This array should take items from the Sanity List
  //use the client to fetch the list you want


  const NAV_ITEMS = [
    {
      label: 'HOME',
      href: '/#',
    },
    {
      label: 'GALLERY',
      href: '/gallery',
    },
    {
        label: 'RETREAT',
        href: '/retreat',
    }, 
    {
        label: 'REST',
        children: [
          
          {
            label: 'Cabins',
            // subLabel: '1-2 People',
            href: '/rest/cabins',
          },
          {
            label: 'Cottages',
            // subLabel: '1-2 People',
            href: '/rest/cottage',
          },
          {
            label: 'Twin Cottages',
            // subLabel: '1-4 People',
            href: '/rest/cottage-double-room',
          },
          {
            label: 'Deluxe Rooms',
            // subLabel: '1-2 People',
            href: '/rest/deluxe-room',
          },
          {
            label: 'Twin Deluxe Room',
            // subLabel: '1-2 People',
            href: '/rest/deluxe-room-twin',
          },
        ],
          
    },
    {
      label: 'REJUVENATE',
      children: [
        {
          label: 'Rejuvenate',
          subLabel: '',
          href: '/rejuvenate',
        },
        {
          label: 'Food',
          subLabel: '',
          href: '/rejuvenate/food',
        },
      ],
    }, 
    {
        label: 'CONTACT',
        href: '/contact',
    },
    
  ];

  

