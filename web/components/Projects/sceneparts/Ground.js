import React from "react";

import { usePlane } from '@react-three/cannon'
export const Ground = () => {



    const [planeRef] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0,-0.5,0]
    }))

  return (
    <mesh receiveShadow position={[0, -5.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
    </mesh>
  )
}

