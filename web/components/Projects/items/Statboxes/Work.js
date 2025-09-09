import React,{useRef} from 'react'
import { Text,Box, Flex, Divider} from '@chakra-ui/react'
import styles from '../../../TechStack/Tech.module.css'
import { MdCheckCircle, MdSettings } from 'react-icons/md'
import Swal from 'sweetalert2'
import { useInViewport } from 'react-in-viewport'

export default function Work() {

    return (
        <div>
            <Text color={'white'} fontSize='3xl' my={4} >
                <span className={styles.blueTS}><span className={styles.hash}>#</span> Work Experience:</span>
            </Text>
            
            <Flex>
                <Box
                    my={4}
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg={'customGray.900'}
                    maxW="4xl"
                    w={'4xl'}
                  >
               
                    <Box mt={2}>
                      <Text
                        fontSize="2xl"
                        color="white"

                        fontWeight="700"

                      >
                        <span className='text-pink-700'>#</span>Previous work places
                      </Text>
                      <Text
                        my={2}
                        color="gray.300">
                        <span className='text-pink-700 italic'>2025</span><span className='font-bold'> - Zebra & Pig (Part Time) - </span> Part Time work as a full stack developer, working both front end and server side with Typescript mainly in the NuxtJS Framework. Additionally helping with building microservices.
                      </Text>
                      <Divider />
                      <Text
                        my={2}
                        color="gray.300">
                        <span className='text-pink-700 italic'>2022</span><span className='font-bold'> - Hochtief Polska S.A (Internship) - </span>Familiarization with company&apos;s operations in the fields of accounting and finance
                      </Text>
                      <Divider />
                      <Text
                        my={2}
                        color="gray.300">
                        <span className='text-pink-700 italic'>2022</span><span className='font-bold'> - Hochtief Polska S.A - </span>Updating the company website along with verification of coherency & consistency of project data on different parts of the site
                      </Text>
                      





                    </Box>
                  </Box>
            </Flex>
            
        </div>
    )
}