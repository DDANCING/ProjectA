import { extend, ReactThreeFiber } from "@react-three/fiber";
import { OrbitControls } from "three-stdlib";

extend({ OrbitControls });

declare global {
   namespace JSX{
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
      OrbitControls,
      typeof OrbitControls
      >;
    }
   }
}