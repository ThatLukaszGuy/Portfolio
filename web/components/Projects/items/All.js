"use client"
import Carousel from './Carousel/Carousel'
import React,{ useState,useEffect } from 'react'
import { SlideFade,Badge } from '@chakra-ui/react'
import styles from '../Projects.module.css'
import useWindowDimensions from '../../hooks/useWindow'
import { ImageGrid } from './ImageGrid'
import Cstyles from '../../Contact/Contact.module.css'
import {motion} from 'framer-motion'

export const All = ({ projectsProps }) => {
  const { height, width } = useWindowDimensions();
  const [ isLoaded, setIsLoaded ] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  },[])

  return (
    <>
      <div className={styles.projectBGSVG}>
        <div className='text-white h-[400px] z-10 '>
            <SlideFade in={isLoaded} delay={0.4}>   
                <div className='pt-[150px] text-center '>
                    <div className='text-center font-bold text-4xl sm:text-5xl md:text-7xl pinkTS'>
                      # Explore all Projects
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
        {width < 445 
        ?
        <div className='bg-gray-800'>
          <ImageGrid  projectsProps={projectsProps}/>
        </div>

        :
        <div className='bg-gray-800'>
          <motion.div
           className={styles.tabBG} 
          initial='hidden'
          animate='visible'
          variants={{
          hidden: {
            marginLeft: -10000, 
            scale: 1,
            opacity: 1
          },
          visible: {
            scale: 1,
            opacity:1,
            marginLeft: 0,
            transition: {
              delay: 0,
              type: "spring", 
              stiffness: 30
            }
          }
          }}
          >
              <Carousel projectsProps={projectsProps}/>
          </motion.div>
        </div>
            
        }

        
    </>
  )
}
