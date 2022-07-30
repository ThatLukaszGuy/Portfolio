import React from 'react'
import { ScaleLoader } from 'react-spinners'
import { HeadConfig } from './HeadConfig'

export const Loader = () => {
  return (
    <>
      
      <HeadConfig title={'Loading...'} color={"#36393f"}/>
        <div className='w-screen h-screen grid grid-cols-1 place-items-center bg-gray-700'>
        <div className=''>
            <ScaleLoader color='#0c8cbf'  radius={2}/>
        </div>
       </div>
    
    </>
    
  )
}
