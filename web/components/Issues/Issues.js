"use client"
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import styles from '../TechStack/Tech.module.css'
import { Form } from './Form';

export default function  Issues() {
  return (
    <>
    <Box bg={'customGray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        
        insetY={0}
        right={0}>
        <Flex
          bg={'customGray.800'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={0} position={'relative'}>
        <Stack >
          <Stack
            className='mt-[90px] md:mt-[50px]'
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 50 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                mb={3}
                fontSize={'xl'}
                color={'gray.200'}>
               <span className={styles.blueTS}><span className={styles.hash}>#</span> Issues</span>
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }} >
                <span className='borde border-b-4 border-pink-700'>
                  Found any Issues/Bugs ?
                </span>
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                  Is the 3D Model Laggy, or perhaps an unforseen issue with the layout?<br/>
                  This is the right place for any problems and their fixes.
                  I tried my best to make this site as bugfree as possible however it&apos;s impossible to make any software 100% soundproof.
                  Since I want to make this site as smooth as possible I recommend first reading whether the issue is occurring on the user side and then if you happen to find an unsolved Bug on the websites side , please let me know in the form below.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
    <Form />
    </>
  );
}

const StatsText = ({ children}) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '3D Models',
    content: (
      <>
        <StatsText>Experiencing Lag?</StatsText> This issue mostly occurs on Chrome
        but can also appear on other browsers. In short the 3d models lag due to the browser not using 
        inbuilt hardware acceleration of your own pc. This means all of the rendering instead of being done by your GPU is
        pushed onto something else. To fix just go to chrome setting and enable &quot; 
        use hardware acceleration when available &quot;
      </>
    ),
  },
  {
    title: 'Layout',
    content: (
      <>
        <StatsText>Responsiveness </StatsText> 
        Despite intense testing it is possible to encounter bug regarding how the layout/cards/divs etc. align.
        Although the most popular screensizes like e.g. Laptops, Desktops, Tablets, Mobile should 
        be Bugfree however unusual/rare combinations/ratios of screen height & width can potentially cause problems.
        
      </>
    ),
  },
  {
    title: 'Fetching',
    content: (
      <>
        <StatsText>No Data?</StatsText> This might simply be a network error on either side. Simply try reloading the page. The API (be it the selfmade one or the Github API) might have just not fully loaded.
      </>
    ),
  },
  {
    title: 'Other',
    content: (
      <>
        <StatsText>Unknown</StatsText> If you found something wrong that has not yet been mentioned , please let me know in the anonymous form below
      </>
    ),
  },
];