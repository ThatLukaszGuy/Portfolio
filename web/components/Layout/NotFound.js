import React from 'react'
import styles from './layout.module.css'
import { 
  Text,
  Flex,  
  Alert,
  AlertIcon, Badge
} from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa'
import { GrDocumentText } from 'react-icons/gr'
import Link from 'next/link'

export const NotFound = () => {
  return (
    <div className={styles.NotFoundBG}>
<div className='   grid grid-cols-1 md:grid-cols-2  pt-[100px]  px-[5vh]'>
            <div className='max-h-[90vh] mb-10  grid grid-cols-1 place-items-center'>
                <div className='h-[70%]'>
                <Text fontSize={{md: '7xl', base: '6xl'}} textAlign={{ md: 'left' , base: 'center'}} color='white' className=' font-extrabold landing-header blueTS'>...OOPs<br/> </Text>
                <Text fontSize={{md: '3xl', base: '2xl'}} textAlign={{ md: 'left' , base: 'center'}} color='white' className=' font-extrabold landing-header pinkTS'>The Page you requested couldn&apos;t be found</Text>
                <Flex justifyContent={{ md: 'start' , base: 'center'}} flexDirection={'row'}>
                <Alert status='warning' mt={5} mr={3} variant='left-accent'>
                  <AlertIcon />
                      <Text>Try double checking the url you entered or simply return home. The original Link might have been moved or edited. You may also check out the <Link href={'/issues'}><a><Badge  colorScheme='orange' variant='solid' >Issues</Badge></a></Link>  section
                      </Text>
                </Alert>

                </Flex>

                </div>
            </div>
            <div className='hidden  h-[90vh] md:grid grid-cols-1 place-items-center'>
                <img className='h-[70%]'  src='/images/notfoundpage.svg' alt='contact' />
            </div>
        </div>  
    </div>
  )
}
