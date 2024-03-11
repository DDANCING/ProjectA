import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh, PerspectiveCamera } from "three";
import { OrbitControls } from "@react-three/drei";

import { Guitar } from "@/Guitar";

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (boxRef.current) {
    }
  });

  return (
    <mesh ref={boxRef}>
      <Guitar />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <axesHelper args={[10]} />
      <Controls />
      <Box />
    </Canvas>
  );
}

export default ThreeScene;
