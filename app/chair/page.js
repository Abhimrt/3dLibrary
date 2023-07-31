"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Model } from "./SheenChair";
import { Leva } from "leva";
import { Suspense } from "react";
import Loader from "../../Component/Loader";
import Button from "../../Component/Button";

export default function Home() {
  function Env() {
    return (
      <Environment
        files={"./images/lebombo_1k.exr"}
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
      <Loader className="loader" />
      <section className="section">
        <Canvas shadows camera={{ position: [-10, 8, 10] }} >
          <Env />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <ContactShadows position={[0.1, -0.8, 0.3]} color="#525150" />
          <OrbitControls autoRotate />
        </Canvas>
        <Leva collapsed />
      </section>
      <Button />
    </>
  );
}
