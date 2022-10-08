import React,{useState, useEffect} from 'react'
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { Model } from './sceneparts/Cyberpunk_bar'
import { Nav } from '../Layout/Nav'
import { OrbitControls,Text, Environment} from '@react-three/drei'
import { Lights } from './sceneparts/Lights'
import Router from 'next/router'
import { Loader } from '../Layout/Loader'
import { Footer } from '../Layout/Footer'
import styles from './Projects.module.css'


const sideTextProps = {
    fontSize: 0.05,
    font: 'fonts/alt/eternal.otf'
  }


// fonts/alt/eternal.otf
// fonts/CyberfontBlack.ttf
export const Landing = () => {

    // hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
      }, [hovered])

    return (
    <>
    <div className={styles.barBG}>
       
        <Suspense fallback={<Loader  color={'#0c8cbf'}/>}>    
            <Canvas camera={{ position: [6.8,1, -5], fov: 12}}  style={{ height:'100vh' ,width:'100%' , zIndex: '1'}}>
                
                {/* maxAzimuthAngle={Math.PI / 1} minAzimuthAngle={Math.PI /2} enableZoom={false} maxPolarAngle={1.5}*/}
                
                <Suspense fallback={null}>    
                <OrbitControls maxAzimuthAngle={Math.PI / 1} minAzimuthAngle={Math.PI /2} enableZoom={false} maxPolarAngle={1.5}/>
                    <Lights/>
                    
                    <Text onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}  onClick={(e) => Router.push('/projects/stats')} rotation-y={3.2} rotation-x={-0.2} position={[0.233, 0.35, 0.226]} depthTest={false} material-toneMapped={false} {...sideTextProps} color={'#202020'}>
                        Stats
                    </Text>

                    <Text onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}  onClick={(e) => Router.push('/projects/all')} rotation-z={0.16} rotation-y={2.3} rotation-x={-0.22} position={[-0.113, 0.47, 0.119]} depthTest={false} material-toneMapped={false}{...sideTextProps}   color={'#202020'}>
                        Projects
                    </Text>

                    <Text onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}  onClick={(e) => Router.push('/projects/other')}  rotation-y={7.5} rotation-x={-0.1} rotation-z={0.1}  position={[-0.205, 0.35, -0.164]} depthTest={false} material-toneMapped={false} {...sideTextProps}   color={'#202020'}>
                        Other
                    </Text>
                    <Environment  files={'/hdr/bg.hdr'} background={true} ground={{ height: 42, radius: 180 , scale: 2.5}}  resolution={1024}/>
                    
                    <Model/>
                    <ambientLight intensity={0.11}/>



                </Suspense>

                  
            </Canvas>
        </Suspense>
        <Nav />
        <Footer />
        </div>
    </>
    
  
  )
}