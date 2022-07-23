import React from 'react'
import { Text, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, 
    Badge,
    Divider,
  } from '@chakra-ui/react';
import { HiOutlineMailOpen } from 'react-icons/hi'


export const InfoDrawer = ({ isOpen, onClose,btnRef }) => {
  return (
    <Drawer
    isOpen={isOpen}
    placement='right'
    onClose={onClose}
    finalFocusRef={btnRef}
    
    >
        <DrawerOverlay />
        <DrawerContent background='customGray.900' >
          <DrawerCloseButton color='gray.100' />
          <DrawerHeader color='gray.100'>Some additional Info</DrawerHeader>

          <DrawerBody>
            <Text fontSize='2xl' color='white'>
                Overall
            </Text>
            <Divider mb={1}/>
            <Text fontSize='sm' color='white'>
                This Section is split into <Badge fontSize='xs' variant='subtle' colorScheme='blue'>3</Badge> different parts. One is just a redirect to a route <Badge fontSize='xs' variant='subtle' colorScheme='blue'>/projects/portfolio</Badge>  where you can find a detailed documentation about everything here. The other part fetches user data from the github api to display account stats. The third are the actual projects.
            </Text>

            <Text fontSize='2xl' color='white' mt={2}>
                Actual Projects
            </Text>
            <Divider mb={1}/>
            <Text fontSize='sm' color='white'>
                The actual projects are presented in form of either a gallery or a carousel made of cards. Onclick you will be redirect to the dynamic route of <Badge fontSize='xs' variant='subtle' colorScheme='blue'>/projects/:id</Badge> for many many more details

            </Text>

          </DrawerBody>
          <DrawerFooter>

            <Button className='blueBtn' colorScheme='customBlue'  mr={3} onClick={onClose}>
              Close 
            </Button>                    
          
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
