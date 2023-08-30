"use client"
import { ScaleLoader } from 'react-spinners'


export const Loader = ({ color }) => {
  return (
    <>
      
      <div className='overflow-y-hidden max-h-screen'>
        {color?
        <div className='overflow-y-hidden w-screen h-screen grid grid-cols-1 place-items-center ' style={{'backgroundColor': `${color}`}} >
          <div className=''>
            <ScaleLoader color='#0c8cbf'  radius={2}/> 
          </div>
        </div>        
        :
        <div className='overflow-y-hidden w-screen h-screen grid grid-cols-1 place-items-center bg-gray-700' >
          <div className=''>
            <ScaleLoader color='#0c8cbf'  radius={2}/> 
          </div>
        </div>
        }


      </div>
      

    
    </>
    
  )
}
