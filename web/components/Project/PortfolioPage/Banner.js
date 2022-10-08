import React,{ useState,useEffect } from 'react'
import { SlideFade } from '@chakra-ui/react'
import { Tag,TagLabel,TagLeftIcon,useDisclosure,Modal,ModalBody, ModalOverlay,ModalContent,ModalHeader,Button,ModalFooter,ModalCloseButton ,List,ListIcon,ListItem} from '@chakra-ui/react'
import { FaMousePointer } from 'react-icons/fa'
import { BsFillArrowRightSquareFill  } from 'react-icons/bs'

export const Banner = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ isLoaded, setIsLoaded ] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  },[])
  
  const routes = [
    '/home',
    '/projects',
    '/projects/[:id]',
    '/projects/all',
    '/projects/hub',
    '/projects/stats',
    '/projects/other',
    '/contact',
    '/issues',
    '/404',
  ]

  const apiRoutes = [
    '/api/tech',
    '/api/projects',
    '/api/projects/[:id]'
  ]
  
  return (
    <div className='text-white h-[350px] z-10'>
      <SlideFade in={isLoaded} delay={0.4}>   
        <div className='pt-[15vh] text-center '>
            <div className='text-center font-bold text-4xl sm:text-5xl md:text-7xl pinkTS'>
               # Other
            </div>
            <div className='text-center text-gray-300 mt-10 text-lg sm:text-xl'>
                See main Techstack used for this site /    
                <Tag onClick={onOpen}  className='hover:cursor-pointer ' variant='subtle' mt={1} ml={2} colorScheme='pink' _hover={'cursor: pointer;'}>
                    <TagLeftIcon  as={FaMousePointer} />
                    <TagLabel>List of all Routes</TagLabel>
                </Tag>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'/>
                  <ModalContent backgroundColor={'customGray.900'} color={'gray.200'}>
                    <ModalHeader>All Routes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Frontend: <br /> 
                      {routes.map((route,index) => (
                        <div key={index}>
                          <Tag    className='hover:cursor-pointer ' my={1} variant='subtle' colorScheme='pink' _hover={'cursor: pointer;'}>
                            <TagLeftIcon  as={BsFillArrowRightSquareFill} />
                            <TagLabel> {route}</TagLabel>                                      
                          </Tag>
                        </div>
                      ))}
                      API: <br />
                      {apiRoutes.map((route,index) => (
                        <div key={index}>
                          <Tag    className='hover:cursor-pointer ' my={1} variant='subtle' colorScheme='pink' _hover={'cursor: pointer;'}>
                            <TagLeftIcon  as={BsFillArrowRightSquareFill} />
                            <TagLabel> {route}</TagLabel>                                      
                          </Tag>
                        </div>
                      ))}
                    </ModalBody>

                    <ModalFooter>
                      <Button className='pinkBtn' colorScheme='tailwindPink' mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </div>
        </div>
        </SlideFade >



    </div>
  )
}
