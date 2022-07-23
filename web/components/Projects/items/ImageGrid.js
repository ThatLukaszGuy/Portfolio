import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ImageGrid = ({ projectsProps }) => {

  
  
    return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-screen'>
        {projectsProps.map((project, index) => (
            
            <div 
            key={index} 
            className='relative'
            >
                <Link href={'/projects/' + project._id}>
                      <a>
                        <img
                            className='img-effect aspect-square'   
                            src={`data:image/png;base64,${Buffer.from(project.coverImage.data.data).toString( "base64")}`} 
                            alt=''
                            />
                    </a>
                </Link>
                <div>
                    <p className={'grid-text text-pink-800 text-4xl font-thin'}>{project.name}</p>
                </div>
                
            </div>           

        ))}


    </div>
  )
}
