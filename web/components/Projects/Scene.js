"use client"
import React, { Suspense, useEffect,useState } from "react";
import { Canvas, events, extend, useThree } from "@react-three/fiber";
import { Text, Effects, PresentationControls, Preload, OrbitControls } from "@react-three/drei";
import { Street } from "./sceneparts/Street";
import { Cube } from "./sceneparts/Cube";
import { Monitor } from './sceneparts/Monitor'
import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { Nav } from "../Layout/Nav";
import SceneLoader from "../Layout/SceneLoader";
import { useRouter } from "next/navigation";

extend({ UnrealBloomPass, OutputPass });

const cFont =  'fonts/alt/eternal.otf'

{/**

add a fading out <- Swipe & Click -> text
try to add bloom to text
darken the street
fix controls
*/}


function CameraAndModels() {
  // seperated into function so canvas hooks and ctx can be used
  const { width, height } = useThree((state) => state.viewport);
  const router = useRouter()



  return (
    <PresentationControls
    enabled={true} 
    cursor={true} 
    makeDefault
    snap={width > 2.49 ? true : false } 
    global={true} 
    zoom={1.8} 
    rotation={[0, -Math.PI /2, 0]}  
    polar={[0, Math.PI / 12]} 
    azimuth={[-Math.PI / 4, Math.PI / 4]}> 
      <Street/>    
      <Cube />   
      
      <Monitor position={[2,1.4,2]} rotation={[0,4,0]}  onClick={(e) => router.push('/projects/stats')}/>
      <Text    onClick={(e) => router.push('/projects/stats')} rotation={[0,4,0]}  position={[1.9, 1.4,1.9]} depthTest={false} material-toneMapped={false} font={cFont}  fontSize={0.13} color={'#0c7ca8'}>
        Stats & Services
      </Text>


      <Monitor position={[2,1.4,-2]} rotation={[0,-0.8,0]}   onClick={(e) => router.push('/projects/all')}/>
      <Text color={"#0c7ca8"}   onClick={(e) => router.push('/projects/all')} rotation={[0,-0.8,0]}  position={[1.8, 1.4,-1.9]}  font={cFont} fontSize={0.15} >
        Project List
      </Text>
    </PresentationControls>
  )

}

export const Scene = () => {
      

  return (
    <>    
        <Suspense fallback={<SceneLoader/>}>
            <Canvas 
            frameloop="always"        
            style={{
                height: "100vh",
                width: "100vw",
                zIndex: "1",
                background: "black",
            }}
            dpr={[1, 2]} camera={{ fov: 90, position: [0, 0, -1.5]}}
            >

              <color attach="background" args={["#1a2634"]} />
              <fog attach="fog" args={["#1a2634"]} />
              
              <CameraAndModels />

                  <Effects disableGamma>
                    <unrealBloomPass threshold={1} strength={0.35} radius={0.2} />
                    <outputPass args={[THREE.ACESFilmicToneMapping]} />
                  </Effects>

                  <ambientLight intensity={1} />

              <Preload />
            </Canvas>
        </Suspense>
        <Nav />
    </>
  )
}

{/**


*/}