/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nick Slough (https://sketchfab.com/BeholderDesign)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cyberpunk-bar-3a8d7b5f5a804c4a971d8ad628c4d1ed
title: Cyberpunk Bar
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import Bloom from './Bloom'
export const Model = ({ ...props }) => {

 
  const group = useRef()
  // create mesh that redirect onclick -> style this mesh to look like screen


  const { nodes, materials } = useGLTF('../models/cyberpunk_bar.glb')
  return (
    <group     ref={node => {
                group.current = node
              }} 
              {...props}
              dispose={null}
              
              >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.24}>

        <Bloom />
        <mesh geometry={nodes.Object_2.geometry} material={materials.mat21} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.mat14} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.mat15} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.mat16} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.mat16} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat16} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat16} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.mat17} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mat17} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.mat23} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.mat24} />

        <mesh geometry={nodes.Object_13.geometry} material={materials.mat3} />

        
        
         
        <mesh geometry={nodes.Object_14.geometry} material={materials.mat4} />
        
        
      </group>
    </group>
  )
}

useGLTF.preload('models/cyberpunk_bar.glb')


// monitor light   <mesh geometry={nodes.Object_11.geometry} material={materials.mat23 }/>

