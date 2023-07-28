"use client"
import React,{useEffect,useState} from 'react'
import {  useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, Image,Text} from '@react-three/drei'
import {useRouter} from 'next/navigation'
import { animated, useSpring } from '@react-spring/three'
import * as THREE from 'three'


const cFont =  'fonts/alt/eternal.otf'

const damp = THREE.MathUtils.damp


export default function Images() {
    const { width, height } = useThree((state) => state.viewport)
    const data = useScroll()
    const group = useRef()
    const router = useRouter()
  
    // image anim
    const AnimatedImg = animated(Image)
  
    const AnimatedText = animated(Text)
    const leftSpring = useSpring({
      from: {  position: [-width, -3,0]},
      to: {  position: [-2, -3, 0]},
      config: {
        friction: 40,
      },
      delay: 400
    })
  
    const rightSpring = useSpring({
      from: {  position: [2, -height,0]},
      to: {  position: [2, -3, 0]},
      config: {
        friction: 40,
      },
      delay: 1000,
    })
  
    const leftTextSpring = useSpring({
      from: {  position: [-width, -3,0]},
      to: {  position: [-0.5, -3, 0]},
      config: {
        friction: 40,
      },
      delay: 400,
    })
  
    const rightTextSpring = useSpring({
      from: {  position: [2, -height,0]},
      to: {  position: [0.9,-3, 0]},
      
      config: {
        friction: 40,
        
      },
      delay: 1000,
    })
    // hover
    const [hovered, setHovered] = useState(false)
    const [index, setIndex] = useState(null) // for unique img hover
  
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';        
    }, [hovered])
    
    // zoom effect
    useFrame((state,delta) => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
      group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3
      //group.current.children[4].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
      //group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3 // add new condition for index of every img so hover is unique
      
      group.current.children[0].material.grayscale = damp(group.current.children[0].material.grayscale, hovered & index == 0 ? 0 : Math.max(0, 1 - 0.01), 6, delta) // beatiful
      group.current.children[2].material.grayscale = damp(group.current.children[2].material.grayscale, hovered & index == 2 ? 0 : Math.max(0, 1 - 0.01), 6, delta)
      //group.current.children[4].material.grayscale = damp(group.current.children[4].material.grayscale, hovered & index == 4 ? 0 : Math.max(0, 1 - 0.01), 6, delta)
      //group.current.children[6].material.grayscale = damp(group.current.children[6].material.grayscale, hovered & index == 6 ? 0 : Math.max(0, 1 - 0.01), 6, delta)
    
    })
    //<Image onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}  onClick={(e) => Router.push('/projects/all')} alt='' position={[-2, -3, 0]} scale={[4, height, 1]} url="images/c1.jpg" />
    return (
      <group ref={group}       
  >
        
        <AnimatedImg  grayscale={0.2} {...leftSpring} onPointerOver={() => {setHovered(true) , setIndex(0)}}  onPointerOut={() => {setHovered(false) , setIndex(null)}}  onClick={(e) => router.push('/projects/all')} alt='' scale={[4, height, 1]} url="../images/project.png" />
        
        <AnimatedText outlineColor={'#9D174D'} outlineOffsetX={0.1} outlineOffsetY={0.05} {...leftTextSpring} rotation-z={[Math.PI / 2]}  onPointerOver={() => setHovered(true)}  onClick={(e) => router.push('/projects/all')}  depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.5} color={'#ffffff'}>
                          Projects
        </AnimatedText>
        
        <AnimatedImg {...rightSpring} onPointerOver={() => {setHovered(true) , setIndex(2)}} onPointerOut={() =>{setHovered(false) , setIndex(null)}}  onClick={(e) => router.push('/projects/stats')} alt=''  scale={3} url="../images/stats.png" />
  
        <AnimatedText outlineColor={'#9D174D'} outlineOffsetX={0.05} outlineOffsetY={0.035} onPointerOver={() => setHovered(true)}   onClick={(e) => router.push('/projects/stats')} rotation-z={[-Math.PI / 2]} {...rightTextSpring} depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.3} color={'#ffffff'}>
                          Stats
        </AnimatedText>
      {/** 
        <Image  onPointerOver={() => {setHovered(true) , setIndex(4)}} onPointerOut={() =>{setHovered(false) , setIndex(null)}}   onClick={(e) => router.push('/projects/other')} alt='' position={[0, -height * 1.6, 2.5]} scale={[1.5, 3, 1]} url="../images/other.png" />
        
        <Text  outlineColor={'#9D174D'} outlineOffsetX={0.05} outlineOffsetY={0.03} onPointerOver={() => setHovered(true)}  onClick={(e) => router.push('/projects/other')}  position={[0, -height * 1.45, 2.5]} depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.3} color={'#ffffff'}>
                          Other
        </Text>
  
        <Image  onPointerOver={() => {setHovered(true) , setIndex(6)}} onPointerOut={() =>{setHovered(false) , setIndex(null)}}  onClick={(e) => router.push('/projects/hub')} alt='' position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 0.1]} url="../images/more.png"/>
        
        <Text outlineColor={'#9D174D'} outlineOffsetX={0.05} outlineOffsetY={0.03} onPointerOver={() => setHovered(true)}  onClick={(e) => router.push('/projects/hub')}  position={[0, -height * 2 - height / 4, 0]} depthTest={false} material-toneMapped={false} font={cFont} fontSize={0.05 * width}  color={'#ffffff'}>
          More 3D! &#123; unstable! &#125; 
        </Text>
      */}
      </group>
    )
  }