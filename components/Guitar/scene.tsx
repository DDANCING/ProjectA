"use client"

import React from "react";
import { Canvas, useThree } from "@react-three/fiber"
import { Room } from "./ThreeScene";
import { Environment } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei";

export default function SceneGuitar() {
  function Controls() {
    const { camera, gl } = useThree();
    return <OrbitControls args={[camera, gl.domElement]} />;
  }
  return (
    <Canvas style={{backgroundColor: "transparent"}}>
      <directionalLight color={0x6D28D9} intensity={15} position={[0, 3, 2]}/>
      <Environment preset="city" />
      <Controls/>
      
      < Room />
    </Canvas>
  )
}