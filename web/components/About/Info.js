import React,{useRef} from 'react'
import { Container,Flex,Image,Text,Box,ScaleFade,Button,Badge } from '@chakra-ui/react'
import { useInViewport } from 'react-in-viewport'
import { FaArrowRight,FaLayerGroup } from 'react-icons/fa'
import Link from 'next/link'

export const Info = () => {
    const ref = useRef(null)
    const {enterCount} = useInViewport(ref, {rootMargin: "-45%"} , {disconnectOnLeave:false}, {})

  return (
    <Container maxW='4xl'pt={{ md: '30vh', base: '15vh' }} ref={ref} className='z-1' zIndex={1}>
    <ScaleFade  initialScale={0.9} in={enterCount > 0} >
        <Box   className=' bg-gray-800 shadow-2xl p-3 sm:p-5 rounded-lg border z-1 border-gray-800  z-10'zIndex={1}>
            <Flex align={'center'}  flexDirection={{ md: 'row', base: 'column' }} >
               
                    <Image
                    borderRadius='full'
                    boxSize='150px'
                    mx={4}
                    my={{ md: 0, base: 3}}
                    src='https://github.com/ThatLukaszGuy.png'
                    alt='ThatLukaszGuy'
                    />
                    

                <Box color={'white'} my={{ base: '1', sm: '3' }} mx={{ base: '0', sm: '3' }} maxHeight={'600px'}>
                    <Text  fontWeight={600} fontSize={{ md: '4xl', base: '2xl' }}  ml={8}>
                        <span className='borde border-b-4  border-pink-700'>Hi !</span> 🍉
                    </Text> 
                    
                    <Text  fontSize={{sm: 'lg',  md: 'xl', base: 'sm' }}  ml={8} mt={5}>
                    
                        My name is Łukasz and I&apos;m an upcoming developer and open source fan. 💻
                    </Text> 
                    <Text fontSize={{sm: 'lg',  md: 'xl', base: 'sm' }}  ml={8} mt={4}>
                        I like creating fullstack web applications , while mostly utilizing the MERN Stack. Aside from webdev I&apos;m also interested in networking & Machine Learning with Python and programming in Rust
                    </Text>

                        <Button onClick={() => window.location.href = '#techstack'} size={{ base: 'sm', sm: 'md' }} leftIcon={<FaLayerGroup/>} ml={8} mt={5} colorScheme='tailwindPink' variant='solid' className='pinkBtn'>
                            See Techstack
                            
                        </Button>

                        <Link href={'/projects'}>
                            <Button   size={{ base: 'sm', sm: 'md' }} rightIcon={<FaArrowRight />} ml={{ md: 4,base: 8 }} mt={5} colorScheme='customBlue' variant='outline' className='hover:bg-gray-800 blueBtn'>                           
                                    <a>See Projects</a>
                            </Button>
                        </Link>
                </Box>
                
            </Flex>
        </Box>
    </ScaleFade>
</Container>
  )
}
