import { useState,useEffect } from 'react'
import {  useDepthBuffer } from '@react-three/drei'
import { Ground } from './Ground'
import { MovingSpot } from './MovingSpot'
import { Physics } from '@react-three/cannon'
import { Fracture } from './FracturedHead'

export function Scene() {

  const [counter, setCounter] = useState(4.0);
  const [done,setDone] = useState(false)
  useEffect(() => {
    if (counter < 0) {
      setDone(true);
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);
  

    const depthBuffer = useDepthBuffer({ frames: 1 }) // this causes the issues related to the feedback loop
    return (
      <>
        <MovingSpot color="#0c8cbf" position={[3, 3, 2]} />
        <MovingSpot  color="#b00c3f" position={[1, 3, 0]} />   
     
        <Physics>
        {done ? <Fracture playAnim={false} scale={0.025} dispose={null}  /> : null}
          <Fracture playAnim={true} scale={0.025} position={[-3,-1.5,-0.4]} rotation={[0, 1.2, 0]}  dispose={null}/>   
          <Ground />
        </Physics>

      </>
    )
  }
  
