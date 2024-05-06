/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/ZeroNew.glb -o src/components/ZeroNew.jsx -r public 
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useFrame, useGraph } from "@react-three/fiber";

const MOVEMENT_SPEED = 0.05;

export function ZeroNew({ hairColorZ = "grey", ...props }) {
  const position = useMemo(() => props.position, []);

  const group = useRef();
  const { scene, materials, animations } = useGLTF("/models/ZeroNew.glb");

  //clone mesh
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("idle_standing");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32);
  }, [animation]);

  useFrame(() => {
    if (group.current.position.distanceTo(props.position) > 0.1) {
      const direction = group.current.position
        .clone()
        .sub(props.position)
        .normalize()
        .multiplyScalar(MOVEMENT_SPEED);
      group.current.position.sub(direction);
      group.current.lookAt(props.position);
      setAnimation("walk_standing");
    } else {
      setAnimation("idle_standing");
    }
  });

  console.log(actions);

  return (
    <group ref={group} {...props} position={position} dispose={null}>
      <group name="Scene">
        <group name="standing" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="CH015_000_U_-_BodyMesh_c_47386_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_BodyMesh_c_47386_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_BodyMesh_c_47386_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_BodyMesh_m_47388_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_BodyMesh_m_47388_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_BodyMesh_m_47388_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_FaceMesh_c_47390_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_FaceMesh_c_47390_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_FaceMesh_c_47390_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_HairMesh_c_47392_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_HairMesh_c_47392_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_HairMesh_c_47392_TCP2_Smoothed"].skeleton
            }
          >
            <meshStandardMaterial color={hairColorZ} />
          </skinnedMesh>
          <skinnedMesh
            name="CH015_000_U_-_HandMesh_L_c_47394_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_HandMesh_L_c_47394_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_HandMesh_L_c_47394_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_HandMesh_L_m_47396_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_HandMesh_L_m_47396_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_HandMesh_L_m_47396_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_HandMesh_R_c_47398_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_HandMesh_R_c_47398_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_HandMesh_R_c_47398_TCP2_Smoothed"].skeleton
            }
          />
          <skinnedMesh
            name="CH015_000_U_-_HandMesh_R_m_47400_TCP2_Smoothed"
            geometry={
              nodes["CH015_000_U_-_HandMesh_R_m_47400_TCP2_Smoothed"].geometry
            }
            material={materials["Zero_(MMZ)"]}
            skeleton={
              nodes["CH015_000_U_-_HandMesh_R_m_47400_TCP2_Smoothed"].skeleton
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ZeroNew.glb");
