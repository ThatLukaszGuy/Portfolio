import React,{ Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import { Loader } from '../../Layout/Loader'


export const FullCanvas = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
        <Suspense fallback={<Loader />}>
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
