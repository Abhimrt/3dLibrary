"use client"
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import Model from "./skeleton.js";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Button from "./Component/Button.js";


export default function Home() {

  const texture = useLoader(THREE.TextureLoader, './images/floor.webp')

  return (
    <section className="section">
      <Canvas camera={{ position: [3, 2, 3] }} shadows >
        <ambientLight intensity={.1} />
        <directionalLight intensity={5}  castShadow position={[2,3,2]}  />
        <Suspense>
          <Model />
          <mesh visible position={[0, 0, 0]} rotation={[-Math.PI/2, 0, 0]} receiveShadow>
            <planeGeometry args={[20, 20, 1]}  />
            <meshStandardMaterial map={texture} />
          </mesh>
        </Suspense>
        <OrbitControls  autoRotate/>
      </Canvas>
      <Button/>
    </section>
  )
}