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
export default function PrivacyDrawer({ isOpen, onClose,btnRef }) {
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
                  <DrawerHeader color='gray.100'>Privacy Policy</DrawerHeader>

                  <DrawerBody>
                    <Text fontSize='2xl' color='white'>
                        Overall
                    </Text>
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                        This website <Badge fontSize='xs' variant='subtle' colorScheme='pink'>does not</Badge> collect/store any of your data while browsing. 
                        The only time your required to share your data is in the contact form, which is purely optional. 
                        Aside from that , no ads are displayed and no browsing information is stored.

                    </Text>

                    <Text fontSize={'sm'} color={'white'} mt={2}>    
                        If you send us information via the contact form, your details from the inquiry form, including the contact details you provide there, 
                        will be stored and processed by us for the purpose of processing the inquiry and in the event of follow-up questions. 
                        Your data will be used exclusively for the purpose of answering and processing your inquiry. In this respect, 
                        data processing is carried out on the basis of a legitimate interest. In the event of fraud or misuse detection, 
                        e.g. to detect hacker attacks, we reserve the right to store your connection data temporarily and exclusively for this purpose for a period of no more than 30 days, unless there is a reason for longer storage.
                    </Text>

                    <Text fontSize='2xl' color='white' mt={2}>
                        Form & Email
                    </Text>
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                        This website does not handle the form using a backend. The data from the form gets processed by the <Badge fontSize='xs' variant='subtle' colorScheme='pink'>EmailJS</Badge> package
                         and after reformatting it, sends to my email inbox. You can read further about how EmailJS processed your data by pressing the button below and being redirected to their privacy policy page
                         <br/><div className='mt-2'></div>
                         At <Badge fontSize='xs' variant='subtle' colorScheme='pink'>no point</Badge> in time will any of the data you submit be shared or be available publicly
                    </Text>

                    <Text fontSize='2xl' color='white' mt={2}>
                        Impressum
                    </Text>
                    
                    <Divider mb={1}/>
                    <Text fontSize='sm' color='white'>
                      Name: Łukasz J <br/>
                      Address: Zurich CH <br/>
                      Email: thatlukija@gmail.com <br/>
                      <span className=' italic text-gray-300'>Based in Swiss</span>
                    </Text>

                  </DrawerBody>
                  <DrawerFooter>

                    <Button className='pinkBtn' mr={5} rightIcon={<HiOutlineMailOpen />} onClick={() => window.open('https://www.emailjs.com/legal/privacy-policy/', '_blank')} colorScheme='tailwindPink' variant='outline' >EmailJS</Button>
                    <Button className='pinkBtn' colorScheme='tailwindPink'  mr={3} onClick={onClose}>
                      Close 
                    </Button>                    
                  
                  
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
  )
}