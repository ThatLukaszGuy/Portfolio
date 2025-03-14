"use client"
import React, {useRef} from 'react'
import { 
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    Stack,
    Text,
    Switch,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'



export const ContactHandler = () => {
    

    const serviceId = process.env.NEXT_PUBLIC_SERVICEID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATEID
  
    
    const form = useRef();
  
    const sendEmail = e => {
      
  
      e.preventDefault()
  
      emailjs.sendForm(serviceId, templateId, form.current, 'baRTTaiS5YosRINb6')
        .then((success) => {
            Swal.fire({
                title:'Form Submitted',
                text:'Everything went well and your form has been submitted.',
                icon:'success',
                iconColor: '#831843',
                confirmButtonColor: '#831843',
                allowOutsideClick: false,
                allowEscapeKey: false,
                background: '#202225',
                color: '#e3e5e8',
            }) 
        }, (error) => {
            Swal.fire({
                title:'An error occurred',
                text:"Something happened and you form couldn't be submitted. Try again later",
                icon:'error',
                iconColor: '#831843',
                confirmButtonColor: '#831843',
                allowOutsideClick: false,
                allowEscapeKey: false,
                background: '#202225',
                color: '#e3e5e8',
            })
        });
        form.current.reset()
    }


  return (
    <div className=' pt-[150px] pb-[40px]'>


    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      mx={2}
      zIndex={20}
      
      >

      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={'customGray.900'}
        rounded={'xl'}
        boxShadow={'lg'}
        textColor='white'
        p={6}
        shadow={'2xl'}
        my={12}
        id='formID'
        className='border border-transparent hover:border-pink-700 hover:cursor-pointer sm:hover:scale-105 hover:z-30 ease-in-out duration-300 hover:transform-none hover:shadow-2xl'
        >
        <Heading  lineHeight={1.1} className='pinkTS' fontSize={{ base: '2xl', md: '3xl' }}>
          Get in Touch
        </Heading>
        <form ref={form} onSubmit={sendEmail}> 
        
        {/** isDisabled={true} form blocked until DSVGO is sorted - swiss so =false */}
        
        <FormControl id="password" isRequired>
          <FormLabel >Name</FormLabel>
          <Input name='name' isDisabled={false} type="text" placeholder='Your Name' focusBorderColor='tailwindPink.500' _placeholder={{ color: 'gray.400' }}/>
        </FormControl>

        <FormControl id="email" isRequired mt={2}>
          <FormLabel>Email address</FormLabel>
          <Input

          isDisabled={false}
          name='email'

            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.400' }}
            type="email"
            focusBorderColor='tailwindPink.500'
          />
        </FormControl>
        
        <FormControl isRequired mt={2}>
            <FormLabel>Reason</FormLabel>
            <Select             isDisabled={false} name='reason'  _placeholder={{ color: 'gray.400' }} focusBorderColor='tailwindPink.500'>
            
                <option value='work' className='text-gray-900'>Work</option>
                <option value='other' className='text-gray-900'>Other</option>
            </Select>
        </FormControl>
        
        
        <FormControl mt={2}>
            <FormLabel>Details</FormLabel>
            <Textarea             isDisabled={false} className='resize-none' name='details' placeholder='Some Details...'  _placeholder={{ color: 'gray.400' }} focusBorderColor='tailwindPink.500'/>
        </FormControl>
        
        <FormControl isRequired mt={2}>
            <FormLabel htmlFor="switch">Privacy policy</FormLabel>
            <Text textColor={"gray.300"} fontStyle={'italic'}>I have read and made myself familiar with the privacy policy of this site.</Text>
            <Switch my={2} id="switch" colorScheme='tailwindPink'  _placeholder={{ color: 'gray.400' }} focusBorderColor='tailwindPink.500'  />
          </FormControl>
        
          <Button
            colorScheme={'tailwindPink'}
            type='submit'
            mt={2}
            w={'full'}
            isDisabled={false}
            >
            Submit
          </Button> 
        </form>
      </Stack>

    </Flex>
    </div>
  )
}
