"use client"
import { Button,Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import {BiWorld} from 'react-icons/bi'
import Swal from 'sweetalert2'




export const Links = ({ links }) => {
  
  const noLinkAlert = () => {
    Swal.fire({
      title: 'No deployment',
      text: "The deployment of this project does not seem to be a website. Check out the repo if u want to try out the project.",
      icon: 'info',
      showCancelButton: true,
      background: '#202225',
      iconColor: '#0c8cbf',
      color: '#e3e5e8',
      confirmButtonColor: '#0c8cbf',
      cancelButtonColor: '#4f545c',
      cancelButtonText: 'Close',
      confirmButtonText: 'See Repo'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(links.github, '_blank')
      }
    })
  }
  
  
  
  return (
    <div className='bg-gray-900 text-white h-[300px] grid grid-cols-1 place-items-center'>
        <div>
        <Text className='blueTS' fontWeight={'700'} fontSize={'xl'} textAlign={'center'} mt={20} mb={-9}>See the App in Action !</Text>
        <div className='flex flex-col sm:flex-row mt-20'>
            <Button  leftIcon={<AiFillGithub />}  mx={2} my={2} bg={'black'} color='white' _hover={{ bg: 'gray.900' }} onClick={() => window.open(links.github, '_blank')}>
                View Repo
            </Button>
            
            <Button rightIcon={<BiWorld />} mx={2} my={2} bg={'blue.500'} color='white' _hover={{ bg: 'blue.600' }} onClick={ links.deployment == 'nolink' ? () => noLinkAlert() : () => window.open(links.deployment, '_blank') }>
                View Deployment
            </Button>
        </div>
        </div>

    </div>
  )
}
/**
 * 
 *             <Button rightIcon={<BiWorld />} mx={2} my={2} bg={'blue.500'} color='white' _hover={{ bg: 'blue.600' }} onClick={ links.deployment == 'nolink' ? () => noLinkAlert() : () => window.open(links.deployment, '_blank') }>
                View Deployment
            </Button>
 * 
 */