import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/Face/face.gltf');
  return (
    <group {...props} dispose={null} rotation={[Math.PI / 1, 2, 3]}>
      <mesh geometry={nodes.ProxyMesh155994_Baked_0.geometry} material={materials.Baked} scale={0.001} />
    </group>
  );
}

export default function Face() {
  return (
    <div className='h-[500px]'> 
      <Canvas className='h-[500px] w-full'> 
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <ambientLight />
          <Model scale={[7, 7, 7]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
