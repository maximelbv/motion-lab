import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { useState, useRef, RefObject } from "react";
import * as THREE from "three";
import DefaultScene from "../../../scenes/DefaultScene";

const ThreeBox = () => {
  const sphereRef: RefObject<THREE.Mesh> = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((_state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.5;
    }
  });

  const handleHover = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handleQuitHover = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  };

  return (
    <DefaultScene>
      {/* <mesh
        ref={sphereRef}
        onPointerEnter={handleHover}
        onPointerLeave={handleQuitHover}
      >
        <boxGeometry />
        <MeshWobbleMaterial
          color={isHovered ? "#4f81e4" : "#ba4fe4"}
          speed={3}
        />
      </mesh> */}
      <OrbitControls />
    </DefaultScene>
  );
};

export default ThreeBox;
