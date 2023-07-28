"use client"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { theme } from "../theme/theme";

export function Providers({children}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        
        {children}
      
      </ChakraProvider>
    </CacheProvider>
  )
}