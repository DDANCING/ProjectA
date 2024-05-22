"use client"

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
  }
}

export function Guitar(props: JSX.IntrinsicElements['group']) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/guitar1.glb') as GLTFResult
  return (
    <group scale={viewport.width / 1.6} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1.geometry}
        material={materials.METALIC}
        position={[-0.0032773, 0.62175614, 0.12898645]}
        rotation={[1.5731534, -0.24765059, -0.02717654]}
        scale={[0.98233807, 0.98233813, 0.98233813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials.METALIC}
        position={[-0.02550614, 0.63448232, 0.13367786]}
        rotation={[-2.36862689, 0.24010137, 1.82187506]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.METALIC}
        position={[-0.03718847, 0.61288482, 0.13421804]}
        rotation={[-1.43766372, 0.30821978, 1.57256473]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1001.geometry}
        material={materials.METALIC}
        position={[-0.00973467, 0.59818965, 0.12894402]}
        rotation={[1.57303541, -0.25185816, -0.02720535]}
        scale={0.98233813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials.METALIC}
        position={[-0.04368402, 0.58919448, 0.13417555]}
        rotation={[-2.05377252, 0.25351525, 1.78491768]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1002.geometry}
        material={materials.METALIC}
        position={[-0.01641172, 0.57416433, 0.12890331]}
        rotation={[1.57269189, -0.26403142, -0.02729326]}
        scale={0.98233813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials.METALIC}
        position={[-0.05104943, 0.56629449, 0.13416308]}
        rotation={[-2.39848264, 0.20265867, 1.90409313]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1003.geometry}
        material={materials.METALIC}
        position={[-0.02426523, 0.5504089, 0.12889601]}
        rotation={[1.57179402, -0.29550885, -0.0275412]}
        scale={0.98233813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials.METALIC}
        position={[-0.05838575, 0.54322439, 0.13408481]}
        rotation={[-0.73544757, 0.25374885, 1.374963]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1004.geometry}
        material={materials.METALIC}
        position={[-0.03172969, 0.52711445, 0.12888262]}
        rotation={[1.57179402, -0.29550885, -0.0275412]}
        scale={0.98233813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials.METALIC}
        position={[-0.06553653, 0.51981026, 0.13412562]}
        rotation={[-0.54916969, 0.29506746, 1.29748377]}
        scale={0.02150495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.draaidingcenter1005.geometry}
        material={materials.METALIC}
        position={[-0.03871549, 0.50403386, 0.12885851]}
        rotation={[1.57179402, -0.29550885, -0.0275412]}
        scale={0.98233813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.underneath1.geometry}
        material={materials['Black plastic']}
        position={[-0.01267538, 0.0117791, 0.1154609]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.01895884, 0.02275681, 0.02275681]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringend.geometry}
        material={materials.METALIC}
        position={[-0.00025303, -0.21806985, 0.14747639]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.0418192, 0.01770633, 0.01770632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials.METALIC}
        position={[0.0018674, 0.03046441, 0.11256323]}
        rotation={[1.58022709, 0.01554154, 3.11524274]}
        scale={0.03548129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials.METALIC}
        position={[-0.02786428, 0.02999496, 0.11334254]}
        rotation={[1.58022709, 0.01554154, 3.11524274]}
        scale={0.03548129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials.METALIC}
        position={[0.00244449, -0.00666267, 0.1122131]}
        rotation={[1.58022709, 0.01554154, 3.11524274]}
        scale={0.03548129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials.METALIC}
        position={[-0.0272872, -0.00713217, 0.11299241]}
        rotation={[1.58022709, 0.01554154, 3.11524274]}
        scale={0.03548129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['white plastic']}
        position={[-0.00318771, -0.18150473, 0.11405456]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.04771795, 0.06114998, 0.07123546]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials.METALIC}
        position={[-0.04471043, -0.11562136, 0.11282593]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials.METALIC}
        position={[0.03712684, -0.1143291, 0.11068086]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials.METALIC}
        position={[-0.04264482, -0.24851386, 0.11157276]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials.METALIC}
        position={[0.03919245, -0.2472216, 0.10942768]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials['Material.004']}
        position={[0.0383433, -0.19259095, 0.10994286]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle037.geometry}
        material={materials.METALIC}
        position={[-0.04386534, -0.1699906, 0.11231324]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch_plastic.geometry}
        material={materials['white plastic']}
        position={[0.09452423, -0.1523217, 0.14536957]}
        rotation={[-1.6100353, 1.07080854, -3.08661494]}
        scale={[0.06914411, 0.13561457, 0.02915452]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials['METALIC.001']}
        position={[-0.0307096, -0.19806272, 0.15041013]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials['METALIC.002']}
        position={[-0.02022986, -0.19789726, 0.15013544]}
        rotation={[1.54908483, -0.86187052, -0.04047706]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials['METALIC.003']}
        position={[-0.00998298, -0.19773543, 0.14986685]}
        rotation={[2.24729907, 1.52825028, -0.66792293]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={materials['METALIC.004']}
        position={[-0.00010288, -0.19757318, 0.14894299]}
        rotation={[2.24729907, 1.52825028, -0.66792293]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials['METALIC.005']}
        position={[-0.00008536, -0.19757915, 0.14960742]}
        rotation={[2.24729907, 1.52825028, -0.66792293]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials['METALIC.006']}
        position={[0.0100155, -0.19741964, 0.14934267]}
        rotation={[-1.60124248, 0.9819285, -3.09414366]}
        scale={0.03183683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials['METALIC.007']}
        position={[0.02085262, -0.19724852, 0.14905861]}
        rotation={[-1.55505378, -0.24975498, -3.11440138]}
        scale={0.03183683}
      />
      <group
        position={[-0.00516561, -0.15491527, 0.13041271]}
        rotation={[1.58022693, 0.01554219, -0.02634945]}
        scale={0.04077931}>
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
      <group
        position={[-0.01141535, 0.19834352, 0.15481557]}
        rotation={[1.58022591, 0.01554157, 3.11524275]}
        scale={[0.10000002, 1, 0.30000007]}>
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
      <group
        position={[-0.03037842, 0.565934, 0.13821431]}
        rotation={[-1.47392336, -1.27902355, -3.04988382]}
        scale={0.02071985}>
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
      <group
        position={[0.03029234, -0.117486, 0.14938667]}
        rotation={[-1.57145545, 0.35199551, -3.11352459]}
        scale={0.0169985}>
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
        position={[0.09328221, -0.15034667, 0.14815722]}
        rotation={[-1.54758096, -0.49408472, -3.11166591]}
        scale={[0.00122916, 0.04724099, 0.01221066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch2.geometry}
        material={materials.METALIC}
        position={[0.09610514, -0.15580353, 0.14728749]}
        rotation={[-0.80242591, -0.35274439, -2.8037539]}
        scale={[0.00083284, 0.00537472, 0.00155883]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.switch1.geometry}
        material={materials['white plastic']}
        position={[0.09833622, -0.16005203, 0.15271583]}
        rotation={[-0.95511132, 0.09717348, -2.82375292]}
        scale={0.00562574}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw2.geometry}
        material={materials['Black plastic']}
        position={[0.1327599, -0.30472419, 0.12531964]}
        rotation={[0.00902047, 0.02634707, -2.38097832]}
        scale={0.01844977}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw.geometry}
        material={materials['Black plastic']}
        position={[0.10217737, -0.32633841, 0.12582584]}
        rotation={[0.00902068, 0.02634705, -2.66825746]}
        scale={0.01844977}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup1.geometry}
        material={materials['white plastic']}
        position={[-0.00827648, -0.04770201, 0.1469277]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.01141068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials['white plastic']}
        position={[0.06610832, -0.17728707, 0.15648256]}
        rotation={[1.58022574, 0.01554158, 3.11524276]}
        scale={0.00819822}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knobs001.geometry}
        material={materials['white plastic']}
        position={[0.11690362, -0.20541561, 0.15489019]}
        rotation={[1.58022574, 0.01554158, 3.11524276]}
        scale={0.00819822}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-0.03703556, 0.50433254, 0.15609606]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={-0.00284717}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.METALIC}
        position={[-0.03701022, 0.50426191, 0.1576155]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob001.geometry}
        material={materials.METALIC}
        position={[-0.02995327, 0.5277651, 0.15764154]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob002.geometry}
        material={materials.METALIC}
        position={[-0.02290242, 0.55067378, 0.15766238]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob003.geometry}
        material={materials.METALIC}
        position={[-0.01596902, 0.57380897, 0.15768832]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob004.geometry}
        material={materials.METALIC}
        position={[-0.00881664, 0.59751731, 0.15771371]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob005.geometry}
        material={materials.METALIC}
        position={[-0.00179352, 0.620745, 0.15773812]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.00285984, 0.00316021, 0.00285984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwx.geometry}
        material={materials['Black plastic']}
        position={[-0.01527913, 0.47071099, 0.14950657]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.01634423}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials.METALIC}
        position={[-0.00312423, -0.34112597, 0.12975976]}
        rotation={[-3.13257258, -0.02634672, 3.12604569]}
        scale={0.00446235}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screwy.geometry}
        material={materials.METALIC}
        position={[-0.002879, -0.34413788, 0.12970826]}
        rotation={[0.00901963, 0.02634671, -3.12604568]}
        scale={0.03877586}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle2.geometry}
        material={materials.METALIC}
        position={[-0.11533037, 0.1182881, 0.13533798]}
        rotation={[-3.13257193, -0.02634686, 0.33778615]}
        scale={0.0042039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screw5.geometry}
        material={materials.METALIC}
        position={[-0.11456639, 0.12103087, 0.13532573]}
        rotation={[0.00902125, 0.02634667, -0.33778614]}
        scale={0.03653}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plate.geometry}
        material={materials['Black plastic']}
        position={[-0.00553446, -0.16191626, 0.14986876]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={[0.03620698, 0.03620698, 0.02045767]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos0.geometry}
        material={materials.METALIC}
        position={[0.01851277, -0.04777187, 0.15214942]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.00291313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup2.geometry}
        material={materials['white plastic']}
        position={[-0.00668225, -0.1023038, 0.14639315]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.01141068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos1.geometry}
        material={materials.METALIC}
        position={[-0.02174356, -0.10296863, 0.15271243]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.00291313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos2.geometry}
        material={materials.METALIC}
        position={[-0.02082564, -0.15304232, 0.15124702]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.0028498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup3.geometry}
        material={materials['white plastic']}
        position={[-0.00606753, -0.15240026, 0.14598523]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.01116261}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magnetos3.geometry}
        material={materials.METALIC}
        position={[-0.03108096, -0.17117971, 0.1513757]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.0028498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup4.geometry}
        material={materials['white plastic']}
        position={[-0.0057882, -0.17037106, 0.14581574]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.01116261}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials.METALIC}
        position={[0.11878239, -0.31657749, 0.12611389]}
        rotation={[-3.13257255, -0.02634665, 2.51912982]}
        scale={0.00506231}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials.METALIC}
        position={[0.11859208, -0.31617084, 0.12610459]}
        rotation={[0.09828809, -0.09476047, -2.49734229]}
        scale={0.00461305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.METALIC}
        position={[0.11473273, 0.01456556, 0.1478302]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.METALIC}
        position={[0.04796114, -0.03999925, 0.1490977]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.METALIC}
        position={[0.03174898, -0.04788116, 0.14945385]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.METALIC}
        position={[-0.04676903, -0.04963216, 0.15150732]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.METALIC}
        position={[-0.05524152, 0.00374275, 0.15221205]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.METALIC}
        position={[-0.05312787, -0.094993, 0.15126571]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.METALIC}
        position={[-0.04575589, -0.10390052, 0.15099108]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.METALIC}
        position={[-0.05962292, -0.11463693, 0.15125969]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials.METALIC}
        position={[-0.05180841, -0.19620514, 0.15031797]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle010.geometry}
        material={materials.METALIC}
        position={[0.04382939, -0.19743949, 0.14753485]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials.METALIC}
        position={[-0.04581891, -0.16252458, 0.15046394]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials.METALIC}
        position={[0.03428929, -0.16101247, 0.14836641]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials.METALIC}
        position={[0.03311517, -0.10268486, 0.14892349]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials.METALIC}
        position={[0.10341224, -0.04139763, 0.14732024]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials.METALIC}
        position={[0.09155378, -0.1042434, 0.14708725]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials.METALIC}
        position={[0.08357324, -0.13249856, 0.14732479]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials.METALIC}
        position={[0.10299997, -0.16825953, 0.14649026]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials.METALIC}
        position={[0.1209316, -0.17167556, 0.14598687]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials.METALIC}
        position={[0.13818029, -0.23368642, 0.14497295]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
        scale={0.02921374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials['METALIC.009']}
        position={[-0.03087613, -0.2364718, 0.1525436]}
        rotation={[0.02308976, 0.02656279, -3.12641786]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.METALIC}
        position={[-0.03070479, -0.21850878, 0.15362832]}
        rotation={[-1.53552256, 0.00705918, -3.1113614]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials['METALIC.010']}
        position={[-0.02049138, -0.23630783, 0.1522714]}
        rotation={[0.02308976, 0.02656279, -3.12641786]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.METALIC}
        position={[-0.02032674, -0.21791399, 0.15336019]}
        rotation={[-1.53552256, 0.00705918, -3.1113614]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials['METALIC.011']}
        position={[-0.01011634, -0.23614398, 0.15199946]}
        rotation={[0.02308976, 0.02656279, -3.12641786]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.METALIC}
        position={[-0.0099391, -0.21856114, 0.15308058]}
        rotation={[-1.53509781, -0.00902891, -3.11093544]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials['METALIC.012']}
        position={[-0.00001307, -0.23598444, 0.15173464]}
        rotation={[0.02308976, 0.02656279, -3.12641786]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.METALIC}
        position={[0.00015827, -0.21802145, 0.15281935]}
        rotation={[-1.53509781, -0.00902891, -3.11093544]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials['METALIC.013']}
        position={[0.01038553, -0.23582116, 0.15146206]}
        rotation={[0.02308875, 0.02663004, -3.12163551]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.METALIC}
        position={[0.01047408, -0.2180604, 0.15254714]}
        rotation={[-1.53460743, -0.02729653, -3.11044351]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials['METALIC.014']}
        position={[0.02076057, -0.2356573, 0.15119012]}
        rotation={[0.02308875, 0.02663004, -3.12163551]}
        scale={0.0320562}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.METALIC}
        position={[0.02084597, -0.21769384, 0.15227711]}
        rotation={[-1.53497052, -0.01380835, -3.11080762]}
        scale={[0.00500354, 0.00237113, 0.0102959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={nodes.Circle050.material}
        position={[-0.00826946, -0.00265127, 0.15431806]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={nodes.Circle051.material}
        position={[-0.00866063, 0.022515, 0.15455538]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={nodes.Circle052.material}
        position={[-0.00908567, 0.04986084, 0.15481326]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={nodes.Circle053.material}
        position={[-0.00956056, 0.08041269, 0.15510136]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle054.geometry}
        material={nodes.Circle054.material}
        position={[0.00378855, 0.13461882, 0.15523851]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={nodes.Circle055.material}
        position={[-0.02439779, 0.13417375, 0.15597732]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle056.geometry}
        material={nodes.Circle056.material}
        position={[-0.01139358, 0.19834107, 0.15621343]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle057.geometry}
        material={nodes.Circle057.material}
        position={[-0.01217286, 0.24847639, 0.15668622]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle058.geometry}
        material={nodes.Circle058.material}
        position={[-0.01302566, 0.30334145, 0.15720357]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle059.geometry}
        material={nodes.Circle059.material}
        position={[-0.01398137, 0.36482805, 0.1577834]}
        rotation={[-1.5613668, -0.01554157, -3.11524275]}
        scale={0.01289206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stringe.geometry}
        material={materials['Material.009']}
        position={[-0.03108067, -0.08214095, 0.15659949]}
        rotation={[0.54220817, -1.540207, -1.03781553]}
        scale={0.0052544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringA.geometry}
        material={materials['Material.010']}
        position={[-0.0207846, -0.08197838, 0.15632962]}
        rotation={[0.54220817, -1.540207, -1.03781553]}
        scale={0.0052544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringD.geometry}
        material={materials['Material.011']}
        position={[-0.01054418, -0.08181667, 0.1560612]}
        rotation={[0.54220817, -1.540207, -1.03781553]}
        scale={0.0052544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringG.geometry}
        material={materials['Material.012']}
        position={[-0.00106635, -0.08166701, 0.15581277]}
        rotation={[0.54220817, -1.540207, -1.03781553]}
        scale={0.0052544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringhE.geometry}
        material={materials['Material.013']}
        position={[0.01763681, -0.08137167, 0.15532254]}
        rotation={[0.54220817, -1.540207, -1.03781553]}
        scale={0.0052544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StringB.geometry}
        material={materials['Material.007']}
        position={[-0.00689585, 0.59636027, 0.15610327]}
        rotation={[-1.56136663, -0.01554157, -3.11524275]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.005']}
        position={[0.02083978, 0.63400334, 0.15087989]}
        rotation={[2.91480484, 1.53857762, -1.34790912]}
        scale={[0.01591436, 0.02218152, 0.01447764]}
      />
    </group>
  )
}

useGLTF.preload('/guitar1.glb')
