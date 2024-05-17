
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
  nodes: {
    draaidingcenter1: THREE.Mesh
    Circle022: THREE.Mesh
    Circle023: THREE.Mesh
    draaidingcenter1001: THREE.Mesh
    Circle024: THREE.Mesh
    draaidingcenter1002: THREE.Mesh
    Circle025: THREE.Mesh
    draaidingcenter1003: THREE.Mesh
    Circle026: THREE.Mesh
    draaidingcenter1004: THREE.Mesh
    Circle027: THREE.Mesh
    draaidingcenter1005: THREE.Mesh
    underneath1: THREE.Mesh
    Stringend: THREE.Mesh
    Circle028: THREE.Mesh
    Circle029: THREE.Mesh
    Circle031: THREE.Mesh
    Circle030: THREE.Mesh
    Plane: THREE.Mesh
    Circle032: THREE.Mesh
    Circle033: THREE.Mesh
    Circle035: THREE.Mesh
    Circle034: THREE.Mesh
    Circle036: THREE.Mesh
    Circle037: THREE.Mesh
    switch_plastic: THREE.Mesh
    Circle008: THREE.Mesh
    Circle038: THREE.Mesh
    Circle039: THREE.Mesh
    Circle040: THREE.Mesh
    Circle041: THREE.Mesh
    Circle042: THREE.Mesh
    Circle043: THREE.Mesh
    NurbsPath: THREE.Mesh
    NurbsPath_1: THREE.Mesh
    Plane001_1: THREE.Mesh
    Plane001_2: THREE.Mesh
    Plane001_3: THREE.Mesh
    NurbsPath002_1: THREE.Mesh
    NurbsPath002_2: THREE.Mesh
    NurbsPath005: THREE.Mesh
    NurbsPath005_1: THREE.Mesh
    Cube: THREE.Mesh
    switch2: THREE.Mesh
    switch1: THREE.Mesh
    screw2: THREE.Mesh
    screw: THREE.Mesh
    pickup1: THREE.Mesh
    knobs: THREE.Mesh
    knobs001: THREE.Mesh
    Cylinder: THREE.Mesh
    knob: THREE.Mesh
    knob001: THREE.Mesh
    knob002: THREE.Mesh
    knob003: THREE.Mesh
    knob004: THREE.Mesh
    knob005: THREE.Mesh
    screwx: THREE.Mesh
    handle: THREE.Mesh
    screwy: THREE.Mesh
    handle2: THREE.Mesh
    screw5: THREE.Mesh
    plate: THREE.Mesh
    magnetos0: THREE.Mesh
    pickup2: THREE.Mesh
    magnetos1: THREE.Mesh
    magnetos2: THREE.Mesh
    pickup3: THREE.Mesh
    magnetos3: THREE.Mesh
    pickup4: THREE.Mesh
    Circle020: THREE.Mesh
    Circle021: THREE.Mesh
    Circle: THREE.Mesh
    Circle001: THREE.Mesh
    Circle002: THREE.Mesh
    Circle003: THREE.Mesh
    Circle004: THREE.Mesh
    Circle005: THREE.Mesh
    Circle006: THREE.Mesh
    Circle007: THREE.Mesh
    Circle009: THREE.Mesh
    Circle010: THREE.Mesh
    Circle011: THREE.Mesh
    Circle012: THREE.Mesh
    Circle013: THREE.Mesh
    Circle014: THREE.Mesh
    Circle015: THREE.Mesh
    Circle016: THREE.Mesh
    Circle017: THREE.Mesh
    Circle018: THREE.Mesh
    Circle019: THREE.Mesh
    Circle044: THREE.Mesh
    Cube002: THREE.Mesh
    Circle045: THREE.Mesh
    Cube003: THREE.Mesh
    Circle046: THREE.Mesh
    Cube004: THREE.Mesh
    Circle047: THREE.Mesh
    Cube005: THREE.Mesh
    Circle048: THREE.Mesh
    Cube006: THREE.Mesh
    Circle049: THREE.Mesh
    Cube007: THREE.Mesh
    Circle050: THREE.Mesh
    Circle051: THREE.Mesh
    Circle052: THREE.Mesh
    Circle053: THREE.Mesh
    Circle054: THREE.Mesh
    Circle055: THREE.Mesh
    Circle056: THREE.Mesh
    Circle057: THREE.Mesh
    Circle058: THREE.Mesh
    Circle059: THREE.Mesh
    Stringe: THREE.Mesh
    StringA: THREE.Mesh
    StringD: THREE.Mesh
    StringG: THREE.Mesh
    StringhE: THREE.Mesh
    StringB: THREE.Mesh
    Plane003: THREE.Mesh
    Plane004: THREE.Mesh
  }
  materials: {
    METALIC: THREE.MeshStandardMaterial
    ['Black plastic']: THREE.MeshPhysicalMaterial
    ['white plastic']: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['METALIC.001']: THREE.MeshStandardMaterial
    ['METALIC.002']: THREE.MeshStandardMaterial
    ['METALIC.003']: THREE.MeshStandardMaterial
    ['METALIC.004']: THREE.MeshStandardMaterial
    ['METALIC.005']: THREE.MeshStandardMaterial
    ['METALIC.006']: THREE.MeshStandardMaterial
    ['METALIC.007']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshPhysicalMaterial
    WOOD2: THREE.MeshPhysicalMaterial
    ['METALIC.009']: THREE.MeshStandardMaterial
    ['METALIC.010']: THREE.MeshStandardMaterial
    ['METALIC.011']: THREE.MeshStandardMaterial
    ['METALIC.012']: THREE.MeshStandardMaterial
    ['METALIC.013']: THREE.MeshStandardMaterial
    ['METALIC.014']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
  }
}

export function Guitar(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/guitar.glb') as GLTFResult
  const { viewport } = useThree();
  return (
    <group scale={viewport.width / 3} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1.geometry}
        material={materials.METALIC}
        position={[-0.046, 1.104, 0.098]}
        rotation={[1.562, 0.248, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials.METALIC}
        position={[-0.024, 1.116, 0.094]}
        rotation={[-0.778, -0.259, -1.339]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.METALIC}
        position={[-0.012, 1.095, 0.094]}
        rotation={[-1.712, -0.305, -1.596]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1001.geometry}
        material={materials.METALIC}
        position={[-0.04, 1.08, 0.098]}
        rotation={[1.562, 0.252, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials.METALIC}
        position={[-0.006, 1.071, 0.094]}
        rotation={[-1.094, -0.266, -1.381]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1002.geometry}
        material={materials.METALIC}
        position={[-0.033, 1.056, 0.098]}
        rotation={[1.562, 0.264, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials.METALIC}
        position={[0.001, 1.048, 0.094]}
        rotation={[-0.747, -0.222, -1.256]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1003.geometry}
        material={materials.METALIC}
        position={[-0.025, 1.032, 0.099]}
        rotation={[1.562, 0.295, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials.METALIC}
        position={[0.009, 1.025, 0.094]}
        rotation={[-2.411, -0.234, -1.785]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1004.geometry}
        material={materials.METALIC}
        position={[-0.018, 1.009, 0.099]}
        rotation={[1.562, 0.295, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials.METALIC}
        position={[0.016, 1.002, 0.094]}
        rotation={[-2.596, -0.273, -1.858]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1005.geometry}
        material={materials.METALIC}
        position={[-0.011, 0.986, 0.099]}
        rotation={[1.562, 0.295, 3.141]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.underneath1.geometry}
        material={materials['Black plastic']}
        position={[-0.037, 0.494, 0.112]}
        rotation={[-1.58, 0.016, 0]}
        scale={[0.019, 0.023, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringend.geometry}
        material={materials.METALIC}
        position={[-0.049, 0.264, 0.079]}
        rotation={[-1.58, 0.016, 0]}
        scale={[0.042, 0.018, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials.METALIC}
        position={[-0.052, 0.512, 0.114]}
        rotation={[1.562, -0.016, 0]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials.METALIC}
        position={[-0.022, 0.512, 0.114]}
        rotation={[1.562, -0.016, 0]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials.METALIC}
        position={[-0.053, 0.475, 0.115]}
        rotation={[1.562, -0.016, 0]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials.METALIC}
        position={[-0.023, 0.475, 0.115]}
        rotation={[1.562, -0.016, 0]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['white plastic']}
        position={[-0.047, 0.3, 0.113]}
        rotation={[-1.58, 0.016, 0]}
        scale={[0.048, 0.061, 0.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials.METALIC}
        position={[-0.005, 0.366, 0.115]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials.METALIC}
        position={[-0.087, 0.368, 0.115]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials.METALIC}
        position={[-0.007, 0.233, 0.116]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials.METALIC}
        position={[-0.089, 0.235, 0.116]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials['Material.004']}
        position={[-0.089, 0.289, 0.116]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle037.geometry}
        material={materials.METALIC}
        position={[-0.006, 0.312, 0.116]}
        rotation={[1.562, -0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch_plastic.geometry}
        material={materials['white plastic']}
        position={[-0.144, 0.33, 0.079]}
        rotation={[-1.58, -1.071, 0]}
        scale={[0.069, 0.136, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials['METALIC.001']}
        position={[-0.018, 0.284, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials['METALIC.002']}
        position={[-0.029, 0.284, 0.077]}
        rotation={[1.562, 0.862, 3.141]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials['METALIC.003']}
        position={[-0.039, 0.284, 0.077]}
        rotation={[1.558, -1.538, 3.137]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={materials['METALIC.004']}
        position={[-0.049, 0.284, 0.078]}
        rotation={[1.558, -1.538, 3.137]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials['METALIC.005']}
        position={[-0.049, 0.284, 0.077]}
        rotation={[1.558, -1.538, 3.137]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials['METALIC.006']}
        position={[-0.059, 0.284, 0.077]}
        rotation={[-1.58, -0.982, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials['METALIC.007']}
        position={[-0.07, 0.285, 0.077]}
        rotation={[-1.58, 0.25, 0]}
        scale={0.032}
      />
      <group position={[-0.044, 0.327, 0.097]} rotation={[1.562, -0.016, 3.141]} scale={0.041}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_1.geometry}
          material={materials['Black plastic']}
        />
      </group>
      <group position={[-0.038, 0.68, 0.072]} rotation={[1.562, -0.016, 0]} scale={[0.1, 1, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials['Black plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.METALIC}
        />
      </group>
      <group position={[-0.019, 1.048, 0.089]} rotation={[-1.58, 1.28, 0]} scale={0.021}>
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
          material={materials['Black plastic']}
        />
      </group>
      <group position={[-0.079, 0.364, 0.077]} rotation={[-1.58, -0.352, 0]} scale={0.017}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005.geometry}
          material={materials['white plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath005_1.geometry}
          material={materials['Black plastic']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.142, 0.331, 0.076]}
        rotation={[-1.58, 0.495, 0]}
        scale={[0.001, 0.047, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch2.geometry}
        material={materials.METALIC}
        position={[-0.145, 0.326, 0.077]}
        rotation={[-2.332, 0.371, 0.318]}
        scale={[0.001, 0.005, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch1.geometry}
        material={materials['white plastic']}
        position={[-0.147, 0.322, 0.072]}
        rotation={[-2.188, -0.082, 0.296]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw2.geometry}
        material={materials['Black plastic']}
        position={[-0.182, 0.177, 0.098]}
        rotation={[3.133, 0, 0.761]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw.geometry}
        material={materials['Black plastic']}
        position={[-0.152, 0.155, 0.098]}
        rotation={[3.133, 0, 0.474]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup1.geometry}
        material={materials['white plastic']}
        position={[-0.041, 0.434, 0.08]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials['white plastic']}
        position={[-0.115, 0.305, 0.069]}
        rotation={[1.562, -0.016, 0]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs001.geometry}
        material={materials['white plastic']}
        position={[-0.166, 0.276, 0.069]}
        rotation={[1.562, -0.016, 0]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-0.012, 0.986, 0.072]}
        rotation={[-1.58, 0.016, 0]}
        scale={-0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.METALIC}
        position={[-0.012, 0.986, 0.07]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob001.geometry}
        material={materials.METALIC}
        position={[-0.019, 1.01, 0.07]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob002.geometry}
        material={materials.METALIC}
        position={[-0.026, 1.033, 0.07]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob003.geometry}
        material={materials.METALIC}
        position={[-0.033, 1.056, 0.07]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob004.geometry}
        material={materials.METALIC}
        position={[-0.04, 1.079, 0.069]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob005.geometry}
        material={materials.METALIC}
        position={[-0.047, 1.103, 0.069]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwx.geometry}
        material={materials['Black plastic']}
        position={[-0.034, 0.953, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials.METALIC}
        position={[-0.047, 0.141, 0.097]}
        rotation={[-0.009, 0, -0.016]}
        scale={0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwy.geometry}
        material={materials.METALIC}
        position={[-0.047, 0.138, 0.097]}
        rotation={[3.133, 0, 0.016]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle2.geometry}
        material={materials.METALIC}
        position={[0.066, 0.6, 0.095]}
        rotation={[-0.009, 0, -2.804]}
        scale={0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw5.geometry}
        material={materials.METALIC}
        position={[0.065, 0.603, 0.095]}
        rotation={[3.133, 0, 2.804]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plate.geometry}
        material={materials['Black plastic']}
        position={[-0.044, 0.32, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={[0.036, 0.036, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos0.geometry}
        material={materials.METALIC}
        position={[-0.068, 0.434, 0.074]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup2.geometry}
        material={materials['white plastic']}
        position={[-0.043, 0.38, 0.081]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos1.geometry}
        material={materials.METALIC}
        position={[-0.027, 0.379, 0.075]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos2.geometry}
        material={materials.METALIC}
        position={[-0.028, 0.329, 0.076]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup3.geometry}
        material={materials['white plastic']}
        position={[-0.043, 0.329, 0.081]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos3.geometry}
        material={materials.METALIC}
        position={[-0.018, 0.311, 0.076]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup4.geometry}
        material={materials['white plastic']}
        position={[-0.043, 0.311, 0.081]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials.METALIC}
        position={[-0.168, 0.165, 0.098]}
        rotation={[-0.009, 0, -0.623]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials.METALIC}
        position={[-0.168, 0.166, 0.098]}
        rotation={[3.043, 0.121, 0.647]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.METALIC}
        position={[-0.164, 0.496, 0.076]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.METALIC}
        position={[-0.097, 0.442, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.METALIC}
        position={[-0.081, 0.434, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.METALIC}
        position={[-0.002, 0.432, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.METALIC}
        position={[0.006, 0.486, 0.076]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.METALIC}
        position={[0.004, 0.387, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.METALIC}
        position={[-0.003, 0.378, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.METALIC}
        position={[0.011, 0.367, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials.METALIC}
        position={[0.003, 0.286, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={materials.METALIC}
        position={[-0.093, 0.284, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials.METALIC}
        position={[-0.003, 0.319, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials.METALIC}
        position={[-0.083, 0.321, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials.METALIC}
        position={[-0.082, 0.379, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials.METALIC}
        position={[-0.153, 0.44, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials.METALIC}
        position={[-0.141, 0.378, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials.METALIC}
        position={[-0.133, 0.349, 0.077]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials.METALIC}
        position={[-0.152, 0.314, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials.METALIC}
        position={[-0.17, 0.31, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials.METALIC}
        position={[-0.187, 0.248, 0.078]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials['METALIC.009']}
        position={[-0.018, 0.245, 0.075]}
        rotation={[3.119, 0, 0.016]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.METALIC}
        position={[-0.018, 0.263, 0.074]}
        rotation={[-1.606, -0.006, 0.004]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials['METALIC.010']}
        position={[-0.029, 0.246, 0.075]}
        rotation={[3.119, 0, 0.016]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.METALIC}
        position={[-0.029, 0.264, 0.074]}
        rotation={[-1.606, -0.006, 0.004]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials['METALIC.011']}
        position={[-0.039, 0.246, 0.075]}
        rotation={[3.119, 0, 0.016]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.METALIC}
        position={[-0.039, 0.263, 0.074]}
        rotation={[-1.606, 0.01, 0.004]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials['METALIC.012']}
        position={[-0.049, 0.246, 0.075]}
        rotation={[3.119, 0, 0.016]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.METALIC}
        position={[-0.049, 0.264, 0.074]}
        rotation={[-1.606, 0.01, 0.004]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials['METALIC.013']}
        position={[-0.059, 0.246, 0.075]}
        rotation={[3.119, 0, 0.021]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.METALIC}
        position={[-0.06, 0.264, 0.074]}
        rotation={[-1.606, 0.028, 0.005]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials['METALIC.014']}
        position={[-0.07, 0.246, 0.075]}
        rotation={[3.119, 0, 0.021]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.METALIC}
        position={[-0.07, 0.264, 0.074]}
        rotation={[-1.606, 0.015, 0.005]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={nodes.Circle050.material}
        position={[-0.041, 0.479, 0.073]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={nodes.Circle051.material}
        position={[-0.04, 0.504, 0.073]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={nodes.Circle052.material}
        position={[-0.04, 0.532, 0.072]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={nodes.Circle053.material}
        position={[-0.039, 0.562, 0.072]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle054.geometry}
        material={nodes.Circle054.material}
        position={[-0.053, 0.616, 0.072]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={nodes.Circle055.material}
        position={[-0.025, 0.616, 0.072]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle056.geometry}
        material={nodes.Circle056.material}
        position={[-0.038, 0.68, 0.071]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle057.geometry}
        material={nodes.Circle057.material}
        position={[-0.037, 0.73, 0.071]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle058.geometry}
        material={nodes.Circle058.material}
        position={[-0.036, 0.785, 0.07]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle059.geometry}
        material={nodes.Circle059.material}
        position={[-0.035, 0.847, 0.069]}
        rotation={[-1.58, 0.016, 0]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringe.geometry}
        material={materials['Material.009']}
        position={[-0.018, 0.4, 0.071]}
        rotation={[Math.PI / 2, 1.555, 3.133]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringA.geometry}
        material={materials['Material.010']}
        position={[-0.028, 0.4, 0.071]}
        rotation={[Math.PI / 2, 1.555, 3.133]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringD.geometry}
        material={materials['Material.011']}
        position={[-0.038, 0.4, 0.071]}
        rotation={[Math.PI / 2, 1.555, 3.133]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringG.geometry}
        material={materials['Material.012']}
        position={[-0.048, 0.4, 0.071]}
        rotation={[Math.PI / 2, 1.555, 3.133]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringhE.geometry}
        material={materials['Material.013']}
        position={[-0.067, 0.4, 0.071]}
        rotation={[Math.PI / 2, 1.555, 3.133]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringB.geometry}
        material={materials['Material.007']}
        position={[-0.042, 1.078, 0.071]}
        rotation={[-1.58, 0.016, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.005']}
        position={[-0.07, 1.116, 0.075]}
        rotation={[0.949, -1.562, 2.516]}
        scale={[0.016, 0.022, 0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.006']}
        position={[-0.065, 1.011, 0.077]}
        rotation={[-1.579, -1.447, 0.001]}
        scale={[0.025, 0.014, 0.009]}
      />
    </group>
  )
}

useGLTF.preload('/guitar.glb')
