"use client"

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
  nodes: {
    Plane016: THREE.Mesh
    Plane016_1: THREE.Mesh
    Plane016_2: THREE.Mesh
    Plane016_3: THREE.Mesh
    Plane016_4: THREE.Mesh
    Plane016_5: THREE.Mesh
    Plane016_6: THREE.Mesh
    Plane016_7: THREE.Mesh
    Plane016_8: THREE.Mesh
    Plane016_9: THREE.Mesh
    Plane016_10: THREE.Mesh
    Plane016_11: THREE.Mesh
    Plane016_12: THREE.Mesh
    Plane016_13: THREE.Mesh
    Plane016_14: THREE.Mesh
    Plane016_15: THREE.Mesh
    Plane016_16: THREE.Mesh
    Plane016_17: THREE.Mesh
  }
  materials: {
    ['Truss Rod Cover Outline.']: THREE.MeshStandardMaterial
    ['Truss Rod Cover']: THREE.MeshStandardMaterial
    Pickups: THREE.MeshStandardMaterial
    ['Main Body/headstock']: THREE.MeshStandardMaterial
    ['Pickups and Screws']: THREE.MeshStandardMaterial
    Neck: THREE.MeshStandardMaterial
    FretBoard: THREE.MeshBasicMaterial
    Nut: THREE.MeshPhysicalMaterial
    ['Frets.']: THREE.MeshStandardMaterial
    ['Pickup selector.']: THREE.MeshStandardMaterial
    ['Bridge.']: THREE.MeshPhysicalMaterial
    ['Knobs.']: THREE.MeshPhysicalMaterial
    ['Brackets.']: THREE.MeshPhysicalMaterial
    ['Bracket Screws A.']: THREE.MeshStandardMaterial
    ['Bracket screws B.']: THREE.MeshStandardMaterial
    ['Tuners.']: THREE.MeshPhysicalMaterial
    ['Inlays.']: THREE.MeshStandardMaterial
    ['Strings.']: THREE.MeshStandardMaterial
  }
}

export function Explorer(props: JSX.IntrinsicElements['group']) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/explorernopickguard.glb') as GLTFResult;
  
  return (
    <group scale={viewport.width / 20} {...props} dispose={null}>
      {/* Ajuste da rotação para deixar a guitarra em pé */}
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 4.7, 0]} scale={0.14546}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials['Truss Rod Cover Outline.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_1.geometry}
          material={materials['Truss Rod Cover']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_2.geometry}
          material={materials.Pickups}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_3.geometry}
          material={materials['Main Body/headstock']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_4.geometry}
          material={materials['Pickups and Screws']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_5.geometry}
          material={materials.Neck}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_6.geometry}
          material={materials.FretBoard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_7.geometry}
          material={materials.Nut}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_8.geometry}
          material={materials['Frets.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_9.geometry}
          material={materials['Pickup selector.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_10.geometry}
          material={materials['Bridge.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_11.geometry}
          material={materials['Knobs.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_12.geometry}
          material={materials['Brackets.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_13.geometry}
          material={materials['Bracket Screws A.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_14.geometry}
          material={materials['Bracket screws B.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_15.geometry}
          material={materials['Tuners.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_16.geometry}
          material={materials['Inlays.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_17.geometry}
          material={materials['Strings.']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/explorernopickguard.glb')