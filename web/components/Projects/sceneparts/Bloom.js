import { Canvas, extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import React from 'react'

extend({ UnrealBloomPass })

const Bloom = () => {
  return (
    <Effects disableGamma>
    {/* threshhold has to be 1, so nothing at all gets bloom by default */}
    <unrealBloomPass threshold={0.4} strength={0.35} radius={0.1} />
  </Effects>
  )
}

export default Bloom
