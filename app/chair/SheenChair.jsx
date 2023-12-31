/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\SheenChair.glb 
*/
"use client";
import React, { useState, useEffect } from "react";
import { useGLTF } from '@react-three/drei'
import { useControls ,Leva} from 'leva'
import { Color } from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/SheenChair.glb");
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  useControls('Shoe', () => {
    console.log('creating color pickers')

    // using forEach
    // const colorPickers = {}
    // Object.keys(materials).forEach((m) => {
    //   colorPickers[m] = {
    //     value: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
    //     onChange: (v) => {
    //       materials[m].color = new Color(v)
    //     }
    //   }
    // })
    // return colorPickers

    // using reduce
    return Object.keys(materials).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            value:
              '#' +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
            onChange: (v) => {
              materials[m].color = new Color(v)
            },
          },
        }),
      {}
    )
  })

  return (
    <group
      {...props}
      dispose={null}
      scale={[10, 10, 10]}
      position={[0, -1, 0]}
      castShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        document.getElementById("Shoe." + e.object.material.name).focus();
      }}
    >
      <mesh
        geometry={nodes.SheenChair_fabric.geometry}
        material={materials["fabric Mystere Mango Velvet"]}
      />
      <mesh
        geometry={nodes.SheenChair_wood.geometry}
        material={materials["wood Brown"]}
      />
      <mesh
        geometry={nodes.SheenChair_metal.geometry}
        material={materials.metal}
      />
      <mesh
        geometry={nodes.SheenChair_label.geometry}
        material={materials.label}
        position={[-0.001, 0.236, 0.06]}
        rotation={[-0.087, 0, 0]}
      />
       {/* <Leva collapsed /> */}
    </group>
  );
}

useGLTF.preload("/SheenChair.glb");
