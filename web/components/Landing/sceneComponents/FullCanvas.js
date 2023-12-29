"use client"
import React,{ Suspense } from 'react'
import { Canvas,extend} from '@react-three/fiber'
import { Scene } from './Scene'
import { ScaleLoader } from 'react-spinners'
import { OrbitControls, Stars,Effects, Sparkles,Cloud } from '@react-three/drei'
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import * as THREE from "three";

extend({ UnrealBloomPass, OutputPass });


export const FullCanvas = () => {
  


  return (
    
    <div style={{ backgroundColor: 'black' }}>


        <Suspense fallback={<SceneLoader />}>
        <Canvas  
          frameloop="demand" 
          gl={{ antialias: true }} 
          performance={{ min: 0.3 }} dpr={[1, 2]} 
          camera={{ position: [-2, 2, 6], fov:50, near:1,far:20 }} 
          style={{ height:'100vh' ,width:'100vw' , zIndex: '1', background: 'black'}}>
        <color attach="background" args={['#000000']} />       
{/** 
        <color attach="background" args={['#202020']} />
            <fog attach="fog" args={['#202020', 5, 20]} />

*  camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }} 
              <Stripe  factor={1}  color="#000000" position={[0, 1, -5]} />
  */}              
           
           <Sparkles count={30} scale={7} size={5} color={'#0c8cbf'}/>
           <Sparkles count={30} scale={7} size={4} color={'#b00c3f'}/>
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