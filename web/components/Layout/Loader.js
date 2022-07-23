import React from 'react'
import { ScaleLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-1 place-items-center bg-gray-700'>
        <div className=''>
            <ScaleLoader color='#0c8cbf'  radius={2}/>
        </div>
    </div>
  )
}
