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
  const [direction, setDirection] = useState(1);
  const [angle, setAngle] = useState(0);

  useFrame(() => {
    if (objectRef.current) {
      let newAngle = angle + direction * 0.001;

      if (direction === 1 && newAngle >= Math.PI / 4) {
        // Girou 45 graus para a direita
        setDirection(-1);
      } else if (direction === -1 && newAngle <= -Math.PI / 4) {
        // Girou 90 graus para a esquerda (45+45)
        setDirection(1);
      }

      setAngle(newAngle);
      objectRef.current.rotation.y = newAngle;
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
