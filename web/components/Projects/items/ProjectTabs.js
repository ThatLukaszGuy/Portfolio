import React from 'react'
import {Text,Box,Tabs,TabList,Tab,TabPanels,TabPanel,Button } from '@chakra-ui/react'
import { ImageGrid } from './ImageGrid'
import Carousel from './Carousel/Carousel'
import techStyles from '../../TechStack/Tech.module.css'
import styles from '../Projects.module.css'
export const ProjectTabs = ({projectsProps}) => {
  
    console.log(screen.width)
  
    return (
    <div className='bg-gray-800 pt-8'>
        <Text px={4} color={'white'} fontSize='3xl' mb={8} >
            <span className={techStyles.blueTS}><span className={techStyles.hash}>#</span> My Projects:</span>
        </Text>
                <Tabs  m={0}   bg={'customGray.800'} variant={'soft-rounded'} colorScheme={'tailwindPink'} color={'gray.100'} rounded={'lg'} pt={3}>
                    <TabList p={3} mb='1em' >
                        <Tab mx={1} >Gallery</Tab>
                        <Tab mx={1} className={styles.toDisable}>Card View</Tab>
                        <Tab mx={1} className={styles.toEnabled} isDisabled >Card View</Tab>
                    </TabList>
                    <TabPanels m={0} p={0}>
                        <TabPanel mx={0} p={0}>
                            <ImageGrid projectsProps={projectsProps}/>
                        </TabPanel>
                        <TabPanel className={styles.tabBG}>
                           <div className={styles.toDisable}>
                           <Carousel projectsProps={projectsProps}/>
                           </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
    </div>
  )
}
