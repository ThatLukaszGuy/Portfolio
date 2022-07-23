import React, { useRef } from 'react'
import { Box, Text , Button,Tooltip, Badge} from '@chakra-ui/react'
import Link from 'next/link'
import { BsLink45Deg } from 'react-icons/bs'


export const Portfolio = () => {

  return (
    <Box  p={3} >
        <Text mb={3} textColor={'white'}   fontWeight={600} fontSize={{ md: '4xl', base: '3xl' }}  >
            <span className='borde border-b-4 border-pink-700'>
                Hey, hey wait up...
            </span>
            <Tooltip hasArrow placement={'right'} label='Cool Camel' bg={'customGray.900'}>
                <span >🐫</span>
            </Tooltip>
        </Text> 
        <Text mb={2} textColor={'gray.500'} className='' fontWeight={400} fontSize={{ md: 'xl', base: 'lg' }}  as='em' >This site itself was quite a large project in itself.</Text>
        <Text mb={4} textColor={'gray.400'} className='' fontWeight={300} fontSize={{ md: '2xl', base: 'xl' }}  >Many technologies were used here including e.g.
        NextJS , WebGL or MongoDB. However
        if you&apos;re curious about how & what exactly was used to create this Portfolio , you should checkout the page to which the button below will redirect you. And if you don&apos;t want to , just keep scrolling :) 
        </Text>     
        <Link href={'/projects/portfolio'}>
            <Button    className='pinkBtn border-2 border-pink-900  hover:bg-gray-800' rightIcon={<BsLink45Deg />}  colorScheme='tailwindPink' variant='ghost' ><a>Click Me!</a></Button>
        </Link>

    </Box>
  )
}
