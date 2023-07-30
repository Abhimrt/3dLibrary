"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './SheenChair'
import { Leva, useControls } from 'leva'


export default function Home() {

  function Env() {
    return (
      <Environment
        preset="apartment"
        background
        ground={{
          height: 20,
          radius: 40,
          scale: 70,
        }}
        receiveShadow
      />
    )
  }
  

  return (
    <Canvas shadows camera={{ position: [-8, 5, 8] }}>
      <Env />
      <Environment preset="apartment" background/>
      <Model />
      <ContactShadows position={[.1, -0.8, .3]} color="#525150" />
      <OrbitControls autoRotate />
    </Canvas>
  )
}