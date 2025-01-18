import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      width={{ base: '80%', md: '76%' }} // Responsive width
      margin="0 auto"
      marginTop={{ base: '0rem', md: '-10rem' }} // Responsive margin
      position="absolute"
      left="0"
      right="0"
      background="none"
      display="block"
      // Additional styles can be added here if needed
    >
      <search-availability id="1687"></search-availability> 
    </Box>
  );
}
