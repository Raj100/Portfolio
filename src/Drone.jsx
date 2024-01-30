
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/drone.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={ 1} position={[2,1,3]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat_Instance} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.black_Instance} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blueSteel_Instance} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.engine_Instance} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.glass_Instance} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.defaultMat_Instance_Instance} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.black_Instance_Instance} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.blueSteel_Instance_Instance} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.blueSteel_Instance_Instance} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.engine_Instance_Instance} />
      </group>
    </group>
  )
}

useGLTF.preload('/drone.gltf')
