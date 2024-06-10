import {
  ContactShadows,
  Environment,
  Gltf,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { charactersAtom, socket } from "./socketManager";
import { useAtom, atom } from "jotai";
import { useState } from "react";
import * as THREE from "three";
// import { ZeroNew } from "./ZeroNew";
import { AnimatedGirl } from "./AnimatedGirl";

export const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <directionalLight intensity={0.3} position={[25,28,-25]} />
      <OrbitControls />
      <mesh
        // rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onDoubleClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        {/* <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="f0f0f0" /> */}
        <Gltf scale={[0.75,0.75,0.75]} src="/models/Phongtruyenthong.glb" castShadow/>
      </mesh>
      {characters.map((characters) => (
        <AnimatedGirl
          key={characters.id}
          position={
            new THREE.Vector3(
              characters.position[0],
              characters.position[1],
              characters.position[2]
            )
          }
        />
      ))}
      ,
      {/* {characters.map((characters) => (
        <ZeroNew
          key={characters.id}
          position={
            new THREE.Vector3(
              characters.position[0],
              characters.position[1],
              characters.position[2]
            )
          }
          hairColorZ={characters.hairColorZ}
          handColorZ={characters.handColorZ}
        />
      ))} */}
    </>
  );
};
