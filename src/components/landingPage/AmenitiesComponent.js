import React from "react";
import { chakra, Box, Flex, Icon, Stack, Text, HStack, Divider } from "@chakra-ui/react";
import { BsPerson } from 'react-icons/bs';


export default function AmenitiesComponent(){
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{ bg: "brand.500" }}
            color="gray"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            fontFamily='navBarFont'

            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }} fontFamily='navBarFont'>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };


  return (
    <Flex
    bg={{base:'#ffffff' , lg:'#0e1720'}}
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            {/* <HStack> */}
                {/* <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}} /> */}
              <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
              AMENITIES
              </Text>
              {/* </HStack> */}
              <Text textColor='#0e2a4e' fontFamily={'navBarFont'} letterSpacing={'1px'} lineHeight={{lg: '55px' ,xl:'55px'}} fontWeight={800} fontSize={{base:'45px' ,lg: '45px', xl:'50px'}}>
              Make Your Stay Memorable
            </Text>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ base:"repeat(3,1fr)",  md: "repeat(3,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Feel nature"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                The resort is right in the forest, and surrounded by airy lush green spaces.
              </Feature>

              <Feature
                title="Open air spaces"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Eat, lounge or just take a walk in the forest, smell the eucalyptus in the air.
              </Feature>

              <Feature
                title="Farm-to-plate"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Fresh food, right from the farm prepared by an experienced chef.
              </Feature>

              <Feature
                title="Swimming Pool"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Two varied sized swimming pools are up and ready for you to take a dive into.
              </Feature>

              <Feature
                title="Pick & Drop Facility"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                For groups and individuals we can arrange your pick-up and drop off.
              </Feature>

              <Feature
                title="Wifi"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Limited wifi due to our remote location, you can access wifi in designated locations
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
