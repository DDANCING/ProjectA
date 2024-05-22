"use client"

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
  nodes: {
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
    Plane006: THREE.Mesh
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
    Plane011: THREE.Mesh
    Plane011_1: THREE.Mesh
    Plane011_2: THREE.Mesh
    draaidingcenter1005: THREE.Mesh
    draaidingcenter1004: THREE.Mesh
    draaidingcenter1003: THREE.Mesh
    draaidingcenter1002: THREE.Mesh
    draaidingcenter1001: THREE.Mesh
    draaidingcenter1: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cube022: THREE.Mesh
    Cube024: THREE.Mesh
    Cube025: THREE.Mesh
    Cube026: THREE.Mesh
    Cube027: THREE.Mesh
    Cube028: THREE.Mesh
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
    Circle001: THREE.Mesh
    Circle: THREE.Mesh
    Sphere016: THREE.Mesh
    Roundcube003_1: THREE.Mesh
    Roundcube003_2: THREE.Mesh
    Roundcube003_3: THREE.Mesh
    Roundcube003_4: THREE.Mesh
    Roundcube003_5: THREE.Mesh
    Roundcube003_6: THREE.Mesh
    Roundcube003_7: THREE.Mesh
    Roundcube003_8: THREE.Mesh
    Roundcube003_9: THREE.Mesh
    Roundcube003_10: THREE.Mesh
    Roundcube001_1: THREE.Mesh
    Roundcube001_2: THREE.Mesh
    Roundcube001_3: THREE.Mesh
    Roundcube001_4: THREE.Mesh
    Roundcube001_5: THREE.Mesh
    Painting: THREE.Mesh
    Plane002: THREE.Mesh
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
    Painting001: THREE.Mesh
    Cloth: THREE.Mesh
    Base: THREE.Mesh
    Cube003: THREE.Mesh
    Base001: THREE.Mesh
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
    ['Black plastic.001']: THREE.MeshPhysicalMaterial
    ['METALIC.008']: THREE.MeshStandardMaterial
    ['white plastic.001']: THREE.MeshPhysicalMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshPhysicalMaterial
    WOOD2: THREE.MeshPhysicalMaterial
    ['Material.033']: THREE.MeshPhysicalMaterial
    ['METALIC.015']: THREE.MeshStandardMaterial
    ['METALIC.016']: THREE.MeshStandardMaterial
    ['METALIC.017']: THREE.MeshStandardMaterial
    ['METALIC.018']: THREE.MeshStandardMaterial
    ['METALIC.019']: THREE.MeshStandardMaterial
    ['METALIC.020']: THREE.MeshStandardMaterial
    ['METALIC.021']: THREE.MeshStandardMaterial
    ['METALIC.022']: THREE.MeshStandardMaterial
    ['METALIC.023']: THREE.MeshStandardMaterial
    ['METALIC.024']: THREE.MeshStandardMaterial
    ['METALIC.025']: THREE.MeshStandardMaterial
    ['METALIC.026']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['METALIC.027']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Marshall pic']: THREE.MeshStandardMaterial
    ['Black leather']: THREE.MeshStandardMaterial
    ['Corner metal']: THREE.MeshBasicMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Back ']: THREE.MeshBasicMaterial
    ['Material.007']: THREE.MeshStandardMaterial
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
    ['Material.040']: THREE.MeshStandardMaterial
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
  const { nodes, materials } = useGLTF('/room1.glb') as GLTFResult
  return (
    <group scale={viewport.width / 30} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.underneath1.geometry}
        material={materials['Black plastic.001']}
        position={[-0.661, 1.381, -0.626]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.054, 0.064, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch2.geometry}
        material={materials['METALIC.008']}
        position={[-1.145, 1.395, -0.321]}
        rotation={[-1.716, 0.798, 2.22]}
        scale={[0.002, 0.015, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch1.geometry}
        material={materials['white plastic.001']}
        position={[-1.157, 1.409, -0.31]}
        rotation={[-1.007, 0.979, 1.659]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch_plastic.geometry}
        material={materials['white plastic.001']}
        position={[-1.135, 1.391, -0.326]}
        rotation={[0.361, 0.452, -0.033]}
        scale={[0.196, 0.384, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringhE.geometry}
        material={materials['Material.001']}
        position={[-0.923, 1.476, -0.518]}
        rotation={[-2.796, 0.032, -3.112]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringG.geometry}
        material={materials['Material.004']}
        position={[-0.922, 1.494, -0.568]}
        rotation={[-2.796, 0.032, -3.112]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringend.geometry}
        material={materials['METALIC.008']}
        position={[-1.309, 1.491, -0.585]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.118, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringe.geometry}
        material={materials['Material.005']}
        position={[-0.919, 1.522, -0.648]}
        rotation={[-2.796, 0.032, -3.112]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringD.geometry}
        material={materials['Material.006']}
        position={[-0.921, 1.503, -0.593]}
        rotation={[-2.796, 0.032, -3.112]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringB.geometry}
        material={materials['Material.008']}
        position={[0.997, 1.398, -0.523]}
        rotation={[1.108, 1.527, -0.762]}
        scale={2.833}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringA.geometry}
        material={materials['Material.026']}
        position={[-0.92, 1.512, -0.62]}
        rotation={[-2.796, 0.032, -3.112]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwy.geometry}
        material={materials['METALIC.008']}
        position={[-1.667, 1.464, -0.619]}
        rotation={[-1.224, 0.03, 1.539]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwx.geometry}
        material={materials['Black plastic.001']}
        position={[0.53, 1.41, -0.563]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw5.geometry}
        material={materials['METALIC.008']}
        position={[-0.336, 1.509, -0.873]}
        rotation={[-1.224, 0.03, -1.956]}
        scale={0.104}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw2.geometry}
        material={materials['Black plastic.001']}
        position={[-1.476, 1.337, -0.284]}
        rotation={[-1.224, 0.03, 2.284]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw.geometry}
        material={materials['Black plastic.001']}
        position={[-1.528, 1.365, -0.36]}
        rotation={[-1.224, 0.03, 1.997]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plate.geometry}
        material={materials['Black plastic.001']}
        position={[-1.149, 1.494, -0.592]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.103, 0.103, 0.058]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.029']}
        position={[1.099, 1.354, -0.45]}
        rotation={[0.35, -0.055, -0.043]}
        scale={[0.045, 0.063, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials['white plastic.001']}
        position={[-1.209, 1.398, -0.619]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.135, 0.173, 0.202]}
      />
      <group position={[-1.028, 1.454, -0.492]} rotation={[0.418, 1.171, -0.077]} scale={0.048}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005_1.geometry}
          material={materials['white plastic.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005_2.geometry}
          material={materials['Black plastic.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup4.geometry}
        material={materials['white plastic.001']}
        position={[-1.173, 1.484, -0.597]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup3.geometry}
        material={materials['white plastic.001']}
        position={[-1.122, 1.482, -0.596]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup2.geometry}
        material={materials['white plastic.001']}
        position={[-0.981, 1.476, -0.593]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup1.geometry}
        material={materials['white plastic.001']}
        position={[-0.826, 1.471, -0.592]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.032}
      />
      <group position={[-1.131, 1.44, -0.608]} rotation={[-2.034, -1.527, -2.38]} scale={0.116}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_1.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_2.geometry}
          material={materials['Black plastic.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos3.geometry}
        material={materials['METALIC.008']}
        position={[-1.172, 1.522, -0.66]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos2.geometry}
        material={materials['METALIC.008']}
        position={[-1.122, 1.509, -0.631]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos1.geometry}
        material={materials['METALIC.008']}
        position={[-0.98, 1.507, -0.628]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos0.geometry}
        material={materials['METALIC.008']}
        position={[-0.829, 1.461, -0.515]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs001.geometry}
        material={materials['white plastic.001']}
        position={[-1.287, 1.405, -0.262]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials['white plastic.001']}
        position={[-1.201, 1.45, -0.395]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob005.geometry}
        material={materials['METALIC.008']}
        position={[1.065, 1.394, -0.506]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob004.geometry}
        material={materials['METALIC.008']}
        position={[1, 1.404, -0.527]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob003.geometry}
        material={materials['METALIC.008']}
        position={[0.934, 1.414, -0.548]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob002.geometry}
        material={materials['METALIC.008']}
        position={[0.87, 1.423, -0.569]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob001.geometry}
        material={materials['METALIC.008']}
        position={[0.806, 1.433, -0.59]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials['METALIC.008']}
        position={[0.74, 1.443, -0.611]}
        rotation={[1.108, 1.527, -0.762]}
        scale={[0.008, 0.009, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle2.geometry}
        material={materials['METALIC.008']}
        position={[-0.344, 1.51, -0.875]}
        rotation={[1.917, -0.03, 1.956]}
        scale={0.012}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials['METALIC.008']}
        position={[-1.658, 1.464, -0.619]}
        rotation={[1.917, -0.03, -1.539]}
        scale={0.013}
      />
      <group position={[0.912, 1.375, -0.605]} rotation={[-2.805, 0.338, -3.11]} scale={0.059}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002_1.geometry}
          material={materials.WOOD2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002_2.geometry}
          material={materials['Black plastic.001']}
        />
      </group>
      <group
        position={[-0.129, 1.458, -0.571]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={[0.283, 2.833, 0.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_1.geometry}
          material={materials['Black plastic.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_2.geometry}
          material={materials['METALIC.008']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1005.geometry}
        material={materials['METALIC.008']}
        position={[0.736, 1.367, -0.641]}
        rotation={[-2.711, -1.227, -3.052]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1004.geometry}
        material={materials['METALIC.008']}
        position={[0.801, 1.357, -0.62]}
        rotation={[-2.711, -1.227, -3.052]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1003.geometry}
        material={materials['METALIC.008']}
        position={[0.866, 1.347, -0.598]}
        rotation={[-2.711, -1.227, -3.052]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1002.geometry}
        material={materials['METALIC.008']}
        position={[0.932, 1.337, -0.575]}
        rotation={[-2.702, -1.258, -3.044]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1001.geometry}
        material={materials['METALIC.008']}
        position={[0.999, 1.327, -0.555]}
        rotation={[-2.698, -1.27, -3.04]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1.geometry}
        material={materials['METALIC.008']}
        position={[1.065, 1.318, -0.535]}
        rotation={[-2.696, -1.274, -3.038]}
        scale={2.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0.74, 1.439, -0.612]}
        rotation={[1.108, 1.527, -0.762]}
        scale={-0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['METALIC.008']}
        position={[-1.31, 1.485, -0.524]}
        rotation={[0.457, 1.538, -0.107]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials['METALIC.008']}
        position={[-1.309, 1.495, -0.552]}
        rotation={[0.535, 1.551, -0.184]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials['METALIC.008']}
        position={[-1.308, 1.505, -0.579]}
        rotation={[0.443, 1.533, -0.093]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials['METALIC.008']}
        position={[-1.308, 1.515, -0.606]}
        rotation={[0.443, 1.533, -0.093]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['METALIC.008']}
        position={[-1.305, 1.524, -0.634]}
        rotation={[0.414, 1.517, -0.065]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['METALIC.008']}
        position={[-1.305, 1.534, -0.661]}
        rotation={[0.414, 1.517, -0.065]}
        scale={[0.014, 0.007, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle059.geometry}
        material={nodes.Circle059.material}
        position={[0.343, 1.444, -0.561]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle058.geometry}
        material={nodes.Circle058.material}
        position={[0.102, 1.449, -0.564]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle057.geometry}
        material={nodes.Circle057.material}
        position={[-0.039, 1.455, -0.567]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle056.geometry}
        material={nodes.Circle056.material}
        position={[-0.168, 1.46, -0.569]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={nodes.Circle055.material}
        position={[-0.33, 1.478, -0.606]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle054.geometry}
        material={nodes.Circle054.material}
        position={[-0.311, 1.455, -0.536]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={nodes.Circle053.material}
        position={[-0.47, 1.471, -0.575]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={nodes.Circle052.material}
        position={[-0.549, 1.478, -0.578]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={nodes.Circle051.material}
        position={[-0.626, 1.481, -0.58]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={nodes.Circle050.material}
        position={[-0.698, 1.484, -0.581]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials['METALIC.015']}
        position={[-1.283, 1.48, -0.53]}
        rotation={[-1.225, 0.016, 1.544]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials['METALIC.016']}
        position={[-1.36, 1.495, -0.554]}
        rotation={[-1.225, 0.016, 1.544]}
        scale={0.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials['METALIC.017']}
        position={[-1.282, 1.498, -0.58]}
        rotation={[-1.225, 0.016, 1.539]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials['METALIC.018']}
        position={[-1.358, 1.514, -0.609]}
        rotation={[-1.225, 0.016, 1.539]}
        scale={0.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials['METALIC.019']}
        position={[-1.357, 1.524, -0.637]}
        rotation={[-1.225, 0.016, 1.539]}
        scale={0.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials['METALIC.020']}
        position={[-1.279, 1.525, -0.655]}
        rotation={[-1.225, 0.016, 1.539]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials['METALIC.021']}
        position={[-1.185, 1.47, -0.528]}
        rotation={[-2.94, 1.366, -2.993]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials['METALIC.022']}
        position={[-1.251, 1.484, -0.554]}
        rotation={[0.365, 0.541, -0.035]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials['METALIC.023']}
        position={[-1.183, 1.488, -0.579]}
        rotation={[0.344, -0.08, -0.03]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={materials['METALIC.024']}
        position={[-1.183, 1.486, -0.58]}
        rotation={[0.344, -0.08, -0.03]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials['METALIC.025']}
        position={[-1.25, 1.503, -0.607]}
        rotation={[0.344, -0.08, -0.03]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials['METALIC.026']}
        position={[-1.249, 1.513, -0.634]}
        rotation={[-2.772, -0.661, -3.104]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle037.geometry}
        material={materials['METALIC.008']}
        position={[-1.171, 1.428, -0.729]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials['Material.036']}
        position={[-1.246, 1.352, -0.512]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials['METALIC.008']}
        position={[-1.393, 1.437, -0.734]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials['METALIC.008']}
        position={[-1.319, 1.365, -0.52]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials['METALIC.008']}
        position={[-1.024, 1.343, -0.508]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials['METALIC.008']}
        position={[-1.017, 1.422, -0.726]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials['METALIC.008']}
        position={[-0.715, 1.362, -0.59]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials['METALIC.008']}
        position={[-0.712, 1.391, -0.67]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials['METALIC.008']}
        position={[-0.601, 1.391, -0.658]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials['METALIC.008']}
        position={[-0.61, 1.358, -0.588]}
        rotation={[-2.034, -1.527, 0.762]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials['METALIC.008']}
        position={[0.785, 1.403, -0.707]}
        rotation={[-0.875, 0.544, -0.516]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials['METALIC.008']}
        position={[0.85, 1.393, -0.686]}
        rotation={[-0.864, 0.728, -0.496]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials['METALIC.008']}
        position={[0.915, 1.383, -0.664]}
        rotation={[1.591, 0.673, -2.582]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials['METALIC.008']}
        position={[0.979, 1.373, -0.642]}
        rotation={[1.351, 0.972, -2.445]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials['METALIC.008']}
        position={[1.045, 1.364, -0.622]}
        rotation={[0.07, 1.205, -1.308]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials['METALIC.008']}
        position={[1.104, 1.349, -0.59]}
        rotation={[1.535, 0.692, -2.623]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials['METALIC.008']}
        position={[-1.604, 1.343, -0.293]}
        rotation={[-1.349, -0.053, 2.163]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials['METALIC.008']}
        position={[-1.605, 1.343, -0.293]}
        rotation={[1.917, -0.03, -2.146]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials['METALIC.008']}
        position={[-1.293, 1.371, -0.249]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials['METALIC.008']}
        position={[-1.132, 1.379, -0.285]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials['METALIC.008']}
        position={[-1.121, 1.394, -0.328]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials['METALIC.008']}
        position={[-1.078, 1.403, -0.352]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials['METALIC.008']}
        position={[-0.999, 1.391, -0.328]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials['METALIC.008']}
        position={[-0.823, 1.372, -0.291]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials['METALIC.008']}
        position={[-0.944, 1.447, -0.491]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials['METALIC.008']}
        position={[-1.152, 1.454, -0.486]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials['METALIC.008']}
        position={[-1.088, 1.522, -0.687]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={materials['METALIC.008']}
        position={[-1.188, 1.448, -0.474]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials['METALIC.008']}
        position={[-1.174, 1.531, -0.704]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials['METALIC.027']}
        position={[-1.248, 1.523, -0.662]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials['METALIC.008']}
        position={[-0.964, 1.529, -0.716]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials['METALIC.008']}
        position={[-0.938, 1.515, -0.682]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials['METALIC.008']}
        position={[-0.953, 1.53, -0.713]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials['METALIC.008']}
        position={[-0.661, 1.511, -0.695]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials['METALIC.008']}
        position={[-0.826, 1.518, -0.691]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['METALIC.008']}
        position={[-0.831, 1.442, -0.482]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['METALIC.008']}
        position={[-0.811, 1.426, -0.438]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['METALIC.008']}
        position={[-0.666, 1.355, -0.255]}
        rotation={[1.108, 1.527, -0.762]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere016.geometry}
        material={materials['Material.010']}
        position={[-4.029, 1.572, -0.263]}
        rotation={[-1.219, 0, 1.175]}
        scale={-0.024}
      />
      <group
        position={[-4.485, 1.667, 0.28]}
        rotation={[0.348, -0.387, -0.002]}
        scale={[0.237, 0.2, 0.699]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_1.geometry}
          material={materials['Marshall pic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_2.geometry}
          material={materials['Black leather']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_3.geometry}
          material={materials['Corner metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_4.geometry}
          material={materials['Material.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_5.geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_6.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_7.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_8.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_9.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube003_10.geometry}
          material={materials['Material.010']}
        />
      </group>
      <group
        position={[-4.482, 0.775, -0.05]}
        rotation={[0.352, -0.396, 0]}
        scale={[0.256, 0.75, 0.706]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_1.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_2.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_3.geometry}
          material={materials['Corner metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_4.geometry}
          material={materials['Material.039']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001_5.geometry}
          material={materials['Back ']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Painting.geometry}
        material={materials['Material.021']}
        position={[-1.103, 4.346, -3.006]}
        rotation={[1.923, 0, -0.751]}
        scale={[-4.3, -2.384, -2.216]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.007']}
        position={[3.297, 0.988, 4.218]}
        rotation={[1.923, 0, -0.794]}
        scale={[0.701, 0.414, 0.42]}
      />
      <group position={[4.357, 0.282, -1.065]} rotation={[-2.79, 0.712, -Math.PI]} scale={3.642}>
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
      <group position={[2.421, 0.081, 4.647]} rotation={[0.352, 0.751, 0]} scale={1.326}>
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
      <group position={[6.283, 2.889, 1.586]} rotation={[-2.79, -0.509, Math.PI]}>
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
      <group position={[-2.599, -1.226, 3.211]} rotation={[0.352, 0.751, 0]} scale={3.78}>
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
        geometry={nodes.Painting001.geometry}
        material={materials['Material.040']}
        position={[-1.086, 4.346, -3.006]}
        rotation={[1.923, 0, -0.751]}
        scale={[-3.832, -2.125, -1.975]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloth.geometry}
        material={materials.Material}
        position={[-0.285, 1.796, -1.759]}
        rotation={[0.352, 0.751, 0]}
        scale={[2.561, 2.008, 2.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Metalic}
        position={[1.894, 1.938, -3.934]}
        rotation={[0.352, 0.751, 0]}
        scale={[1, 0.905, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.012']}
        position={[-1.819, 0.743, -0.681]}
        rotation={[0.352, 0.751, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.Metalic}
        position={[1.894, 1.938, -3.934]}
        rotation={[0.352, 0.751, 0]}
        scale={[1, 0.905, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_left.geometry}
        material={materials['Material.002']}
        position={[0.497, 2.822, -3.655]}
        rotation={[0.352, 1.051, 0]}
        scale={[0.433, 0.826, 0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_right.geometry}
        material={materials['Material.002']}
        position={[2.143, 2.632, -2.822]}
        rotation={[0.352, 0.751, 0.685]}
        scale={[0.415, 0.845, 0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.003']}
        position={[6.202, 2.537, 2.87]}
        rotation={[0.352, 0.751, 0]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.003']}
        position={[5.22, 2.021, 1.56]}
        rotation={[0.352, 0.751, 0]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Material.003']}
        position={[6.171, 0.848, 2.214]}
        rotation={[0.352, 0.751, 0]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.014']}
        position={[5.236, 2.569, 0.423]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.013']}
        position={[5.057, 2.635, 0.243]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.017']}
        position={[5.296, 2.547, 0.483]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Material.016']}
        position={[5.176, 2.591, 0.363]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.015']}
        position={[5.117, 2.613, 0.303]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.013']}
        position={[5.569, 3.408, 0.965]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['Material.017']}
        position={[5.798, 3.335, 1.22]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['Material.020']}
        position={[5.723, 3.334, 1.166]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.020']}
        position={[5.678, 3.351, 1.09]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.015']}
        position={[5.618, 3.418, 1.046]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Material.013']}
        position={[5.874, 3.295, 1.271]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.017']}
        position={[6.102, 3.222, 1.527]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.020']}
        position={[6.028, 3.221, 1.472]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Material.020']}
        position={[5.983, 3.239, 1.396]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Material.015']}
        position={[5.923, 3.306, 1.353]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials['Material.013']}
        position={[5.763, 1.629, 0.533]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials['Material.017']}
        position={[5.992, 1.556, 0.789]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.020']}
        position={[5.917, 1.555, 0.734]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials['Material.020']}
        position={[5.872, 1.573, 0.658]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials['Material.015']}
        position={[5.812, 1.64, 0.615]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials['Material.013']}
        position={[6.068, 1.516, 0.839]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials['Material.017']}
        position={[6.296, 1.444, 1.095]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials['Material.020']}
        position={[6.222, 1.443, 1.041]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials['Material.020']}
        position={[6.177, 1.46, 0.965]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials['Material.015']}
        position={[6.117, 1.527, 0.921]}
        rotation={[0.352, 0.751, 0]}
        scale={[0.146, 0.103, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.011']}
        position={[5.274, 2.536, 0.344]}
        rotation={[0.352, 0.751, 0]}
        scale={0.109}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.018']}
        position={[4.954, 2.666, 0.021]}
        rotation={[0.246, 0.51, -0.443]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.034']}
        position={[5.592, 1.613, 0.337]}
        rotation={[0.352, 0.751, 0]}
        scale={0.187}
      />
      <group position={[3.575, 0.616, -1.815]} rotation={[0.352, -0.802, 0]} scale={2.161}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nightstand.geometry}
          material={materials.Nightstand}
          position={[0, 0.498, 0]}
        />
      </group>
      <group position={[3.606, 0.975, -1.34]} rotation={[0.352, 0.751, 0]} scale={1.312}>
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
        position={[2.886, 0.524, 3.57]}
        rotation={[0.352, 0.751, 0]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials['Material.032']}
        position={[3.314, 0.335, 4.089]}
        rotation={[0.352, 0.751, 0]}
        scale={0.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.Pot_03}
        position={[2.995, -0.178, 3.577]}
        rotation={[0.352, 0.751, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        position={[-3.31, 2.263, -3.725]}
        rotation={[-2.79, 0.82, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.002']}
        position={[-2.547, -0.115, 2.753]}
        rotation={[0.352, 0.751, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[3.172, 1.699, -2.19]}
        rotation={[-2.79, -0.751, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[0.339, -0.128, -0.12]}
        rotation={[0.352, 0.751, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.012']}
        position={[0.193, -0.365, 0.765]}
        rotation={[0.352, 0.751, 0]}
        scale={[3.3, 1.161, 2.524]}
      />
    </group>
  )
}

useGLTF.preload('/room1.glb')
