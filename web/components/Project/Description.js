"use client"

import { RiPushpinFill } from 'react-icons/ri'
import { FaMountain } from 'react-icons/fa'
import { BsLightbulbFill } from 'react-icons/bs'
import React, {useEffect,useState} from 'react'
import styles from './Project.module.css'

import { Flex,Image,Text,Box,SlideFade } from '@chakra-ui/react'
import { useInViewport } from 'react-in-viewport'

export const Description = ({ project }) => {
  
    const [ isLoaded, setIsLoaded ] = useState(false)
  
    useEffect(() => {
      setIsLoaded(true)
    },[])


    return (
    <div className={styles.descBG}>

        <div className='px-4'>
            <SlideFade delay={(0.6)} in={isLoaded}>
                <Box   className='container mx-auto mb-8 bg-gray-900 shadow-2xl p-3 sm:p-5 rounded-lg  border-b-4 border-gray-800  z-10'>
                    <Flex align={'center'}   >
                        <Box  my={{ base: '1', sm: '3' }} mx={{ base: '0', sm: '3' }} maxHeight={'600px'}>
                            <Text  fontWeight={600} fontSize={{ md: '4xl', base: '2xl' }}  ml={8} className='flex text-gray-300'>
                                <span className='flex borde border-b-4  border-pink-700'>Overall Info :  </span> <BsLightbulbFill className='mt-2 sm:mt-3 ml-3'/>
                            </Text> 
                            
                            <Text  fontSize={{sm: 'lg',  md: 'xl', base: 'sm' }}  ml={8} mt={5} className='text-gray-400'>
                            
                                {project.description.info}
                            </Text> 

                        </Box>
                    </Flex>
                </Box>
            </SlideFade>
    
            <SlideFade delay={(0.8)} in={isLoaded}>
                <Box   className='container mx-auto mb-8 bg-gray-900 shadow-2xl p-3 sm:p-5 rounded-lg  border-b-4 border-gray-800  z-10'>
                    <Flex align={'center'}   >
                        <Box  my={{ base: '1', sm: '3' }} mx={{ base: '0', sm: '3' }} maxHeight={'600px'}>
                            <Text  fontWeight={600} fontSize={{ md: '4xl', base: '2xl' }}  ml={8} className='flex text-gray-300'>
                                <span className='flex borde border-b-4  ' style={{'borderColor': '#0c8cbf'}}>Reason :  </span> <RiPushpinFill className='mt-2 sm:mt-3 ml-3'/>
                            </Text> 
                            
                            <Text  fontSize={{sm: 'lg',  md: 'xl', base: 'sm' }}  ml={8} mt={5} className='text-gray-400'>
                            
                                {project.description.reason}
                            </Text> 

                        </Box>
                    </Flex>
                </Box>
                </SlideFade>

            <SlideFade delay={(1)} in={isLoaded}>
                <Box   className='container mx-auto  bg-gray-900 shadow-2xl p-3 sm:p-5 rounded-lg  border-b-4 border-gray-800  z-10'>
                    <Flex align={'center'}   >
                        <Box  my={{ base: '1', sm: '3' }} mx={{ base: '0', sm: '3' }} maxHeight={'600px'}>
                            <Text  fontWeight={600} fontSize={{ md: '4xl', base: '2xl' }}  ml={8} className='flex text-gray-300'>
                                <span className='flex borde border-b-4  border-pink-700'>Difficulties :  </span> <FaMountain className='mt-2 sm:mt-3 ml-3'/>
                            </Text> 
                            
                            <Text  fontSize={{sm: 'lg',  md: 'xl', base: 'sm' }}  ml={8} mt={5} className='text-gray-400'>
                            
                                {project.description.difficulties}
                            </Text> 

                        </Box>
                    </Flex>
                </Box>
            </SlideFade>          

        </div>

    </div>
  )
}
