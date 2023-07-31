"use client"
import { Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import Button from "../Component/Button.js";


export default function Home() {

  function Model(props) {
    const { scene, nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')
    Object.keys(nodes).map((e) => {
      nodes[e].castShadow = true
    })

    return <primitive object={scene} {...props} />
  }

  function Plane() {
    const texture = useTexture('./images/floor.webp')
    return (
      <mesh visible position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    )
  }


  return (
    <section className="section">
      <Canvas camera={{ position: [3, 2, 3] }} shadows >
        <ambientLight intensity={.1} />
        <directionalLight intensity={5} castShadow position={[2, 3, 2]} />
        <Suspense fallback={null}>
          <Model />
          <Plane/>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
      <Button />
    </section>
  )
}