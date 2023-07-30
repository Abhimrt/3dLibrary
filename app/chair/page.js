"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { Model } from "./SheenChair";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import Loader from "../Component/Loader";

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
    );
  }



  return (
    <>
      <Loader />
      <section className="section">
        <Canvas shadows camera={{ position: [-10, 8, 10] }} >
            <Env />
            <Environment preset="apartment" background />
            <Model />
            <ContactShadows position={[0.1, -0.8, 0.3]} color="#525150" />
            <OrbitControls autoRotate />
        </Canvas>
      </section>
    </>
  );
}
