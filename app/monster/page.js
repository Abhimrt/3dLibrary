"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  Center,
} from "@react-three/drei";
import { Model } from "./Monster";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import Loader from "../Component/Loader";

export default function Home() {
  function Env() {
    return (
      <Environment
        files={"./images/forest_slope_1k.hdr"}
        background
        ground={{
          height: 20,
          radius: 40,
          scale: 150,
        }}
      />
    );
  }

  return (
    <>
      <Loader />
      <section className="section">
        <Canvas shadows camera={{ position: [-20, 15, 20] }}>
          <Env />
          <Center>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Center>
          <ContactShadows position={[0, -0.2, 0]} color="#000" />
          <OrbitControls autoRotate />
          {/* <Leva collapsed /> */}
        </Canvas>
      </section>
    </>
  );
}
