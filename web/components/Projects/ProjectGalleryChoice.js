"use client"

import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll} from '@react-three/drei'
import { Nav } from '../Layout/Nav'
import styles from './Projects.module.css'
import Shapes from './ProjectGalleryParts/Shapes'
import Images from './ProjectGalleryParts/Images'
import Header from './ProjectGalleryParts/Header'


export default function ProjectGalleryChoice() {


  
  return (
    <>
    <div className={styles.galleryBG}       >
    
        <Canvas camera={{ }} gl={{ antialias: false }} dpr={[1, 1.5]}  style={{ height:'100vh' ,width:'100%' }}>
        <Suspense fallback={null}>
            <ScrollControls damping={0.3} pages={2}>
            <Scroll>

                <Header />
                <Images  />
                <Shapes />

            </Scroll>

            </ScrollControls>
            <Preload />
        </Suspense>
        </Canvas>
        <Nav/>
        
    </div>
    </>
  )
}
