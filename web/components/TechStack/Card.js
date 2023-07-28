"use client"
import React from 'react'
import { Box,Flex,Text, Image} from '@chakra-ui/react'
import styles from './Tech.module.css'


export const Card = ({ name, description,  img }) => {

  // NEEDED
  const SVG = Buffer.from(img.data, "base64").toString()
  return (
    <Box bg={'customGray.600'} p={5} rounded={'lg' } borderWidth='1px'    className=' border-gray-900 hover:cursor-pointer shadow-2xl'>
        <Flex align={'center'}>
          <Box bg={'gray.500'} p={2} rounded={'lg'}>
            <Image alt='' height={''} maxHeight={'40px'} maxWidth='40px' width={'40px'}/>
            <div dangerouslySetInnerHTML={{ __html: SVG }} />
          </Box>



          <Box ml={6}>
            <Text fontWeight={'600'} fontSize={'2xl'} color={'white'}> 
              <span className={styles.hash}>#</span> {name}
            </Text>
            <Text fontSize={'md'} color='gray.300'>
              {description}
            </Text>
          </Box>
          
        </Flex>
    </Box>
  )
}
