"use client"
import React from 'react'
import { useThree } from '@react-three/fiber'
import { Text} from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'

const cFont =  'fonts/alt/eternal.otf'

export default function InfoText() {

    const { width, height } = useThree((state) => state.viewport)
    const AnimatedText = animated(Text)
    
    const headSpring = useSpring({
      from: { scale: [0, 0, 0] , position: [0, -height,0], rotation :[0,Math.PI * 1.5,0]},
      to: { scale: [ width > 2.49 ? 3 : 6,
                     width > 2.49 ? 3 : 6, 
                     width > 2.49 ? 3 : 6], 
            position: [0, width < 2.49 ? -0.6 : -1 ,0] , rotation :[0,Math.PI * 1.5,0]},
      config: {
        friction: 40,
      },
      delay: 100,
    })
  
    return (
      <>
        <AnimatedText color={'#ffffff'}  depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.005 * width}  {...headSpring}> &lt;- Swipe to Discover -&gt; </AnimatedText>


  
      </>
    )
  }