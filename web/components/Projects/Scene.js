"use client"
import React, { Suspense, useEffect,useState } from "react";
import { Canvas, extend, useThree} from "@react-three/fiber";
import { Text, Effects,  OrbitControls, Text3D, Preload } from "@react-three/drei";
import { Street } from "./sceneparts/Street";

import { Cube } from "./sceneparts/Cube";
import { CMonitor } from './sceneparts/CMonitor'
import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { Nav } from "../Layout/Nav";
import SceneLoader from "../Layout/SceneLoader";
import { useRouter } from "next/navigation";
import InfoText from "./sceneparts/InfoText";



extend({ UnrealBloomPass, OutputPass });

const cFont =  'fonts/alt/eternal.otf'
const typeFaceFont = 'fonts/alt/eternal_Regular.json'

const TextInstance = ({text, scale, ...props}) => {
  return (
    <Text3D font={typeFaceFont} scale={scale} {...props}>
      {text}
      <meshStandardMaterial
                      emissive={"#0c7ca8"}
                      emissiveIntensity={6.5}
                      wireframe={true}
                      wireframeLinecap="round"
                      wireframeLinejoin="round"
                      toneMapped={false}
                      />
    </Text3D>
  )
}

export const Scene = () => {
        // hover
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';        
  }, [hovered])

  return (
    <>    
        <Suspense fallback={<SceneLoader/>}>
            <Canvas   
            shadows      
            style={{
                height: "100vh",
                maxHeight: '100vh',
                width: "100vw",
                zIndex: "1",
                background: "black",
                top: 0,
                position: "absolute",
                overflowY: 'hidden'
            }}
          
            dpr={[1, 2]}  camera={{ fov: 90, position: [0, 0, -1.5], rotation:[0, -Math.PI /2, 0]}}
            >

              <fog attach="fog" args={["#202020", 0, 10]} />

                <group rotation={[0, -Math.PI /2, 0]}>
                  

                  <InfoText />
                  <Street/>    
                  <Cube />   
                  

                  <CMonitor position={[2,1.4,2]}  onPointerOver={() => {
                    setHovered(true)
                  }} 
                  onPointerOut={() => setHovered(false)}   rotation={[0,4,0]} onClick={(e) => router.push('/projects/stats')}/>
                  <TextInstance text={"Stats & Services"} scale={0.1} rotation={[0,4,0]} position={[2.3, 1.35,1.3]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={(e) => router.push('/projects/stats')}/>

                  <hemisphereLight intensity={1} groundColor="black" />
                  <spotLight position={[0, 0, 0]} angle={0.12} penumbra={1} intensity={7} castShadow shadow-mapSize={1024} />


                  <CMonitor position={[2,1.4,-2]}  onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}  rotation={[0,-0.8,0]} onClick={(e) => router.push('/projects/all')}/>
                  <TextInstance text={"P|Rojects"} scale={0.1} rotation={[0,-0.8,0]}  position={[1.6, 1.35,-2.2]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={(e) => router.push('/projects/all')}/>
                        
                </group>


                  <Effects disableGamma>
                    <unrealBloomPass threshold={1} strength={0.45} radius={0.3} />
                    <outputPass args={[THREE.ACESFilmicToneMapping]} />
                  </Effects>

                  <OrbitControls 
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={ Math.PI /2}
                    rotateSpeed={0.4}
                    minAzimuthAngle={2.5}
                    maxAzimuthAngle={-2.5}
                  />

                  <ambientLight intensity={1} />

                <Preload all />
            </Canvas>
        </Suspense>
        <Nav />
    </>
  )
}
/**
                  <OrbitControls 
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={ Math.PI /2}
                    rotateSpeed={0.4}
                    minAzimuthAngle={2.5}
                    maxAzimuthAngle={-2.5}
                  />
 */