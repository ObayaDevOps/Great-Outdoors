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
  Stack,
  HStack,
  VStack,
  Button,
  Center,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'

import Head from 'next/head';
import Image from 'next/image'

import Carousel from '../../components/carousel3'

import NavBar from '../../components/navbar' 
import Footer from '../../components/footer' 



export default function FoodPage() {
  return (
    <Box>
    <Head>
      <title>Restaurant | Great Outdoors</title>
      <meta name="description" content="Retreat.Rest.Rejuvenate" />

      <meta property="og:title" content="Great Outdoors Kalanamu" />
      <meta property="og:description" content="Eco-friendly forest resort, located only 45 minutes (about 35km) drive from Kampala" />
      <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
      <meta property="og:url" content="https://greatoutdoorsuganda.com/" />
      <meta property="og:type" content="website" />


      <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716989029/tgo-logo-e1671037379448_tee1nd.png" />
    </Head>

      <Box>
        <NavBar />
      </Box>

      <Box
        pt={{ base: 32, md: 44 }}
        // pb={{ base: 32, md: 0 }}

        // bgGradient='linear(to-br, #0e2a4e, whiteAlpha.100)'
        // bg={'#0e2a4e'}
        bg={'#0b1722'}
        // bgImage={
        //   "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101678/IMG_3959-scaled_jd1awh.jpg"
        // }
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"
      >

        <HeadingSection />

        <Section1 />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

const HeadingSection = () => {
  return (
    <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"} p={{base:8}}>
    <chakra.h3
      fontWeight={"bold"}
      fontSize={20}
      textTransform={"uppercase"}
      color={"white"}
      fontFamily="bodyFont"
      align="center"
    >
      FARM TO PLATE
    </chakra.h3>
    <Heading
      as={"h1"}
      mb={{ base: 2, md: 10 }}
      fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
      minHeight={"1vh"}
      fontWeight="bold"
      lineHeight="none"
      letterSpacing={{ base: "normal", md: "tight" }}
      color="purple.900"
      textAlign="center"
      fontFamily={'navBarFont'}             >
      <Text
        display={{
          base: "block",
          // lg: "inline",
        }}
        w="full"
        bgClip="text"
        color={"white"}

        // bgGradient="linear(to-r, blackAlpha.800, #0e2a4e)"
        fontWeight="extrabold"
        transition="all .65s ease"
        _hover={{
          transform: "scale(1.005)",
          filter: "brightness(120%)",
        }}
        py={6}
      >
        Restaurant
      </Text>
    </Heading>
    <chakra.h2
      margin={"auto"}
      width={"100%"}
      fontWeight={"medium"}
      fontSize={"lg"}
      color={useColorModeValue("gray.900", "gray.400")}
      mt={{ base: -2, md: -8, lg: -8 }}
      fontFamily={"bodyFont"}
      color={"white"}

      align="center"
    >
      Freshly prepared meals enjoyed in open air spaces.
 
    </chakra.h2>
  </Box>
  )
}

    const slides =[
        {   
            img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg",
            width: 770,
            height: 300,
            caption: "Great Outdoors",
            label: "At Home in Nature",
    
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Cozy Cottages",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Corporate Retreats",
        
        },
        
        
      ] 

//Make this into a Carousel
const Section1 = () => {
  return (
    <Container
    maxW={{ base: "95%", md: "90%" }}
    // py={4}
    p={{base: 6, md: 12, lg: 16}}
    minHeight={{ base:'100vh', md: "110vh" }}
    // background="rgba(240,255,244,0.55)"
    bg="white"
    rounded="3xl"
    shadow="2xl"
    border={"1px"}
    borderColor={"white"}
    mt={{ base: "10vh", lg: "25vh" }}
  >
      <Section1Content />
    </Container>
  )
} 

const Section1Content = () => {
  return (
    <Box>

      <Box>
      <HStack mt={{base:6,  md:2}}>
          <Divider borderColor='#cf2e2e'  w={{base: '35px', lg: '45px'}}  />
            <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
            FARM TO PLATE
            </Text>
        </HStack>        
        <Text
        fontFamily={'navBarFont'} 
        letterSpacing={'1px'} 
        pb={{base:2, md: 2, lg: 2, xl: 2}} 
        lineHeight={{lg: '55px' ,xl:'55px'}} 
        // textColor='white'
        textColor='#0e2a4e'
        textAlign={'left'}
        fontWeight={800} 
        fontSize={{base:'35px' ,lg: '35px', xl:'50px'}}
        >
          Freshly prepared meals enjoyed in open air spaces.

        </Text>
      </Box>

      <Box>
      <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
                It is said that food is symbolic of love when words are inadequate. To that end, our meals are prepared and served with love, and our expert chefs make sure to prepare a range of dishes.
                 From continental dishes, to local Ugandan foods, your tastebuds will experience a full range of culinary delights. Get ready to indulge!
                </Text>
                <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
                Open Days: Monday - Saturday
                </Text>
                <Text 
                textColor={'gray.600'}
                fontFamily={'bodyFont'}  
                fontSize={{base:'sm', md: 'lg'}} 
                py={2} fontWeight={400}>
                Open Timing: 7:00am - 10:00pm
                </Text>
      </Box>
      <Box p={{ base: 0, md: 20 }} display="flex" justifyContent="center" alignItems="center">
      <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg'}

              width={1024}
              height={683}
              borderTopRadius="xl"
              objectFit="cover"
              w="100%"
              h={{ base: "200px", md: "250px", lg: "300px" }}
            />
            </Box>  

      <FoodCards />

      <BreakfastSection />


      <SnacksSection />


      <StartersSection />

    <PastaSection />

    <MainCourseSection />

      <PorkKitchenSection />

      <SandwichesSection />


      <DessertsSection />



      <BeveragesSection />



    </Box>   
  )
}


const foodItems = [
  {
    title: "Fresh fruit juices",
    description: "If health could be blended, and served to you in a glass...this is probably what it would taste like.",
    image: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
    width: 1920,
    height: 1280,
  },
  {
    title: "Snacks & quick bites",
    description: "Depending on how long your are staying these always come in handy.",
    image: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
    width: 1920,
    height: 1280,
  },
  {
    title: "a'la carte & continental",
    description: "If you and the family are in the mood for some a' la carte joy, you are welcome.",
    image: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
    width: 1920,
    height: 1280,
  },
  {
    title: "Local delicacies & custom orders.",
    description: "We usually have a buffet of local delicacies, you can also customize your menu ahead of your visit.",
    image: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
    width: 1920,
    height: 1280,
  },
];

const FoodCards = () => {
  return (
    <Box p={{ base: 6, md: 12, lg: 16 }} bg="white" >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 12, lg: 16 }}
      >
        {foodItems.map((item, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            shadow="lg"
            _hover={{ transform: "scale(1.02)", transition: "all 0.3s ease-in-out" }}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
              borderTopRadius="xl"
              objectFit="cover"
              w="100%"
              h={{ base: "200px", md: "250px", lg: "300px" }}
            />

            {/* Content */}
            <Box p={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="left"
                fontFamily="navBarFont"
                color="#0e2a4e"
                mb={4}
              >
                {item.title}
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                textAlign="left"
                fontFamily="bodyFont"
                color="gray.600"
              >
                {item.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};




const breakfastOptions = [
  {
    name: "Option 1",
    price: "40,000",
    description:
      "Vegetable katogo or potato wedges, eggs of your choice, toasted bread, pair of sausages, pancake or waffle, creamed spinach, baked beans, fruits, juice, coffee or tea",
  },
  {
    name: "Early Riser Breakfast",
    price: "35,000",
    description:
      "Eggs of your choice, pair of sausages, grilled tomatoes, home fries, juice, baked beans, coffee or tea",
  },
];

// Common styles
const getCommonStyles = (textColor = "#0e2a4e") => ({
  nameFontStyles: {
    fontFamily: "navBarFont",
    textColor,
    textAlign: { base: "center", md: "left" },
    fontSize: { base: "lg", lg: "lg", xl: "2xl" },
    fontWeight: "bold",
  },
  descriptionFontStyles: {
    fontFamily: "bodyFont",
    textColor,
    textAlign: { base: "center", md: "left" },
    fontSize: { base: "md", lg: "md", xl: "lg" },
    pb: 4,
  },
  titleStyles: {
    fontFamily: "navBarFont",
    letterSpacing: "1px",
    pt: 2,
    lineHeight: { lg: "55px", xl: "55px" },
    textColor,
    textAlign: { base: "center", md: "left" },
    fontWeight: 800,
    fontSize: { base: "4xl", lg: "4xl", xl: "5xl" },
    pb: 6,
  },
});

// Common Section component
const Section = ({ title, items, renderItem }) => {
  const styles = getCommonStyles();
  return (
    <Box pt={{base: 6, md: 8, lg: 10}}>
      <Text {...styles.titleStyles}>{title}</Text>
      <Stack
        spacing={{ base: 10, md: 8 }}
        display={{ md: "grid" }}
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap={{ md: 8 }}
        gridRowGap={{ md: 10 }}
      >
        {items.map((item, index) => renderItem(item, index, styles))}
      </Stack>
    </Box>
  );
};

// Existing components refactored to use Section
const BreakfastSection = () => (
  <Section
    title="Continental Breakfast"
    items={breakfastOptions}
    renderItem={(item, index, styles) => (
      <Box key={index}>
        <Text {...styles.nameFontStyles}>● {item.name}:- {item.price}</Text>
        <Text {...styles.descriptionFontStyles}>{item.description}</Text>
      </Box>
    )}
  />
);

const sandwiches = [
  {
    name: "Your Choice Sandwiches",
    price: "25,000",
    description: "Beef or Chicken sandwich with lettuce and mayonnaise spread",
  },
  {
    name: "Pool Club Sandwich",
    price: "30,000",
    description: "A triple decker of chicken, sliced cheese, tomato and onion with lettuce",
  },
  {
    name: "B.E.L.T",
    price: "30,000",
    description: "Crispy Bacon, fried Egg, romaine Lettuce and sliced Tomato",
  },
  {
    name: "Mediterranean Sandwich (VG)",
    price: "25,000",
    description: "Grilled aubergine, carrots, bell peppers, zucchini and tomato marinated with pesto sauce",
  },
];

const SandwichesSection = () => (
  <Section
    title="Sandwiches"
    items={sandwiches}
    renderItem={(item, index, styles) => (
      <Box key={index}>
        <Text {...styles.nameFontStyles}>● {item.name}:- {item.price}</Text>
        <Text {...styles.descriptionFontStyles}>{item.description}</Text>
      </Box>
    )}
  />
);

const pastaDishes = [
  {
    name: "Pasta Bolognaises",
    price: "30,000",
    description: "Choice of pasta gently tossed in a rich meaty sauce topped with cheese",
  },
  {
    name: "Pasta Arrabiata (V)",
    price: "25,000",
    description: "Sautéed pasta in a chili tomato and basil sauce ﬁnished with parmesan cheese",
  },
  {
    name: "Pasta Al’fredo",
    price: "30,000",
    description: "Fettuccine pasta gently cooked in a rich chicken bechamel sauce and parmesan cheese",
  },
];

const PastaSection = () => (
  <Section
    title="Pasta"
    items={pastaDishes}
    renderItem={(item, index, styles) => (
      <Box key={index}>
        <Text {...styles.nameFontStyles}>● {item.name}:- {item.price}</Text>
        <Text {...styles.descriptionFontStyles}>{item.description}</Text>
      </Box>
    )}
  />
);

const starters = [
  {
    name: "Soups :- Chicken & Oyster Mushroom Broth",
    price: "20,000",
    description: "Sautéed chicken and mushroom diced gently simmered in a broth",
  },
  {
    name: "Light Cream of Pumpkin",
    price: "20,000",
    description:
      "Roasted pumpkin with coriander and ginger ﬁnished with fresh cream",
  },
  {
    name: "The Chef’s Salad",
    price: "30,000",
    description:
      "A collection of Chicken or Beef strips with crispy Lettuce, Onions, Cherry Tomatoes, Mozzarella, Eggs and olives served with garlic mayo",
  },
  {
    name: "Garden Salad",
    price: "25,000",
    description:
      "Mesclun, julienne of Mango, Carrot, Cucumber, Bell peppers, Apples, Orange segments, Beetroots, and Avocado tusks. Vinaigrette dressing",
  },
];

const StartersSection = () => (
  <Section
    title="Starters"
    items={starters}
    renderItem={(item, index, styles) => (
      <Box key={index}>
        <Text {...styles.nameFontStyles}>● {item.name}:- {item.price}</Text>
        <Text {...styles.descriptionFontStyles}>{item.description}</Text>
      </Box>
    )}
  />
);

// Simplified sections for items without descriptions
const SimpleSectionComponent = ({ title, items }) => (
  <Section
    title={title}
    items={items}
    renderItem={(item, index, styles) => (
      <Text key={index} {...styles.nameFontStyles}>● {item.name}:- {item.price}</Text>
    )}
  />
);

const snacks = [
  { name: "Fish Fingers", price: "35,000" },
  { name: "Chicken Drumsticks", price: "35,000" },
  { name: "Chicken Nuggets", price: "35,000" },
  { name: "Goat Skewers", price: "35,000" },
  { name: "Beef Burger", price: "35,000" },
];

const SnacksSection = () => <SimpleSectionComponent title="Snacks" items={snacks} />;

const mainCourses = [
  { name: "Double Chicken Supreme", price: "40,000" },
  { name: "Beef Fillet Steak", price: "45,000" },
  { name: "Tilapia Fillets", price: "40,000" },
  { name: "Whole Tilapia", price: "50,000" },
  { name: "Goat Stew Navarin", price: "40,000" },
  { name: "Mixed Grill One", price: "295,000" },
  { name: "Mixed Grill Two", price: "295,000" },
  { name: "Vegetable Curry(V)", price: "30,000" },
];

const MainCourseSection = () => <SimpleSectionComponent title="Main Course" items={mainCourses} />;

const porkDishes = [
  { name: "Pork Sizzler", price: "45,000" },
  { name: "Pork Spareribs", price: "40,000" },
  { name: "Grilled Porkchops", price: "40,000" },
  { name: "Pork Wrap", price: "35,000" },
  { name: "Pork Melly", price: "95,000" },
  { name: "Pork Molokini", price: "55,000" },
  { name: "Whole Pork Head", price: "250,000" },
];

const PorkKitchenSection = () => <SimpleSectionComponent title="Pork Dishes" items={porkDishes} />;

const desserts = [
  { name: "Kalanamu fruit delight", price: "20,000" },
  { name: "Pineapple crumble", price: "20,000" },
  { name: "Apple Pie", price: "20,000" },
  { name: "Ice Cream", price: "20,000" },
  { name: "Cream Caramel", price: "20,000" },
];

const DessertsSection = () => <SimpleSectionComponent title="Desserts" items={desserts} />;

const beverages = [
  { name: "Freshly squeezed juice", price: "10,000" },
  { name: "Smoothie", price: "12,000" },
  { name: "Soda", price: "2,000" },
  { name: "Beers", price: "-6,000" },
  { name: "Tea", price: "10,000" },
  { name: "Green Detox", price: "12,000" },
];

const BeveragesSection = () => <SimpleSectionComponent title="Drinks" items={beverages} />;

// Export all components
export {
  FoodCards, BreakfastSection, SandwichesSection, PastaSection, StartersSection,
  SnacksSection, MainCourseSection, PorkKitchenSection, DessertsSection, BeveragesSection
};