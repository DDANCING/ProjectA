/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const SceneGuitar = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <Canvas style={{ backgroundColor: "transparent" }}>
      <directionalLight color={0x6d28d9} intensity={2} position={[0, 4, 6]} />
      <directionalLight color={0x6d28d9} intensity={2} position={[-1, 0, 2]} />
      <Environment preset="city" environmentIntensity={theme == "light" ? 1 : 0.05 } /> 
      <OrbitControls autoRotate />
      {children}
    </Canvas>
  );
};

export default SceneGuitar;
