/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 newnew.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/newnew.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model001" position={[3.649, -2.87, 0.31]} rotation={[-1.571, 0.01, -0.002]} scale={0.41}>
          <group name="root" position={[-2.539, -3.431, -0.358]}>
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0" scale={0.01}>
                <group name="skeletal1_1">
                  <group name="GLTF_created_0" position={[-610.905, 318.762, -488.081]}>
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="drone44_44_correction">
                      <group name="drone44_44" />
                    </group>
                    <skinnedMesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.material_0} skeleton={nodes.Object_50.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/newnew.glb')