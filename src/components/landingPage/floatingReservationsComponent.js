import React from 'react'

import { 
  Box, 
  Flex, 
  Center,  
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  SimpleGrid,
  Stack,
  HStack,

 } from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const FloatingReservationsComponent = () => {
  return (
    <Center minH={'20vh'}  >
      <Center 
      rounded={'2xl'}
      w={'90vw'}
      py={4}
      border={'2px'}
      bg={'white'}
      >
        <Stack direction={{base:'column',lg: 'row'}} >
        <Box my={2}  >
          <HStack>
            <Box mx={2}>
              <DatePicker
                showIcon 
                // inline
                // border='2px'
                placeholderText='Arrival Date'
                style={{ border: "solid 1px pink" }}
                // selected={searchDate} 
                // onChange={handleDateSelect} 
                />
            </Box>

            <DatePicker
              showIcon 
              // inline
              placeholderText='Departure Date'
              // selected={searchDate} 
              // onChange={handleDateSelect} 
              />
          </HStack>

              </Box>

          <HStack>
            <FormControl>
            {/* <FormLabel>No. Of Adults</FormLabel> */}
            <Select 
              placeholder='Adults' 
              fontFamily={'navBarFont'}   
              id="adults"
                name="adults">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Select>
            </FormControl>

            <FormControl>
            {/* <FormLabel>No. Of Children</FormLabel> */}
            <Select 
              placeholder='Children'
              fontFamily={'navBarFont'}  
              id="children"
                name="children">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Select>
            </FormControl>
          </HStack>

          <Flex>
            <Button
            type="submit"
              colorScheme="red"
            

              // bg="purple.400"
              color="white"
              _hover={{
                bg: 'purple.500',
              }}
              fontFamily={'navBarFont'}
              isFullWidth
              >
              Check Availability
            </Button>
          </Flex>
          </Stack>
      </Center>
    </Center>
  )
}

export default FloatingReservationsComponent
