import React from 'react'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll} from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
export default function Shapes() {
    const { viewport } = useThree()
  
    return (
      <>
        
        <Plane factor={-2} color="#9D174D" scale={5} position={[viewport.width / -2, -viewport.height / 10, -5]} />
        
        <Stripe factor={-1} color="#0c8cbf" position={[0, -viewport.height * 1.25, -1]} />
        <Torus factor={-2} scale={0.5} color="#0c8cbf" position={[2, -3, -0.2]} />
        
        <Torus factor={1} scale={1} color="#9D174D" position={[0, -viewport.height * 2, -1]} />
      </>
    )
  }
  
  function Stripe({ color = 'white', factor = 1, ...props }) {
    const ref = useRef()
    const data = useScroll()
    useFrame((state) => (ref.current.position.x = data.offset * factor * state.viewport.width))
    return (
      <mesh ref={ref} scale={[15, 1, 1]} {...props}>
        <planeGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    )
  }
  
  function Torus({ children, color = 'white', factor = 1, ...props }) {
    const ref = useRef()
    const data = useScroll()
    
    
    useFrame(() => (ref.current.rotation.z = (data.offset * factor * Math.PI) / 2))
    
    const spring = useSpring({
        from: {  rotation: [0,2,0]},
        to: {  rotation: [0,0,0]},
        config: {
          friction: 40,
        },
        delay: 100,
    })
    return (
      <animated.mesh ref={ref} {...props} {...spring}>
        <torusGeometry args={[4, 0.75, 2, 64, 5]} />
        <meshBasicMaterial color={color} />
        {children}
      </animated.mesh>
    )
  }
  
  function Plane({ children, color = 'white', factor = 1, ...props }) {
    const ref = useRef()
    const data = useScroll()
    useFrame(() => (ref.current.rotation.z = (data.offset * factor * Math.PI) / 2))
    
    const spring = useSpring({
        from: {  rotation: [0,-2,0]},
        to: {  rotation: [0,0,0]},
        config: {
          friction: 40,
        },
        delay: 100,
    })
    
    return (
      <animated.mesh ref={ref} {...props} {...spring}>
        <planeGeometry />
        <meshBasicMaterial color={color} />
        {children}
      </animated.mesh>
    )
  }
  