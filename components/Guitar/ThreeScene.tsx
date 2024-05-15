"use client"


import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from "@react-three/fiber"


type GLTFResult = GLTF & {
  nodes: {
    Bean_bag: THREE.Mesh
    Painting: THREE.Mesh
    Plane002: THREE.Mesh
    underneath1: THREE.Mesh
    switch2: THREE.Mesh
    switch1: THREE.Mesh
    switch_plastic: THREE.Mesh
    StringhE: THREE.Mesh
    StringG: THREE.Mesh
    Stringend: THREE.Mesh
    Stringe: THREE.Mesh
    StringD: THREE.Mesh
    StringB: THREE.Mesh
    StringA: THREE.Mesh
    screwy: THREE.Mesh
    screwx: THREE.Mesh
    screw5: THREE.Mesh
    screw2: THREE.Mesh
    screw: THREE.Mesh
    plate: THREE.Mesh
    Plane003: THREE.Mesh
    NurbsPath005_1: THREE.Mesh
    NurbsPath005_2: THREE.Mesh
    pickup4: THREE.Mesh
    pickup3: THREE.Mesh
    pickup2: THREE.Mesh
    pickup1: THREE.Mesh
    NurbsPath_1: THREE.Mesh
    NurbsPath_2: THREE.Mesh
    magnetos3: THREE.Mesh
    magnetos2: THREE.Mesh
    magnetos1: THREE.Mesh
    magnetos0: THREE.Mesh
    knobs001: THREE.Mesh
    knobs: THREE.Mesh
    knob005: THREE.Mesh
    knob004: THREE.Mesh
    knob003: THREE.Mesh
    knob002: THREE.Mesh
    knob001: THREE.Mesh
    knob: THREE.Mesh
    handle2: THREE.Mesh
    handle: THREE.Mesh
    NurbsPath002_1: THREE.Mesh
    NurbsPath002_2: THREE.Mesh
    Plane010: THREE.Mesh
    Plane010_1: THREE.Mesh
    Plane010_2: THREE.Mesh
    draaidingcenter1005: THREE.Mesh
    draaidingcenter1004: THREE.Mesh
    draaidingcenter1003: THREE.Mesh
    draaidingcenter1002: THREE.Mesh
    draaidingcenter1001: THREE.Mesh
    draaidingcenter1: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cube022: THREE.Mesh
    Cube043: THREE.Mesh
    Cube044: THREE.Mesh
    Cube045: THREE.Mesh
    Cube046: THREE.Mesh
    Cube047: THREE.Mesh
    Cube048: THREE.Mesh
    Circle059: THREE.Mesh
    Circle058: THREE.Mesh
    Circle057: THREE.Mesh
    Circle056: THREE.Mesh
    Circle055: THREE.Mesh
    Circle054: THREE.Mesh
    Circle053: THREE.Mesh
    Circle052: THREE.Mesh
    Circle051: THREE.Mesh
    Circle050: THREE.Mesh
    Circle049: THREE.Mesh
    Circle048: THREE.Mesh
    Circle047: THREE.Mesh
    Circle046: THREE.Mesh
    Circle045: THREE.Mesh
    Circle044: THREE.Mesh
    Circle043: THREE.Mesh
    Circle042: THREE.Mesh
    Circle041: THREE.Mesh
    Circle040: THREE.Mesh
    Circle039: THREE.Mesh
    Circle038: THREE.Mesh
    Circle037: THREE.Mesh
    Circle036: THREE.Mesh
    Circle035: THREE.Mesh
    Circle034: THREE.Mesh
    Circle033: THREE.Mesh
    Circle032: THREE.Mesh
    Circle031: THREE.Mesh
    Circle030: THREE.Mesh
    Circle029: THREE.Mesh
    Circle028: THREE.Mesh
    Circle027: THREE.Mesh
    Circle026: THREE.Mesh
    Circle025: THREE.Mesh
    Circle024: THREE.Mesh
    Circle023: THREE.Mesh
    Circle022: THREE.Mesh
    Circle021: THREE.Mesh
    Circle020: THREE.Mesh
    Circle019: THREE.Mesh
    Circle018: THREE.Mesh
    Circle017: THREE.Mesh
    Circle016: THREE.Mesh
    Circle015: THREE.Mesh
    Circle014: THREE.Mesh
    Circle013: THREE.Mesh
    Circle012: THREE.Mesh
    Circle011: THREE.Mesh
    Circle010: THREE.Mesh
    Circle009: THREE.Mesh
    Circle008: THREE.Mesh
    Circle007: THREE.Mesh
    Circle006: THREE.Mesh
    Circle005: THREE.Mesh
    Circle004: THREE.Mesh
    Circle003: THREE.Mesh
    Circle002: THREE.Mesh
    Circle060: THREE.Mesh
    Circle: THREE.Mesh
    Cylinder014: THREE.Mesh
    Cylinder014_1: THREE.Mesh
    Cylinder014_2: THREE.Mesh
    Cylinder015: THREE.Mesh
    Cylinder015_1: THREE.Mesh
    Cylinder015_2: THREE.Mesh
    Cylinder015_3: THREE.Mesh
    Plane029: THREE.Mesh
    Plane029_1: THREE.Mesh
    Plane029_2: THREE.Mesh
    Cylinder016: THREE.Mesh
    Cylinder016_1: THREE.Mesh
    Cylinder016_2: THREE.Mesh
    Cylinder016_3: THREE.Mesh
    Cylinder016_4: THREE.Mesh
    Cylinder016_5: THREE.Mesh
    Cloth: THREE.Mesh
    Base: THREE.Mesh
    Cube003: THREE.Mesh
    Base001: THREE.Mesh
    Head: THREE.Mesh
    Pillow_left: THREE.Mesh
    Pillow_right: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    Cube006: THREE.Mesh
    Cube007: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
    Cube011: THREE.Mesh
    Cube012: THREE.Mesh
    Cube013: THREE.Mesh
    Cube014: THREE.Mesh
    Cube015: THREE.Mesh
    Cube016: THREE.Mesh
    Cube017: THREE.Mesh
    Cube018: THREE.Mesh
    Cube019: THREE.Mesh
    Cube020: THREE.Mesh
    Cube021: THREE.Mesh
    Cube033: THREE.Mesh
    Cube034: THREE.Mesh
    Cube035: THREE.Mesh
    Cube036: THREE.Mesh
    Cube037: THREE.Mesh
    Cube038: THREE.Mesh
    Cube039: THREE.Mesh
    Cube040: THREE.Mesh
    Cube041: THREE.Mesh
    Cube042: THREE.Mesh
    Cylinder: THREE.Mesh
    Icosphere: THREE.Mesh
    Cylinder009: THREE.Mesh
    Nightstand: THREE.Mesh
    Vase_1: THREE.Mesh
    Vase_2: THREE.Mesh
    Cube031: THREE.Mesh
    Cube032: THREE.Mesh
    Cube023: THREE.Mesh
    Cube001: THREE.Mesh
    Cube: THREE.Mesh
    Cube002: THREE.Mesh
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
  }
  materials: {
    ['Material.035']: THREE.MeshStandardMaterial
    ['Black plastic']: THREE.MeshPhysicalMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    METALIC: THREE.MeshStandardMaterial
    ['white plastic']: THREE.MeshPhysicalMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshPhysicalMaterial
    ['Material.027']: THREE.MeshPhysicalMaterial
    ['METALIC.014']: THREE.MeshStandardMaterial
    ['METALIC.013']: THREE.MeshStandardMaterial
    ['METALIC.012']: THREE.MeshStandardMaterial
    ['METALIC.011']: THREE.MeshStandardMaterial
    ['METALIC.010']: THREE.MeshStandardMaterial
    ['METALIC.009']: THREE.MeshStandardMaterial
    ['METALIC.007']: THREE.MeshStandardMaterial
    ['METALIC.006']: THREE.MeshStandardMaterial
    ['METALIC.005']: THREE.MeshStandardMaterial
    ['METALIC.004']: THREE.MeshStandardMaterial
    ['METALIC.003']: THREE.MeshStandardMaterial
    ['METALIC.002']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['METALIC.001']: THREE.MeshStandardMaterial
    Pot_02: THREE.MeshStandardMaterial
    Soil: THREE.MeshPhysicalMaterial
    SnakePlant_Leave: THREE.MeshStandardMaterial
    Pot_03: THREE.MeshStandardMaterial
    Palm_Leaves: THREE.MeshStandardMaterial
    Stalk: THREE.MeshStandardMaterial
    Pot_01: THREE.MeshStandardMaterial
    Coconut: THREE.MeshStandardMaterial
    Epipremium_01: THREE.MeshStandardMaterial
    Epipremium_02: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    Metalic: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    Nightstand: THREE.MeshStandardMaterial
    Vase: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshPhysicalMaterial
    ['Material.032']: THREE.MeshStandardMaterial
  }
}

export function Room(props: JSX.IntrinsicElements['group']) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/room.glb') as GLTFResult
  return (
    <group scale={viewport.width / 35} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bean_bag.geometry}
        material={materials['Material.035']}
        position={[-3.539, 0.938, -3.567]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Painting.geometry}
        material={materials['Black plastic']}
        position={[1.846, 3.206, -4.091]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-4.063, -2.219, -2.219]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.007']}
        position={[-0.354, 2.543, 4.715]}
        rotation={[Math.PI / 2, 0, -0.043]}
        scale={[0.701, 0.414, 0.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.underneath1.geometry}
        material={materials['Black plastic']}
        position={[0.308, 1.239, -1.383]}
        rotation={[0, 0.888, 0]}
        scale={[0.064, 0.076, 0.076]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch2.geometry}
        material={materials.METALIC}
        position={[-0.353, 1.36, -1.466]}
        rotation={[-1.325, 0.855, 1.24]}
        scale={[0.003, 0.018, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch1.geometry}
        material={materials['white plastic']}
        position={[-0.368, 1.379, -1.47]}
        rotation={[-0.769, 0.611, 0.86]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch_plastic.geometry}
        material={materials['white plastic']}
        position={[-0.341, 1.353, -1.463]}
        rotation={[0, -0.199, 0]}
        scale={[0.232, 0.454, 0.098]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringhE.geometry}
        material={materials['Material.010']}
        position={[0.007, 1.378, -1.508]}
        rotation={[-Math.PI, 0.682, -Math.PI]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringG.geometry}
        material={materials['Material.019']}
        position={[0.047, 1.378, -1.556]}
        rotation={[-Math.PI, 0.682, -Math.PI]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringend.geometry}
        material={materials.METALIC}
        position={[-0.306, 1.354, -1.848]}
        rotation={[0, 0.888, 0]}
        scale={[0.14, 0.059, 0.059]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringe.geometry}
        material={materials['Material.021']}
        position={[0.11, 1.378, -1.635]}
        rotation={[-Math.PI, 0.682, -Math.PI]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringD.geometry}
        material={materials['Material.022']}
        position={[0.067, 1.378, -1.581]}
        rotation={[-Math.PI, 0.682, -Math.PI]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringB.geometry}
        material={materials['Material.023']}
        position={[1.799, 1.358, -0.112]}
        rotation={[0, 0.888, 0]}
        scale={3.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringA.geometry}
        material={materials['Material.024']}
        position={[0.088, 1.378, -1.608]}
        rotation={[-Math.PI, 0.682, -Math.PI]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwy.geometry}
        material={materials.METALIC}
        position={[-0.625, 1.298, -2.125]}
        rotation={[-Math.PI / 2, 0, 0.888]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwx.geometry}
        material={materials['Black plastic']}
        position={[1.494, 1.339, -0.403]}
        rotation={[0, 0.888, 0]}
        scale={0.055}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw5.geometry}
        material={materials.METALIC}
        position={[0.809, 1.293, -1.41]}
        rotation={[-Math.PI / 2, 0, -2.607]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw2.geometry}
        material={materials['Black plastic']}
        position={[-0.816, 1.294, -1.692]}
        rotation={[-Math.PI / 2, 0, 1.633]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw.geometry}
        material={materials['Black plastic']}
        position={[-0.806, 1.294, -1.817]}
        rotation={[-Math.PI / 2, 0, 1.346]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plate.geometry}
        material={materials['Black plastic']}
        position={[-0.15, 1.36, -1.74]}
        rotation={[0, 0.888, 0]}
        scale={[0.121, 0.121, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['white plastic']}
        position={[-0.208, 1.241, -1.775]}
        rotation={[0, 0.888, 0]}
        scale={[0.16, 0.205, 0.239]}
      />
      <group position={[-0.113, 1.36, -1.553]} rotation={[0, 0.521, 0]} scale={0.057}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005_1.geometry}
          material={materials['white plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005_2.geometry}
          material={materials['Black plastic']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup4.geometry}
        material={materials['white plastic']}
        position={[-0.171, 1.347, -1.759]}
        rotation={[0, 0.888, 0]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup3.geometry}
        material={materials['white plastic']}
        position={[-0.125, 1.347, -1.721]}
        rotation={[0, 0.888, 0]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup2.geometry}
        material={materials['white plastic']}
        position={[0.005, 1.346, -1.615]}
        rotation={[0, 0.888, 0]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup1.geometry}
        material={materials['white plastic']}
        position={[0.149, 1.346, -1.501]}
        rotation={[0, 0.888, 0]}
        scale={0.038}
      />
      <group position={[-0.134, 1.295, -1.723]} rotation={[Math.PI, -0.888, Math.PI]} scale={0.137}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_1.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_2.geometry}
          material={materials['Black plastic']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos3.geometry}
        material={materials.METALIC}
        position={[-0.119, 1.363, -1.826]}
        rotation={[0, 0.888, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos2.geometry}
        material={materials.METALIC}
        position={[-0.094, 1.363, -1.761]}
        rotation={[0, 0.888, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos1.geometry}
        material={materials.METALIC}
        position={[0.036, 1.366, -1.655]}
        rotation={[0, 0.888, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos0.geometry}
        material={materials.METALIC}
        position={[0.091, 1.366, -1.433]}
        rotation={[0, 0.888, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs001.geometry}
        material={materials['white plastic']}
        position={[-0.525, 1.389, -1.52]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials['white plastic']}
        position={[-0.343, 1.389, -1.59]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob005.geometry}
        material={materials.METALIC}
        position={[1.851, 1.363, -0.046]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob004.geometry}
        material={materials.METALIC}
        position={[1.806, 1.363, -0.114]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob003.geometry}
        material={materials.METALIC}
        position={[1.761, 1.363, -0.184]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob002.geometry}
        material={materials.METALIC}
        position={[1.716, 1.363, -0.251]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob001.geometry}
        material={materials.METALIC}
        position={[1.673, 1.363, -0.319]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.METALIC}
        position={[1.628, 1.363, -0.387]}
        rotation={[0, 0.888, 0]}
        scale={[0.01, 0.011, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle2.geometry}
        material={materials.METALIC}
        position={[0.804, 1.293, -1.418]}
        rotation={[Math.PI / 2, 0, 2.607]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials.METALIC}
        position={[-0.617, 1.298, -2.119]}
        rotation={[Math.PI / 2, 0, -0.888]}
        scale={0.015}
      />
      <group position={[1.77, 1.297, -0.237]} rotation={[-Math.PI, 0.989, -Math.PI]} scale={0.069}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002_1.geometry}
          material={materials['white plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002_2.geometry}
          material={materials['Black plastic']}
        />
      </group>
      <group
        position={[0.787, 1.365, -0.98]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={[0.335, 3.35, 1.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_1.geometry}
          material={materials['Black plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_2.geometry}
          material={materials.METALIC}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1005.geometry}
        material={materials.METALIC}
        position={[1.628, 1.267, -0.391]}
        rotation={[Math.PI, -0.577, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1004.geometry}
        material={materials.METALIC}
        position={[1.673, 1.267, -0.323]}
        rotation={[Math.PI, -0.577, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1003.geometry}
        material={materials.METALIC}
        position={[1.716, 1.267, -0.254]}
        rotation={[Math.PI, -0.577, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1002.geometry}
        material={materials.METALIC}
        position={[1.76, 1.267, -0.183]}
        rotation={[Math.PI, -0.609, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1001.geometry}
        material={materials.METALIC}
        position={[1.808, 1.267, -0.114]}
        rotation={[Math.PI, -0.621, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1.geometry}
        material={materials.METALIC}
        position={[1.854, 1.267, -0.046]}
        rotation={[Math.PI, -0.625, Math.PI]}
        scale={3.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[1.628, 1.358, -0.387]}
        rotation={[0, 0.888, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.METALIC}
        position={[-0.35, 1.372, -1.793]}
        rotation={[-0.042, 0.887, 0.037]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials.METALIC}
        position={[-0.328, 1.372, -1.82]}
        rotation={[-0.043, 0.9, 0.037]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials.METALIC}
        position={[-0.306, 1.372, -1.847]}
        rotation={[-0.042, 0.882, 0.036]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials.METALIC}
        position={[-0.286, 1.372, -1.874]}
        rotation={[-0.042, 0.882, 0.036]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials.METALIC}
        position={[-0.262, 1.372, -1.899]}
        rotation={[-0.041, 0.866, 0.035]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials.METALIC}
        position={[-0.241, 1.372, -1.927]}
        rotation={[-0.041, 0.866, 0.035]}
        scale={[0.017, 0.008, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[-0.333, 1.363, -1.462]}
        rotation={[0, 1.367, 0]}
        scale={[0.004, 0.158, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle059.geometry}
        material={nodes.Circle059.material}
        position={[1.22, 1.37, -0.628]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle058.geometry}
        material={nodes.Circle058.material}
        position={[1.06, 1.37, -0.758]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle057.geometry}
        material={nodes.Circle057.material}
        position={[0.918, 1.37, -0.874]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle056.geometry}
        material={nodes.Circle056.material}
        position={[0.787, 1.37, -0.98]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={nodes.Circle055.material}
        position={[0.651, 1.37, -1.152]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle054.geometry}
        material={nodes.Circle054.material}
        position={[0.591, 1.37, -1.078]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={nodes.Circle053.material}
        position={[0.481, 1.37, -1.229]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={nodes.Circle052.material}
        position={[0.401, 1.37, -1.294]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={nodes.Circle051.material}
        position={[0.33, 1.37, -1.352]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={nodes.Circle050.material}
        position={[0.265, 1.37, -1.405]}
        rotation={[0, 0.888, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials['METALIC.014']}
        position={[-0.396, 1.369, -1.832]}
        rotation={[-1.58, -0.011, 0.893]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials['METALIC.013']}
        position={[-0.374, 1.369, -1.859]}
        rotation={[-1.58, -0.011, 0.893]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials['METALIC.012']}
        position={[-0.352, 1.369, -1.886]}
        rotation={[-1.58, -0.011, 0.888]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials['METALIC.011']}
        position={[-0.33, 1.369, -1.912]}
        rotation={[-1.58, -0.011, 0.888]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials['METALIC.010']}
        position={[-0.308, 1.369, -1.939]}
        rotation={[-1.58, -0.011, 0.888]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials['METALIC.009']}
        position={[-0.287, 1.369, -1.966]}
        rotation={[-1.58, -0.011, 0.888]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials['METALIC.007']}
        position={[-0.297, 1.361, -1.749]}
        rotation={[0, 1.123, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials['METALIC.006']}
        position={[-0.275, 1.361, -1.777]}
        rotation={[0, -0.11, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials['METALIC.005']}
        position={[-0.253, 1.361, -1.803]}
        rotation={[0, -0.731, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={materials['METALIC.004']}
        position={[-0.253, 1.358, -1.803]}
        rotation={[0, -0.731, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials['METALIC.003']}
        position={[-0.232, 1.361, -1.829]}
        rotation={[0, -0.731, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials['METALIC.002']}
        position={[-0.211, 1.361, -1.856]}
        rotation={[Math.PI, -0.011, Math.PI]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle037.geometry}
        material={materials.METALIC}
        position={[-0.091, 1.231, -1.854]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials['Material.031']}
        position={[-0.326, 1.231, -1.692]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials.METALIC}
        position={[-0.295, 1.231, -2.02]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials.METALIC}
        position={[-0.468, 1.231, -1.807]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials.METALIC}
        position={[-0.123, 1.231, -1.527]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials.METALIC}
        position={[0.05, 1.231, -1.739]}
        rotation={[-Math.PI, -0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials.METALIC}
        position={[0.228, 1.23, -1.384]}
        rotation={[Math.PI, -0.888, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials.METALIC}
        position={[0.291, 1.23, -1.461]}
        rotation={[Math.PI, -0.888, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials.METALIC}
        position={[0.388, 1.23, -1.383]}
        rotation={[Math.PI, -0.888, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials.METALIC}
        position={[0.325, 1.23, -1.305]}
        rotation={[Math.PI, -0.888, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials.METALIC}
        position={[1.727, 1.281, -0.426]}
        rotation={[-0.995, 0.217, -1.128]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials.METALIC}
        position={[1.772, 1.281, -0.357]}
        rotation={[-0.875, 0.361, -1.135]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials.METALIC}
        position={[1.815, 1.281, -0.289]}
        rotation={[0.885, 0.37, -1.909]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials.METALIC}
        position={[1.858, 1.281, -0.22]}
        rotation={[0.541, 0.506, -1.802]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.METALIC}
        position={[1.905, 1.281, -0.153]}
        rotation={[-0.149, 0.56, -1.477]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials.METALIC}
        position={[1.935, 1.28, -0.076]}
        rotation={[0.836, 0.358, -1.967]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials.METALIC}
        position={[-0.815, 1.296, -1.753]}
        rotation={[-1.721, 0.01, 1.515]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials.METALIC}
        position={[-0.816, 1.296, -1.753]}
        rotation={[Math.PI / 2, 0, -1.495]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials.METALIC}
        position={[-0.644, 1.358, -1.526]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials.METALIC}
        position={[-0.447, 1.358, -1.437]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials.METALIC}
        position={[-0.4, 1.358, -1.476]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials.METALIC}
        position={[-0.266, 1.358, -1.448]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials.METALIC}
        position={[-0.211, 1.358, -1.367]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials.METALIC}
        position={[-0.075, 1.357, -1.201]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials.METALIC}
        position={[-0.081, 1.358, -1.514]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials.METALIC}
        position={[-0.233, 1.358, -1.636]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials.METALIC}
        position={[-0.065, 1.358, -1.845]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={materials.METALIC}
        position={[-0.348, 1.358, -1.69]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials.METALIC}
        position={[-0.138, 1.358, -1.933]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials['METALIC.001']}
        position={[-0.189, 1.361, -1.883]}
        rotation={[0, 0.888, 0]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.METALIC}
        position={[0.088, 1.358, -1.777]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.METALIC}
        position={[0.085, 1.358, -1.719]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.METALIC}
        position={[0.124, 1.358, -1.719]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.METALIC}
        position={[0.382, 1.358, -1.511]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.METALIC}
        position={[0.227, 1.358, -1.605]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.METALIC}
        position={[0.062, 1.358, -1.399]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle060.geometry}
        material={materials.METALIC}
        position={[0.048, 1.358, -1.341]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.METALIC}
        position={[0.044, 1.358, -1.052]}
        rotation={[0, 0.888, 0]}
        scale={0.098}
      />
      <group position={[3.639, 0.059, 1.99]} rotation={[-Math.PI, 1.463, -Math.PI]} scale={3.642}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials.Pot_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials.Soil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials.SnakePlant_Leave}
        />
      </group>
      <group position={[-1.482, 1.839, 4.639]} scale={1.326}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.Pot_03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.Soil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials.Palm_Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_3.geometry}
          material={materials.Stalk}
        />
      </group>
      <group position={[3.962, 3.42, 4.467]} rotation={[-Math.PI, 0.242, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials.SnakePlant_Leave}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_1.geometry}
          material={materials.Pot_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_2.geometry}
          material={materials.Soil}
        />
      </group>
      <group position={[-4.539, 0.117, 0.558]} scale={3.78}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials.Soil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.Pot_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials.Coconut}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_3.geometry}
          material={materials.Epipremium_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_4.geometry}
          material={materials.Epipremium_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_5.geometry}
          material={materials.Stalk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloth.geometry}
        material={materials.Material}
        position={[1.046, 1.241, -2.034]}
        scale={[2.561, 2.008, 2.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Metalic}
        position={[4.066, 0.624, -2.077]}
        scale={[1, 0.905, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.012']}
        position={[-1.013, 0.624, -2.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.Metalic}
        position={[4.066, 0.624, -2.077]}
        scale={[1, 0.905, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head.geometry}
        material={materials.Metalic}
        position={[-1, 0.493, -1.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_left.geometry}
        material={materials['Material.002']}
        position={[3.074, 1.551, -3.06]}
        rotation={[0, 0.3, 0]}
        scale={[0.433, 0.826, 0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_right.geometry}
        material={materials['Material.002']}
        position={[3.698, 1.66, -1.318]}
        rotation={[0, 0, 0.685]}
        scale={[0.415, 0.845, 0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.003']}
        position={[2.998, 3.532, 5.382]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.003']}
        position={[2.998, 2.596, 3.942]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Material.003']}
        position={[2.998, 1.721, 5.336]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.014']}
        position={[3.867, 2.718, 3.035]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.013']}
        position={[3.867, 2.718, 2.773]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.017']}
        position={[3.867, 2.718, 3.123]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Material.016']}
        position={[3.867, 2.718, 2.948]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.015']}
        position={[3.867, 2.718, 2.86]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.013']}
        position={[3.96, 3.693, 3.423]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['Material.017']}
        position={[3.946, 3.712, 3.773]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['Material.020']}
        position={[3.926, 3.693, 3.685]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.020']}
        position={[3.946, 3.683, 3.597]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.015']}
        position={[3.946, 3.731, 3.51]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Material.013']}
        position={[3.96, 3.693, 3.869]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.017']}
        position={[3.946, 3.712, 4.219]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.020']}
        position={[3.926, 3.693, 4.131]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Material.020']}
        position={[3.946, 3.683, 4.044]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Material.015']}
        position={[3.946, 3.731, 3.956]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials['Material.013']}
        position={[3.96, 1.874, 3.707]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials['Material.017']}
        position={[3.946, 1.894, 4.057]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.020']}
        position={[3.926, 1.874, 3.969]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials['Material.020']}
        position={[3.946, 1.865, 3.882]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials['Material.015']}
        position={[3.946, 1.913, 3.794]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials['Material.013']}
        position={[3.96, 1.874, 4.153]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials['Material.017']}
        position={[3.946, 1.894, 4.503]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials['Material.020']}
        position={[3.926, 1.874, 4.415]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials['Material.020']}
        position={[3.946, 1.865, 4.328]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials['Material.015']}
        position={[3.946, 1.913, 4.24]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.011']}
        position={[3.937, 2.66, 3.015]}
        scale={0.109}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.018']}
        position={[3.94, 2.671, 2.543]}
        rotation={[-0.095, -0.238, -0.518]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.034']}
        position={[3.956, 1.791, 3.46]}
        scale={0.187}
      />
      <group position={[3.626, 0.114, 0.858]} rotation={[0, -1.552, 0]} scale={2.161}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nightstand.geometry}
          material={materials.Nightstand}
          position={[0, 0.498, 0]}
        />
      </group>
      <group position={[3.429, 0.615, 1.115]} scale={1.312}>
        <group position={[0.075, 0.498, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vase_1.geometry}
            material={materials.Vase}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vase_2.geometry}
            material={materials['Material.009']}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials['Material.032']}
        position={[-0.348, 1.883, 4.107]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials['Material.032']}
        position={[-0.413, 1.885, 4.802]}
        scale={0.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.Pot_03}
        position={[-0.438, 1.227, 4.362]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        position={[0.204, 1.002, -5.566]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.002']}
        position={[-3.947, 1.002, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[3.827, 1.002, 0.052]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.012']}
        position={[-0.729, 0.082, 0.568]}
        scale={[3.3, 1.161, 2.524]}
      />
    </group>
  )
}

useGLTF.preload('/room.glb')