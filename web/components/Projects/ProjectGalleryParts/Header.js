"use client"
import React from 'react'
import { useThree } from '@react-three/fiber'
import { Text} from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'

const cFont =  'fonts/alt/eternal.otf'

export default function Header() {

    const { width, height } = useThree((state) => state.viewport)
    const AnimatedText = animated(Text)
    
    const headSpring = useSpring({
      from: { scale: [0, 0, 0] , position: [0, height,0]},
      to: { scale: [10, 10, 10], position: [0, 2,0]},
      config: {
        friction: 40,
      },
      delay: 100,
    })
  
  
    const underline = useSpring({
      from: {  position: [width, 1.5,0]},
      to: {  position: [0, width < 10 ? 1.7 : 1.5 ,0]},
      config: {
        friction: 40,
      },
      delay: 100,
    })
    return (
      <>
        <AnimatedText color={'#ffffff'}  depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.005 * width}  {...headSpring}>Scroll to Discover</AnimatedText>
        {/* underline */}
        <animated.mesh {...underline}>
          <boxGeometry args={[0.6 * width,0.1,0.1]}/>
          <meshStandardMaterial color={'#9D174D'}/>
        </animated.mesh>
        <ambientLight />
  
      </>
    )
  }
  
  