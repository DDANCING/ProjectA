/* eslint-disable @next/next/no-async-client-component */
"use client"
import { useTheme } from "next-themes"
import React from "react";
import { Canvas, useThree } from "@react-three/fiber"

import { Environment } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei";


const SceneRoom =  async ({ children }: { children: React.ReactNode}) => {
  function Controls() {
    const { camera, gl } = useThree();
    
    return <OrbitControls autoRotate args={[camera, gl.domElement]} />;
  }
  const { theme } = useTheme()
  return (
    <Canvas style={{backgroundColor: "transparent"}}>
      <directionalLight  color={0x6D28D9} intensity={2} position={[0, 4, 6]}/>
      <directionalLight   color={0x6D28D9} intensity={2} position={[-1, 0, 2]}/>
      <Environment preset="city"  environmentIntensity={theme == "light" ? 1 : 0.05 } />
      <Controls />
      
      {children}
    </Canvas>
  )
}


export default SceneRoom