"use client"
import '../../styles/globals.css'
import React from 'react'
import { FullCanvas } from './sceneComponents/FullCanvas'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Nav } from '../Layout/Nav'
import { motion } from 'framer-motion'

export const Landing = () => {

 
//text-[#9D174D]
  return (
    <>
        <div className='bgMain' ></div>
        <motion.h1   
      className='   absolute top-[120px] left-[60px] z-10   font-black  text-white  text-xs text-left landing-header sm:text-sm'
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
            delay: 0.2,
            type: "spring", 
            stiffness: 30
           }
         }
        }}
      
      >
            Welcome <span style={{ fontSize: '0.4em' }} className=''>to my</span>
            <br />
            <span className='#0c8cbf'>Portfolio</span>
        </motion.h1>
        

    
        
        <FullCanvas />
        <Nav />
        <motion.p className=" b left-[60px] top-[90vh] z-10 absolute inline text-white landing-p" 
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
                   delay: 0.2
                   ,
                   type: "spring", 
                   stiffness: 30
                 }
               }
              }}
        >
          Scroll down<AiOutlineArrowDown className='left-[120px] bottom-[2px] absolute'/>
        
        </motion.p>

    </>
  )
}
/**
 * 
 *         <h1 className='  whiteTS absolute top-[120px] left-[60px] z-10   font-black text-[#9D174D] text-xs text-left landing-header sm:text-sm'>
            Welcome <span style={{ fontSize: '0.4em' }} className=''>to my</span>
            <br />
            <span className='#0c8cbf'>Portfolio</span>
          </h1>
 * 
 */