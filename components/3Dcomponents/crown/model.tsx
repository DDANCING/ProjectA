"use client"

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
  nodes: {
    King_Crown_STL: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Crown(props: JSX.IntrinsicElements['group']) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/King_Crown_Blend.glb') as GLTFResult
  return (
    <group scale={viewport.width / 280} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.King_Crown_STL.geometry}
        material={materials['Material.001']}
        position={[-2.917, 0, 0]}
        rotation={[0.007, -0.913, 0.009]}
        scale={0.113}
      />
    </group>
  )
}

useGLTF.preload('/King_Crown_Blend.glb')
