import React, { useState, useEffect, useContext } from "react";
import Link from 'next/link'
import {

    Container,
    Heading,
    Button,
    Text,
    Flex,
    Tag,
    TagLabel,
    Box,
    Center,
    Stack,
    ButtonGroup,
    IconButton,
    
  } from "@chakra-ui/react";


import ProjectCarousel from "./ProjectCarousel";
import { AiFillGithub ,AiOutlineArrowRight} from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'



export default function Carousel({projectsProps}) {

  return (

      <Container
        py={8}
        px={0}
        mx={{ md: '16px', base: '8px' }}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
        className="testing"
      >
        
        <ProjectCarousel gap={32}>
          {projectsProps.map((project, index) => (
            <Center pb={6} key={index} >
              <Box
                maxW={'400px'}
                w={'full'}
                bg={'customGray.900'}
                zIndex={9}
                rounded={'md'}
                p={6}
                overflow={'hidden'} className='border-2 border-gray-600 Card-bg-shadow'>
                
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6} overflow='hidden'>
                  <img
                    src={`data:image/png;base64,${Buffer.from(project.coverImage.data.data).toString( "base64")}`}
                    style={{ objectFit: 'cover', zIndex: '0'}}
                    alt=''
                  />
                </Box>
                <Stack zIndex={10} bg={'customGray.900'}>
                  <Text
                    color={'tailwindPink.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    Project:
                  </Text>
                  <Heading
                    color={'gray.100'}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {project.name}
                  </Heading>
                  <Text color={'gray.500'}>
                    {project.description.info.slice(0,200)}...
                  </Text>
                </Stack>
                <Flex>
                    {project.tags.slice(0,3).map((tag, index) => (
                      <Tag mr={2} mt={2} key={index} colorScheme={'gray'}>
                        <TagLabel># {tag}</TagLabel>
                      </Tag>
                    ))}
                    <Tag mr={2} mt={2}>...</Tag>
                </Flex>
                <Flex direction={'row'} justify={'space-between'} mt={5}>
                  <ButtonGroup size='md' isAttached >
                      <IconButton aria-label='Add to friends' bg={'black'} color='white' _hover={{ bg: 'gray.900' }} icon={<AiFillGithub />} onClick={() => window.open(project.links.github, '_blank')}/>
                      <IconButton aria-label='Add to friends' bg={'blue.500'} color='white' _hover={{ bg: 'blue.600' }} icon={<BiWorld />} onClick={() => window.open(project.links.deployment, '_blank')}/>
                  </ButtonGroup>
                    <Link href={'/projects/' + project._id}>
                      <a>
                        <Button rightIcon={<AiOutlineArrowRight />} size={'md'} colorScheme={'tailwindPink'} >More</Button>    
                      </a>
                    </Link>
                  
                </Flex>
              </Box>
            </Center>
          ))}
        </ProjectCarousel>
      </Container>
  )
}