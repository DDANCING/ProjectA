/* eslint-disable @next/next/no-async-client-component */
"use client"
import { useTheme } from "next-themes"
import React from "react";
import { Canvas } from "@react-three/fiber"

import { Environment } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei";

const SceneGuitar =  async ({ children }: { children: React.ReactNode}) => {
 
  const { theme } = useTheme()
  return (
    <Canvas style={{backgroundColor: "transparent"}}>
      <directionalLight  color={0x6D28D9} intensity={2} position={[0, 4, 6]}/>
      <directionalLight   color={0x6D28D9} intensity={2} position={[-1, 0, 2]}/>
      <Environment preset="city"  environmentIntensity={theme == "light" ? 1 : 0.05 } />
      <OrbitControls autoRotate />
      
      {children}
    </Canvas>
  )
}

export default SceneGuitar