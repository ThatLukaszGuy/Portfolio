import React,{useRef} from 'react'
import { Text,Box,Flex, Link,SlideFade} from '@chakra-ui/react'
import styles from '../../../TechStack/Tech.module.css'
import Swal from 'sweetalert2'
import { useInViewport } from 'react-in-viewport'

function ParseDate({date}) {
  return (
    <span>{date.split("T")[0]}</span>
  )
} 


export default function Repo({data}) {
      
  const repoRef = useRef(null)
  const {enterCount} = useInViewport(repoRef, {rootMargin: "-20%"} , {disconnectOnLeave:false}, {})

  function copyAlert(i) {
        try {
            navigator.clipboard.writeText(data[i]?.clone_url);
        } catch (e) {
            console.error(e)
        }
        const url = data[i]?.clone_url;
      
        Swal.fire({
            title:"<span style='color:#CBD5E0;'>Text Copied to Clipboard!</span>",
            confirmButtonColor: '#831843',
            background:'#2f3136',
            html: `<span style='color:#A0AEC0;'>You can also copy it manually here: <br> ${url}</span>`,
            backdrop: `
            rgba(32, 34, 37, 0.5)`,
             heightAuto:'false',
             confirmButtonText: 'Ok',
             cancelButtonText: 'No, go back !',
             allowOutsideClick: false ,
             allowEscapeKey:false,
             allowEnterKey:false,
             keydownListenerCapture:true,
      
        })
      }


    return (
    <>
        <Text color={'white'} fontSize='3xl' >
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Repos:</span>
        </Text>
        <Box ref={repoRef}>
            {data?.sort((a, b) => {
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
            .reverse() //reverse alphabetically sorted array
            .map((item,i) => (
                
              <SlideFade  key={i} delay={(i + 1.5) / 10} in={enterCount > 0}>
                <Flex>
                  <Box
                    my={4}
                    px={8}
                    py={4}
                    rounded="lg"
                    shadow="lg"
                    bg={'customGray.900'}
                    maxW="4xl"
                    w={'4xl'}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text
                        fontSize="sm"
                        color="gray.400"
                      >
                        <ParseDate date={item.created_at}/>
                      </Text>
                      <Link
                        px={3}
                        py={1}
                        bg="gray.700"
                        color="gray.100"
                        fontSize="sm"
                        fontWeight="700"
                        rounded="md"
                        _hover={{
                          bg: "tailwindPink.700",
                        }}
                          onClick={() => copyAlert(i)}
                      >
                        Clone git url
                      </Link>
                    </Flex>

                
                    <Box mt={2}>
                      <Text
                        fontSize="2xl"
                        color="white"

                        fontWeight="700"

                      >
                        <span className='text-pink-700'>#</span>{item.name}
                      </Text>
                      <Text
                        mt={2}
                        color="gray.300"
                      >
                          {item.description}
                      </Text>
                    </Box>
                
                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                      <Link
                        color="gray.400"
                        _hover={{
                          textDecor: "underline",
                          textColor: 'gray.500'
                        }}
                        href={item.html_url}
                      >
                        See more
                      </Link>
                
                      <Flex alignItems="center">
                        <Text
                          color="white"
                          fontWeight="700"
                        >
                          {item.language}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </SlideFade>  
            ))}
        </Box>
    </>
  )
}
