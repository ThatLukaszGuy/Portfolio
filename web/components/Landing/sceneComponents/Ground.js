"use client"
import React, {useRef} from "react";
import {  useLoader } from "@react-three/fiber";
import {  TextureLoader } from "three";
import { usePlane } from '@react-three/cannon'
export const Ground = () => {

    const [normalMap] = useLoader(TextureLoader, [
        '../textures/grid-texture.png'
      ])

    const [planeRef] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0,-1.7,0]
    }))

  return (
    <mesh receiveShadow position={[0, -1.5, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          
        <planeGeometry args={[30, 30]} />
        <meshPhongMaterial 
        envMapIntensity={0}  
            normalMap={normalMap}
            roughness={0}
            blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
            mixBlur={30} // How much blur mixes with surface roughness (default = 1)
            mixStrength={80} // Strength of the reflections
            mixContrast={1} // Contrast of the reflections
            resolution={1024}
        />
    </mesh>
  )
}

