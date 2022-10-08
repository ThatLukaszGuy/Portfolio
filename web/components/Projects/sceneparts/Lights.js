import React from 'react'

import { SpotLight } from '@react-three/drei'

export const Lights = () => {

  return (
    <>
        <SpotLight
        distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={9} 
        color="#b00c3f" position={[2, 4, 0]}// Diffuse-cone anglePower (default: 5)
        />
        <SpotLight
        distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} 
        color="#0c8cbf" position={[-2, 4.2, 0]}// Diffuse-cone anglePower (default: 5)
        />
    </>
  )
}
