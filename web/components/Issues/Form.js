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
    Slide
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export const Form = () => {
  
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
                confirmButtonColor: '#198754',
                allowOutsideClick: false,
                allowEscapeKey: false
            }) 
            
        }, (error) => {
            Swal.fire({
                title:'An error occurred',
                text:"Something happened and you form couldn't be submitted. Try again later",
                icon:'error',
                confirmButtonColor: '#d33',
                allowOutsideClick: false,
                allowEscapeKey: false
            })
        });
        form.current.reset()
    }
  
  
  return (
    <div className='bg-gray-700'>
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
        className='border border-transparent   ease-in-out duration-300 hover:transform-none hover:shadow-2xl'
        >
        <Heading  lineHeight={1.1}  fontSize={{ base: '2xl', md: '3xl' }}>
          Report bug
        </Heading>
        <form ref={form} onSubmit={sendEmail}> 
        
        <FormControl isRequired mt={2}>
            <FormLabel>Type</FormLabel>
            <Select name='reason'  _placeholder={{ color: 'gray.400' }} focusBorderColor='tailwindPink.500'>
            <option value='other' className='text-gray-900'>Other</option>
                <option value='3D Models' className='text-gray-900'>3D Models</option>
                <option value='Layout' className='text-gray-900'>Layout</option>
                <option value='fetching' className='text-gray-900'>Data Fetching</option>
                <option value='routing' className='text-gray-900'>Routing</option>
                
            </Select>
        </FormControl>
        
        
        <FormControl isRequired mt={2}>
            <FormLabel>Details</FormLabel>
            <Textarea className='resize-none' name='details' placeholder='More Details...'  _placeholder={{ color: 'gray.400' }} focusBorderColor='tailwindPink.500'/>
        </FormControl>
        

        
          <Button
            colorScheme={'tailwindPink'}
            type='submit'
            mt={2}
            w={'full'}
            >
            Submit
          </Button> 
        </form>
      </Stack>

    </Flex>


    </div>
  )
}
