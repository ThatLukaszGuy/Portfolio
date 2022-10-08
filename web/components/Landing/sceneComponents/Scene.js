import { useDepthBuffer } from '@react-three/drei'
import { Ground } from './Ground'
import { MovingSpot } from './MovingSpot'
import { HeadModel } from './HeadModel'
import { Physics } from '@react-three/cannon'


export function Scene() {


    const depthBuffer = useDepthBuffer({ frames: 1 })
    return (
      <>
        <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, 2]} />
        <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} />
        
        <Physics>
          
          <HeadModel   />
          
          <Ground />
        </Physics>

    
      </>
    )
  }
  
