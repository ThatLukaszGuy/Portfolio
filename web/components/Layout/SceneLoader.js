import { ScaleLoader } from 'react-spinners'
import React from 'react'


export default function SceneLoader() {
    return (
      <div className='overflow-y-hidden  max-h-screen'>
  
          <div className='overflow-y-hidden w-screen h-screen grid grid-cols-1 place-items-center ' style={{'backgroundColor': `#0f0f0f`}} >
            <div className='text-center'>
              <ScaleLoader color='#0c8cbf'  radius={2}/> 
              <h3 className='text-[#0c8cbf] font-bold'>Loading Scene ...</h3>  
            </div>
            
          </div>        
  
  
  
      </div>
    )
  }