/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 jayden-animated.gltf 
*/

import React, { useRef, useEffect, useState } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import Scene from "./scene"

export default function JaydenModel({ animationsArray }) {
  const [activeScene, setActiveScene] = useState("talking")
  const group = useRef()

  const { nodes, materials, animations } = useGLTF(
    "../../models/jayden-animated-3.gltf"
  )

  // const { actions } = useAnimations(animations, group)

  // const animationOrder = ["talking", "typing"]
  // const [animationIndex, setAnimationIndex] = useState(0)

  // useEffect(() => {
  //   actions[animationOrder[animationIndex]].reset().fadeIn(0.5).play()
  //   setActiveScene(animationOrder[animationIndex])
  //   return () => {
  //     actions[animationOrder[animationIndex]]?.fadeOut(0.5)
  //   }
  // }, [animationIndex])

  // // Function to increment the count
  // const incrementCount = () => {
  //   if (animationIndex == animationOrder.length - 1) {
  //     setAnimationIndex(0)
  //   } else {
  //     setAnimationIndex(animationIndex + 1)
  //   }
  // }

  // // Effect to trigger the increment every second
  // useEffect(() => {
  //   const intervalId = setInterval(incrementCount, 4000)

  //   // Cleanup function to clear the interval when the component unmounts
  //   return () => clearInterval(intervalId)
  // }, [animationIndex]) // Only re-run the effect if the count changes

  return (
    <group ref={group} position={[1, -1.2, 0]} dispose={null}>
      <group name="Scene">
        <group name="base">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.Skin}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.Eyes}
            skeleton={nodes.Eyes.skeleton}
          />
          <skinnedMesh
            name="Glasses"
            geometry={nodes.Glasses.geometry}
            material={materials.Glasses}
            skeleton={nodes.Glasses.skeleton}
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.Hair}
            skeleton={nodes.Hair.skeleton}
          />
          <skinnedMesh
            name="Hands"
            geometry={nodes.Hands.geometry}
            material={materials.Skin}
            skeleton={nodes.Hands.skeleton}
          />
          <skinnedMesh
            name="Hands001"
            geometry={nodes.Hands001.geometry}
            material={materials.Skin}
            skeleton={nodes.Hands001.skeleton}
          />
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.Skin}
            skeleton={nodes.Head.skeleton}
          />
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Pants.skeleton}
          />
          <skinnedMesh
            name="Shoelaces"
            geometry={nodes.Shoelaces.geometry}
            material={materials.Laces}
            skeleton={nodes.Shoelaces.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials["Shoe Body"]}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Sweater"
            geometry={nodes.Sweater.geometry}
            material={materials.Sweater}
            skeleton={nodes.Sweater.skeleton}
          />
          <skinnedMesh
            name="Sweater001"
            geometry={nodes.Sweater001.geometry}
            material={materials["Sweater Logo"]}
            skeleton={nodes.Sweater001.skeleton}
          />
        </group>
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.822} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.822} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.206} />
          <group
            name="cs_foot"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.308}
          />
          <group
            name="cs_foot001"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.308}
          />
          <group
            name="cs_foot002"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.308}
          />
          <group
            name="cs_foot_01"
            position={[0.5, 18.5, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={2.186}
          />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.592} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.822} />
          <group
            name="cs_hand"
            position={[0.5, 19.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.308}
          />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.206} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.206} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.206} />
          <group
            name="cs_shoulder_left"
            position={[0.5, 15.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.038}
          />
          <group
            name="cs_shoulder_right"
            position={[0.5, 16.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.038}
          />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.206} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.206} />
          <group
            name="cs_square"
            position={[1.5, 1.497, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.154}
          />
          <group
            name="cs_square_2"
            position={[0.5, 1.497, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.154}
          />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.822} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.429} />
        </group>
        {/* <Scene activeScene={activeScene} name="talking">
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[-0.982, 2.415, 1.924]}
            scale={[0.731, 0.769, 0.059]}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            position={[0.419, 1.256, 1.924]}
            scale={[0.503, 0.529, 0.059]}
          />
        </Scene>
        <Scene activeScene={activeScene} name="typing">
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[-0.001, 0.25, 1.357]}
            scale={[1, 0.25, 0.69]}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            position={[-0.001, 1.281, 1.924]}
            scale={[0.935, 0.487, 0.037]}
          />
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[-0.001, 0.621, 1.924]}
            scale={[0.142, 0.196, 0.015]}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[0, 0.175, 0]}
            scale={[0.404, 0.175, 0.404]}
          />
        </Scene>
        <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial toneMapped={false} color="white" />
        </mesh> */}
      </group>
    </group>
  )
}

useGLTF.preload("../../models/jayden-animated-3.gltf")
