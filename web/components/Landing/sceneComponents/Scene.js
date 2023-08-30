import { useState,useEffect } from 'react'
import {  useDepthBuffer } from '@react-three/drei'
import { Ground } from './Ground'
import { MovingSpot } from './MovingSpot'
import { Physics } from '@react-three/cannon'
import { Model } from './DavidModel'
import { Fracture } from './FracturedHead2'

export function Scene() {

  const [counter, setCounter] = useState(5.5);
  const [done,setDone] = useState(false)
  useEffect(() => {
    if (counter < 0) {
      setDone(true);
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);
  

    const depthBuffer = useDepthBuffer({ frames: 1 })
    return (
      <>
        <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, 2]} />
        <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} />

        <Physics>
          {done ? <Model/> : null}
          <Fracture scale={0.025} position={[-3,-1.5,-0.4]} rotation={[0, 1.2, 0]} />            
          <Ground />
        </Physics>

      </>
    )
  }
  
