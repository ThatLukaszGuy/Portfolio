"use client"
import React, {useRef, useEffect, useState} from 'react'
import { Text,Button,Flex, useDisclosure,Box,Slide } from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa'
import { GrDocumentText } from 'react-icons/gr'
import styles from './Contact.module.css'
import PrivacyDrawer from '../Layout/PrivacyDrawer';
import { motion } from 'framer-motion'


export const ContactBanner = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoaded, setIsLoaded] = useState(false)
    const btnRef = useRef()
    
    // parallax
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    
    
    useEffect(() => {
      setIsLoaded(true)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll' , handleScroll)
    }, [])

    return (
    <div className={styles.ContactBG}>
        <Box 
        className='   grid grid-cols-1 md:grid-cols-2  pt-[100px]  px-[5vh]'

         
        >
            
              <div 
              style={{ transform: `translateX(${offsetY * -0.5}px)` }}
              className='max-h-[90vh] mb-5 grid grid-cols-1 place-items-center'>
                  <motion.div 
                  className='h-[70%]'
                  initial='hidden'
                  animate='visible'
                  variants={{
                   hidden: {
                     marginLeft: -10000, 
                     scale: 1,
                     opacity: 1
                   },
                   visible: {
                     scale: 1,
                     opacity:1,
                     marginLeft: 0,
                     transition: {
                       delay: 0,
                       type: "spring", 
                       stiffness: 30
                     }
                   }
                  }}
                  
                  >
                  <Text fontSize={{md: '7xl', base: '6xl'}} textAlign={{ md: 'left' , base: 'center'}} color='#ffffff' className=' font-extrabold landing-header '>Get in<br/> Contact</Text>
                  <Flex justifyContent={{ md: 'start' , base: 'center'}} flexDirection={'row'}>
                      <Button onClick={onOpen} ref={btnRef} className='whiteBtn' mt={5}  mx={2} leftIcon={<GrDocumentText/>}>
                          Privacy Policy
                      </Button>
                      <Button className='pinkBtn' onClick={() => window.location.href='/contact#formID'}  mt={5} colorScheme={'tailwindPink'} rightIcon={<FaPhone />} mx={2}>
                          Now 
                      </Button>

                  </Flex>
                  </motion.div>
              </div>
            
            <PrivacyDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
           
              <div 
              className='h-[90vh]' style={{ transform: `translateX(${offsetY * 0.5}px)` }} 

              >
                  <motion.img 
                  className='h-[70%] md:mt-10 mt-3'  src='/images/contactred.svg' alt='contact' 
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {
                      marginLeft: 10000, 
                      scale: 1,
                      opacity: 1
                    },
                    visible: {

                      scale: 1,
                      opacity:1,
                      marginLeft: 0,
                      transition: {
                        delay: 0,
                        type: "spring", 
                        stiffness: 30
                      }
                    }
                   }}
                   
                  
                  />
              </div>
         
        </Box>
    </div>
  )
}
/**
 *         as={motion.div}
         initial='hidden'
         animate='visible'
         variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity:1,
            transition: {
              delay: .2
            }
          }
         }}
 * 
 */