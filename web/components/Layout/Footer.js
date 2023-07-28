"use client"

import React from 'react'
import { Box,Flex, Container , Text,Button } from '@chakra-ui/react'
import Link from 'next/link'
import Swal from 'sweetalert2'



export const Footer = () => {

    const license = () => {
        Swal.fire({
            icon: 'info',
            title: 'License',
            text: 'This Page is distributed under the MIT license. Aka if u want to do something with it, go for it.',
            showCancelButton: true,
            confirmButtonText: 'Full License',
            confirmButtonColor: '#64748b',
            showCloseButton: true,
            cancelButtonColor: '#289FED',
            cancelButtonText: 'I understand'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'info',
                    title: 'MIT License',
                    html:
                        `Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following condition<br>` 
                        + 
                        `The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.<br>` 
                        + 
                        `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.`,
                    confirmButtonColor: '#64748b',
                    confirmButtonText: 'Close',
                    showCloseButton: true,
                    footer: 'Copyright © 2022 ThatLukaszGuy'
                  })
            } else if (result.isDenied) {
                result.dismiss === Swal.DismissReason.cancel
            }
          })
    }
    
    
    
    
    
    return (

        <Box  bg={'customGray.600'}>
            <Container   maxW={'4xl'} py={8} color={'white'}>
                <Flex flexDirection={{ md: 'row', base: 'column' }} justify={{md: 'space-between', base: 'center'}} textAlign={'center'}>    
                    
                    <Link legacyBehavior href={'/issues'}><a><Button colorScheme={'null'} fontWeight={'400'} color='whiteAlpha.800' ><span className='pinkTS'>Any Issues?</span></Button></a></Link>
                    
                    
                    <Button colorScheme={'null'} fontWeight={'400'} color='whiteAlpha.800' onClick={license}><span className='blueTS'>© 2022 ThatLukaszGuy</span></Button>
                    <Button colorScheme={'null'} fontWeight={'400'} color='whiteAlpha.800'  onClick={() => window.open('https://github.com/ThatLukaszGuy/Portfolio', '_blank')}><span className='pinkTS'>Source Code</span></Button>

                </Flex>
            </Container>
        </Box>

  )
}
