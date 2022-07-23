import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { theme } from '../theme/theme'
import {useRouter} from 'next/router'
import { useState,useEffect } from 'react'
import { Loader } from '../components/Layout/Loader'


function MyApp({ Component, pageProps }) {
  
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };
    setFirstLoading(false)

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router])
  
  
  
  
  return (
    <ChakraProvider theme={theme}>
        { pageLoading || firstLoading
            ? (<Loader />)
            : <Component {...pageProps} />
          }
    </ChakraProvider>
  )
}

export default MyApp
