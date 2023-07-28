"use client"
import { Box, Container,Text,SlideFade } from '@chakra-ui/react'
import React,{useRef} from 'react'
import { Stack } from './Stack'
import styles from './Tech.module.css'
import { useInViewport } from 'react-in-viewport'

export const TechStack = ({ tech }) => {
  
    const techRef = useRef(null)
    const {enterCount} = useInViewport(techRef, {rootMargin: "-15%"} , {disconnectOnLeave:false}, {})
  
    return (
    <div className={styles.techbg}>
        <div className={styles.csd}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.sf}></path>
            </svg>
        </div>

        
            <Container  maxW={'4xl'} pt={{ md: '30vh', base: '15vh' }} id="techstack">
                <Box ref={techRef}>
                    <SlideFade delay={0.1} in={enterCount > 0}>
                            <Text textAlign={'center'} fontWeight={600} fontSize={{ md: '4xl', base: '2xl' }} color={'white'}>
                                <span className=' border-b-4 border-pink-700'>My TechStack</span> 🗃
                            </Text>
                            <Text  textAlign={'center'} mt={5} fontSize={'xl'} color={'white'}>
                                A list of technologies I often use during a project
                            </Text>
                    </SlideFade>
                </Box>
                <Stack tech={tech}/>
                
            </Container>
        
    </div>
  )
}
