import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/Robot/robot.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 5, 5, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Mat_Arriba} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Mat_Cara} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.vidrio} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Mat_Arriba} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Mat_Brazos1} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Mat_Rueda} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Mat_Cuerpo} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.Mat_Cuerpo} />
        </group>
      </group>
    </group>
  )
}

export default function Robot() {
  return (
    <div className='flex items-center justify-center h-[800px]'> 
      <Canvas className='w-full h-full'> 
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <ambientLight />
          <Model scale={[0.15, 0.15, 0.15]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
