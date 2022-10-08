import React,{ Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Scene } from './Scene'
import { Loader } from '../../Layout/Loader'
import { ScaleLoader } from 'react-spinners'




export const FullCanvas = () => {
  


  return (
    
    <div style={{ backgroundColor: 'black' }}>


        <Suspense fallback={<SceneLoader />}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }} style={{ height:'100vh' ,width:'100vw' , zIndex: '1'}}>
            <color attach="background" args={['#202020']} />
            <fog attach="fog" args={['#202020', 5, 20]} />
            <ambientLight intensity={0.015} />
    
            
            <Scene />
        </Canvas>

        </Suspense>
       
    </div>
  )
}


function SceneLoader() {
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