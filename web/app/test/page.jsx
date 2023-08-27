"use client"
import React, { Suspense, useEffect,useState } from "react";
import { Canvas, events, extend, useThree } from "@react-three/fiber";
import { Text, Effects, PresentationControls, Preload, OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";

import SceneLoader from "../../components/Layout/SceneLoader";
import { useRouter } from "next/navigation";

extend({ UnrealBloomPass, OutputPass });

const cFont =  'fonts/alt/eternal.otf'

{/**

add a fading out <- Swipe & Click -> text
try to add bloom to text
darken the street
fix controls
*/}


function CameraAndModels() {
  // seperated into function so canvas hooks and ctx can be used
  const { width, height } = useThree((state) => state.viewport);
  const router = useRouter()



  return (
    <PresentationControls>
        <gridHelper/>
        <axesHelper/>
    </PresentationControls>
  )

}


export default function test() {
    return (
        <div>
            <Suspense fallback={<SceneLoader/>}>
            <Canvas 
            frameloop="always"        
            style={{
                height: "100vh",
                width: "100vw",
                zIndex: "1",
                background: "black",
            }}
            dpr={[1, 2]} camera={{ fov: 90, position: [0, 0, -1.5]}}
            >

              <color attach="background" args={["#1a2634"]} />
              <fog attach="fog" args={["#1a2634"]} />
              
              <CameraAndModels />

                  <Effects disableGamma>
                    <unrealBloomPass threshold={1} strength={0.35} radius={0.2} />
                    <outputPass args={[THREE.ACESFilmicToneMapping]} />
                  </Effects>

                  <ambientLight intensity={1} />

              <Preload />
            </Canvas>
        </Suspense>
        

        </div>
    )
}