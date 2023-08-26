"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Paul (https://sketchfab.com/paul_paul_paul)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-skybox-dystopian-alleyway-80ddc539289a4a439c0e3ea4e59e2b84
Title: FREE - SkyBox Dystopian Alleyway
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Street(props) {
  const { nodes, materials } = useGLTF("../models/street.glb");
  return (
    <group {...props} dispose={null} position={[0,2,0]}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={500}
        >
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/street.glb");