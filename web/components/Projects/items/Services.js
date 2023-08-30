"use client"
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react"
import {DiCodeBadge,DiRust,DiJsBadge} from 'react-icons/di'
import styles from '../../TechStack/Tech.module.css'

const Feature = ({title, text, icon}) => {
    return (
        <Stack align={'center'}>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'customGray.900'}
                mb={1}
            >
                {icon}
            </Flex>
            <Box >
                <Text
                    textAlign={{base:'center', md:'left'}}
                    fontSize="lg"
                    color="white">
                    <span className='text-pink-700'>#</span>{title}
                  </Text>
            <Text textAlign={{base:'center', md:'left'}} color={'gray.300'}>{text}</Text>
            </Box>

        </Stack>
    )
}

{/**
Add Animation so each pops out from left to right after the other


*/}

export default function Services() {
    return (
        <Box mb={8}>
            <Text color={'white'} fontSize='3xl' mb={6}>
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Contact me to work together on:</span>
            </Text>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
                
                <Feature
                    icon={<Icon as={DiJsBadge} w={8} h={10}/>}
                    title={"WebApps"}
                    text={"Compex Fullstack Web Apps. Ranging from small Single Page Apps to more complex Multi Page Apps"}
                />

                <Feature
                    icon={<Icon as={DiRust} w={12} h={12}/>}
                    title={"Utility Scripts"}
                    text={"Small Automation scripts, CLI Apps or just generally useful tools"}
                />

                <Feature
                    icon={<Icon as={DiCodeBadge} w={10} h={10}/>}
                    title={"Other"}
                    text={"May include little desktop apps, ML models, games. Contact for further details"}
                />

            </SimpleGrid>
        </Box>
    )
}