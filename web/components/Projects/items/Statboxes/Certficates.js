import React,{useRef} from 'react'
import { Text,Box,Flex, Link} from '@chakra-ui/react'
import styles from '../../../TechStack/Tech.module.css'
import { useInViewport } from 'react-in-viewport'

export default function Certificates() {
    
    const repoRef = useRef(null)
    
    return (
        <div>
            <Text color={'white'} fontSize='3xl' >
                <span className={styles.blueTS}><span className={styles.hash}>#</span> Certificates:</span>
            </Text>
                <Cert 
                  title={'FreeCodeCamp: Responsive Web Design'} 
                  desc={'Developer certification representing the skills in the area of web development and web design.'}
                  link={'https://www.freecodecamp.org/certification/thatlukaszguy/responsive-web-design'}
                  short={'fcc'}
                  />
                <Cert 
                  title={"FreeCodeCamp: Backend Development and API's"} 
                  desc={'Developer certification representing the skills in the area of developing a multitude of different backend micro-services'}
                  link={'https://www.freecodecamp.org/certification/thatlukaszguy/back-end-development-and-apis'}
                  short={'fcc'}
                  />
        </div>
    )


}

const Cert = ({title, desc, link, short}) => {

  return (
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
                        <span className='text-pink-700'>#</span>{title}
                      </Text>
                      <Text
                        mt={2}
                        color="gray.300"
                      >
                       {desc}
                      </Text>
                    </Box>
                
                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                      <Link
                        color="gray.400"
                        _hover={{
                          textDecor: "underline",
                          textColor: 'gray.500'
                        }}
                        target='_blank'
                        href={link}
                      >
                        Verify
                      </Link>
                
                      <Flex alignItems="center">
                        <Text
                          color="white"
                          fontWeight="700"
                        >
                         {short}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
    </Flex>
  )
}