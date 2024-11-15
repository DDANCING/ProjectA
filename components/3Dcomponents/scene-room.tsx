/* eslint-disable @next/next/no-async-client-component */
"use client"
import { useTheme } from "next-themes"
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import * as THREE from 'three';

interface SceneRoomProps {
  children: React.ReactNode;
}

const RotatingObject: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const objectRef = useRef<THREE.Group>(null);
  const [angle, setAngle] = useState(0);
  const speed = 0.002; // Velocidade de rotação

  useFrame(() => {
    if (objectRef.current) {
      // Utiliza Math.sin para suavizar a transição e criar o efeito bounce
      const newAngle = Math.sin(angle) * (Math.PI / 3); // Oscila entre -45° e +45°

      setAngle((prevAngle) => prevAngle + speed); // Incrementa o ângulo para o próximo frame
      objectRef.current.rotation.y = newAngle; // Aplica a rotação com suavização
    }
  });

  return (
    <group ref={objectRef}>
      {children}
    </group>
  );
};

const SceneRoom: React.FC<SceneRoomProps> = ({ children }) => {
  const { theme } = useTheme()
  return (
    <Canvas className="flex" style={{ backgroundColor: "transparent" }}>
      <directionalLight color={0x6D28D9} intensity={2} position={[0, 4, 6]} />
      <directionalLight color={0x6D28D9} intensity={2} position={[-1, 0, 2]} />
      <Environment preset="city" environmentIntensity={theme === "light" ? 1 : 0.05} />
      <OrbitControls enableRotate />

      <RotatingObject>
        {children}
      </RotatingObject>
    </Canvas>
  )
}

export default SceneRoom;
