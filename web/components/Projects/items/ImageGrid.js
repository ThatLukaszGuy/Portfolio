"use client"
import React,{useRef} from 'react'
import { ScaleFade } from '@chakra-ui/react' 
import Link from 'next/link'
import { useInViewport } from 'react-in-viewport'

export const ImageGrid = ({ projectsProps }) => {

    const projectRef = useRef(null)
    const {enterCount} = useInViewport(projectRef, {rootMargin: "-15%"} , {disconnectOnLeave:false}, {})
  
    return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-screen' ref={projectRef}>
        {projectsProps.map((project, index) => (
        <ScaleFade key={index} delay={(index + 1.5) / 6} in={enterCount > 0} initialScale={0.75}>
            <div 
            className='relative'
            >
                <Link  href={'/projects/all/' + project._id}>
                      
                        <img
                            className='img-effect aspect-square'   
                            src={`data:image/png;base64,${Buffer.from(project.coverImage.data.data).toString( "base64")}`} 
                            alt=''
                            />
                    
                </Link>
                <div>
                    <p className={'grid-text text-pink-800 text-4xl font-thin'}>{project.name}</p>
                </div>
                
            </div> 
            </ScaleFade>          

        ))}


    </div>
  )
}
