import React,{useEffect, useState} from 'react'
import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    Divider,
    Alert,
    AlertIcon,
    Text
  } from '@chakra-ui/react';
  import { BsFillBookmarksFill } from 'react-icons/bs';
import { MdGroup } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';
import { CustomLoader } from '../../Layout/CustomLoader';
import styles from '../../TechStack/Tech.module.css'


const StatCard = ({ title,label,  icon }) => {
  return (


    <Stat
      px={{ base: 2, md: 4 }}
      py={'3'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={'gray.500'}
      rounded={'lg'}
      textColor={'white'}
      my={2}
      >
    
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
        <StatLabel fontWeight={'medium'}>
          <span className='text-pink-700'>#</span>{label}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {title}
        </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={'gray.900'}
          alignContent={'center'} textColor='white'>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}




export const Stats = () => {
  
    

    const repoUrl = 'https://api.github.com/users/thatlukaszguy/repos'
    const [repoData, setRepoData] = useState([])
    const userUrl = 'https://api.github.com/users/thatlukaszguy'
    const [userData, setUserData] = useState({})
    const [stars , setStars] = useState(0) 
    
    const sumStars = (arr) => {
      let sum = 0
      arr.forEach(s => {
        sum += s
      })
      return sum 
    }


    useEffect(() => {
       // getting all repo data
       axios.get(repoUrl)
       .then((res) => {
         setRepoData(res.data)
         const starArray = res.data.map(r => r?.stargazers_count)
         const fullSum = sumStars(starArray)
         setStars(fullSum)
       })


       // getting user data
       axios.get(userUrl).then((res) => {
         setUserData(res.data)
       })

      
     }, [])
    



  
  
    return (
    
      <Box >
        <Text color={'white'} fontSize='3xl' my={2} >
            <span className={styles.blueTS}><span className={styles.hash}>#</span> Github Stats:</span>
        </Text>
        <Box bg={'customGray.900'} rounded={'lg'}  p={3} >
          { repoData && userData && stars > 0
          ?           
            <>
              
             <StatCard title={'Followers: '+ userData?.followers} icon={<MdGroup size={'2.5em'}/>} label={'User'}/>
             <StatCard title={'Total Repos: '+ userData?.public_repos} icon={<BsFillBookmarksFill size={'2.5em'}/>} label={'Repo'}/>
             <StatCard title={'Total Stars: ' + stars} icon={<AiFillStar size={'2.5em'}/>} label={'Stars'}/>
             <Divider my={4}/>
             <Alert status='success' variant='left-accent'>
                <AlertIcon />
                All data from the github API was retrieved successfully
              </Alert>
            </>          
          : <div className='text-center py-10'> <CustomLoader color={'#9D174D'} /> </div>
          }


        </Box>
      </Box>
  )
}
