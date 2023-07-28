"use client"
import { Stats } from './Stats'
import React,{ useState,useEffect } from 'react'
import { Container, Divider, Image, SlideFade } from '@chakra-ui/react'
import styles from '../Projects.module.css'
import Cstyles from '../../Contact/Contact.module.css'
import axios from 'axios';
import Repo from './Repo'
import Tstyles from '../../TechStack/Tech.module.css'


export default function StatLayout() {
  
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
  
  
  
  const [ isLoaded, setIsLoaded ] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  },[])

  return (
    <>
        <div className={styles.statsBGSVG}>
        <div className='text-white h-[400px] z-10 '>
            <SlideFade in={isLoaded} delay={0.4}>   
                <div className='pt-[150px] text-center '>
                    <div className='text-center font-bold text-4xl sm:text-5xl md:text-7xl pinkTS'>
                      # Stats
                    </div>
                </div>
            </SlideFade >
        </div>
      </div>
        <div className='absolute top-[400px] left-0 w-full overflow-hidden fill-[#36393f]'>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className={Cstyles.sf}></path>
                </svg>
        </div>
        <div className='pt-[189px] bg-gray-800'>
          <div className={Tstyles.techbg}>
            <Container  maxW={'4xl'} >
              <Stats stars={stars} userData={userData} repoData={repoData}/>
              <Divider mt={8} mb={4}/>
              <Repo data={repoData}/>
            </Container>
          </div>
        </div>
    </>
  )
}
