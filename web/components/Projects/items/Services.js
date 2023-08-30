"use client"
import { useState,useEffect } from "react"
import { Box, SimpleGrid, Icon, Text, Stack, Flex, SlideFade } from "@chakra-ui/react"
import {DiCodeBadge,DiRust,DiJsBadge} from 'react-icons/di'
import styles from '../../TechStack/Tech.module.css'

const Feature = ({title, text, icon}) => {
    return (
        <Stack align={'center'}>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'customGray.900'}
                mb={1}
            >
                {icon}
            </Flex>
            <Box >
                <Text
                    textAlign={{base:'center', md:'left'}}
                    fontSize="lg"
                    color="white">
                    <span className='text-pink-700'>#</span>{title}
                  </Text>
            <Text textAlign={{base:'center', md:'left'}} color={'gray.300'}>{text}</Text>
            </Box>

        </Stack>
    )
}

{/**
Add Animation so each pops out from left to right after the other


*/}

export default function Services() {

    const [ isLoaded, setIsLoaded ] = useState(false)
  
    useEffect(() => {
      setIsLoaded(true)
    },[])

    return (
        <Box mb={8}>
            <SlideFade in={isLoaded} delay={0.4}>
                <Text color={'white'} fontSize='3xl' mb={6}>
                <span className={styles.blueTS}><span className={styles.hash}>#</span> Contact me to work together on:</span>
                </Text>
            </SlideFade>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
                    
                <SlideFade in={isLoaded} delay={0.4}>
                    <Feature 
                            icon={<Icon as={DiJsBadge} w={8} h={10}/>}
                            title={"WebApps"}
                            text={"Compex Fullstack Web Apps. Ranging from small Single Page Apps to more complex Multi Page Apps"}
                        />

                </SlideFade>
                
                <SlideFade in={isLoaded} delay={0.6}>
                    <Feature
                            icon={<Icon as={DiRust} w={12} h={12}/>}
                            title={"Utility Scripts"}
                            text={"Small Automation scripts, CLI Apps or just generally useful tools"}
                        />
                </SlideFade>
                
                <SlideFade in={isLoaded} delay={0.8}>
                    <Feature
                            icon={<Icon as={DiCodeBadge} w={10} h={10}/>}
                            title={"Other"}
                            text={"May include little desktop apps, ML models, games. Contact for further details"}
                        />
                </SlideFade>

            </SimpleGrid>
        </Box>
    )
}