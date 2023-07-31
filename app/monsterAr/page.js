"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  Center,
} from "@react-three/drei";
import { Model } from "../monster/Monster";
import { Suspense, useEffect, useRef } from "react";
import Fallback from "../../Component/Fallback";
import Button from "../../Component/Button";

export default function Home() {
  const background = useRef()

  useEffect(() => {
    getVideo();
  }, [background]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = background.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };



  return (
    <>
      <video ref={background} className="cam"></video>
      <section className="section">
        <Canvas shadows camera={{ position: [-20, 15, 20] }}>
          <ambientLight intensity={2} />
          <Center>
            <Suspense fallback={<Html><Fallback /></Html>}>
              <Model />
            </Suspense>
          </Center>
          <ContactShadows position={[0, -0.2, 0]} color="#000" />
          <OrbitControls />
        </Canvas>
        <Button />
      </section>



    </>
  );
}
