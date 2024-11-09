import { motion } from 'framer-motion';
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

import client from '../../../src/sanity/lib/client'
import { groq } from 'next-sanity'

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export async function getStaticProps() {
  const query = groq`*[_type == "foodPage"][0]{
    heroSection{
      ...,
      ogImage{
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    },
    mainContent,
    foodCards[]{
      ...,
      image{
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    },
    menuSections[]{
      sectionTitle,
      items[]{
        name,
        price,
        description
      }
    },
    seo{
      ...,
      ogImage{
        "url": asset->url,
        "height": asset->metadata.dimensions.height,
        "width": asset->metadata.dimensions.width
      }
    }
  }`
  
  const data = await client.fetch(query)
  
  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}

export default function FoodPage({ data }) {
  const { heroSection, mainContent, foodCards, menuSections, seo } = data

  return (
    <Box>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo?.ogImage?.asset?.url} />
        <meta property="og:image:secure_url" content={seo?.ogImage?.asset?.url} />
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

        <HeadingSection heroSection={heroSection} />

        <Section1 mainContent={mainContent} foodCards={foodCards} menuSections={menuSections} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

const HeadingSection = ({ heroSection }) => {
  return (
    <MotionBox
      width={{ base: "full", sm: "lg", lg: "xl" }}
      margin={"auto"}
      p={{base:8}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <MotionText
        as={chakra.h3}
        fontWeight={"bold"}
        fontSize={20}
        textTransform={"uppercase"}
        color={"white"}
        fontFamily="bodyFont"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {heroSection.subtitle}
      </MotionText>
      <MotionHeading
        as={"h1"}
        mb={{ base: 2, md: 10 }}
        fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
        minHeight={"1vh"}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="purple.900"
        textAlign="center"
        fontFamily={'navBarFont'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <MotionText
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          color={"white"}

          // bgGradient="linear(to-r, blackAlpha.800, #0e2a4e)"
          fontWeight="extrabold"
          _hover={{
            transform: "scale(1.005)",
            filter: "brightness(120%)",
          }}
          py={6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {heroSection.title}
        </MotionText>
      </MotionHeading>
      <MotionText
        as={chakra.h2}
        margin={"auto"}
        width={"100%"}
        fontWeight={"medium"}
        fontSize={"lg"}
        mt={{ base: -2, md: -8, lg: -8 }}
        fontFamily={"bodyFont"}
        color={"white"}

        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {heroSection.description}
      </MotionText>
    </MotionBox>
  )
}

const Section1 = ({ mainContent, foodCards, menuSections }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
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
        <Section1Content mainContent={mainContent} foodCards={foodCards} menuSections={menuSections} />
      </Container>
    </MotionBox>
  )
}

const Section1Content = ({ mainContent, foodCards, menuSections }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Box p={{base: 2, md: 12, lg: 16}}>
        <Box>
          <HStack>
            <Divider borderColor='#cf2e2e' w={{base: '35px', lg: '45px'}} />
            <Text textColor='#cf2e2e' fontFamily={'redTopFont'} fontSize={'sm'}>
              {mainContent.subtitle}
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
              {mainContent.title}
            </Text>
        </Box>

        <Box>
          <Text 
                    textColor={'gray.600'}
                    fontFamily={'bodyFont'}  
                    fontSize={{base:'sm', md: 'lg'}} 
                    py={2} fontWeight={400}>
                    {mainContent.description}
                  </Text>
                  <Text 
                    textColor={'gray.600'}
                    fontFamily={'bodyFont'}  
                    fontSize={{base:'sm', md: 'lg'}} 
                    py={2} fontWeight={400}>
                    Open Days: {mainContent.openingDays}
                  </Text>
                  <Text 
                    textColor={'gray.600'}
                    fontFamily={'bodyFont'}  
                    fontSize={{base:'sm', md: 'lg'}} 
                    py={2} fontWeight={400}>
                    Open Timing: {mainContent.openingHours}
                  </Text>
        </Box>

        <FoodCards items={foodCards} />

        <Box py={10} textAlign="center">
          <Text 
            fontFamily={'navBarFont'} 
            fontSize={{ base: '60px', lg: '65px' }} 
            fontWeight={700} 
            color="#0e2a4e"
          >
            Menu
          </Text>
        </Box>

        {menuSections.map((section, index) => (
          <MenuSection 
            key={index}
            title={section.sectionTitle}
            items={section.items}
          />
        ))}
      </Box>   
    </MotionBox>
  )
}

const FoodCards = ({ items }) => {
  return (
    <MotionBox>
      <Box p={{ base: 2, md: 0, lg: 0 }} mt={{base: 10, md: 8, lg: 12}} bg="white">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={{ base: 8, md: 12, lg: 16 }}
        >
          {items.map((item, index) => (
            <Box 
              key={index}
              height={{ base: "400px", md: "500px", lg: "550px" }}
              display="flex"
              flexDirection="column"
              overflow="hidden"
              borderRadius="8px"
              boxShadow="lg"
            >
              <Box 
                position="relative"
                height={{ base: "300px", md: "350px", lg: "400px" }}
                width="100%"
              >
                <Image
                  src={item.image.url}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px'
                  }}
                  priority
                />
              </Box>
              <Box 
                p={6}
                flex="1"
                bg="white"
              >
                <Text
                  fontFamily={'navBarFont'} 
                  letterSpacing={'1px'} 
                  pb={{base:2, md: 2, lg: 2, xl: 2}} 
                  lineHeight={{lg: '55px' ,xl:'55px'}} 
                  textColor='#0e2a4e'
                  textAlign={'left'}
                  fontWeight={800} 
                  fontSize={{base:'25px' ,lg: '35px', xl:'40px'}}
                >
                  {item.title}
                </Text>
                <Text 
                  textColor={'gray.600'}
                  fontFamily={'bodyFont'}  
                  fontSize={{base:'sm', md: 'lg'}} 
                  py={2} 
                  fontWeight={400}
                >
                  {item.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MotionBox>
  )
}

const MenuSection = ({ title, items }) => {
  const styles = getCommonStyles()
  
  return (
    <Section
      title={title}
      items={items}
      renderItem={(item, index, styles) => (
        <Box key={index}>
          <Text {...styles.nameFontStyles}>
            ● {item.name}:- {item.price}
          </Text>
          {item.description && (
            <Text {...styles.descriptionFontStyles}>
              {item.description}
            </Text>
          )}
        </Box>
      )}
    />
  )
}

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
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }} // Adjust delay as needed
    >
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
    </MotionBox>
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