import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

export function Model(props) {
  const { nodes, materials } = useGLTF('/Galaxy/galaxy.gltf');
  return (
    <group {...props} dispose={null}>
      <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
    </group>
  );
}


export function Galaxy() {
    return (
      <div className='absolute h-[400px] inset-0'>
        <Canvas className='w-full h-full'>
          <OrbitControls enableZoom={true} />
          <Suspense fallback={null}>
            <ambientLight />
            <Model scale={[15.15, 15.15, 15.15]} />
          </Suspense>
        </Canvas>
      </div>
    );
  }
  
