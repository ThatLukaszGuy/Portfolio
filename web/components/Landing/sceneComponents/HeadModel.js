import { useGLTF } from '@react-three/drei'
import { useRef,useState,useEffect } from 'react'
import { useBox } from '@react-three/cannon'

export const HeadModel = () => {
    // REQUIRED ATTRIBUTION + CREDITS TO ORIGINAL MODEL CREATOR 
    // This work is based on "Planar head by Oleg Toropygin" (https://sketchfab.com/3d-models/planar-head-by-oleg-toropygin-7d831ee5b5494ab595c443088e549c59) by DanP38 (https://sketchfab.com/DanP38) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    const { nodes, materials } = useGLTF('/models/scene.gltf')
    const group = useRef()
    const [boxRef,boxApi] = useBox(() => ({ mass: 1, position: [0,6,0] }))
  // hover
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
      return () => document.body.style.cursor = 'auto';        
  }, [hovered])

    return (
    <group      
    ref={node => {
        group.current = node,
        boxRef.current = node
      }}
    onClick={() => { boxApi.velocity.set(0,2,0) }}  
    dispose={null} 
    position={[0, 1, 0]} 
    castShadow 
    receiveShadow 
    scale={[0.7,0.7,0.7]} onPointerOver={() => setHovered(true)}  onPointerOut={() => setHovered(false)}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
            <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
            <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
        </group>
    </group>
  )
}
