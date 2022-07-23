import React,{ useState,useEffect } from 'react'
import { SlideFade } from '@chakra-ui/react'


export const Banner = ({ project }) => {
  
  const [ isLoaded, setIsLoaded ] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  },[])
  
  
  return (
    <div className='text-white h-[400px] z-10'>
      <SlideFade in={isLoaded} delay={0.4}>   
        <div className='pt-[20vh] text-center '>
            <div className='text-center font-bold text-4xl sm:text-5xl md:text-7xl pinkTS'>
               # {project.name}
            </div>
            <div className='flex  flex-wrap mb-10 mt-7 justify-center'>
                {project.tags.map((tag, index) => (
                      <div className=' text-center my-2   text-gray-400  py-1   px-3 bg-gray-500 rounded-full mx-1   ' key={index}>
                         # {tag}
                      </div>
                ))}
            </div>
        </div>
        </SlideFade >
    </div>
  )
}
