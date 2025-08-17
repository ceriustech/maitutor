'use client';

import { Gltf, Environment, CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Camera } from 'three';
import { Teacher } from './teacher';

const Expereience = () => {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 0.0001] }}>
				<CameraManager />
				<Environment preset="sunset" color="pink" />
				<ambientLight intensity={0.4} />
				<Teacher teacher="Nanami" position={[-1, -1.7, -3]} />
				<Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]} />
			</Canvas>
		</>
	);
};

const CameraManager = () => {
	return (
		<CameraControls
			minZoom={1}
			maxZoom={3}
			poloarRotateSpeed={-0.3}
			azimuthRotateSpeed={-0.3}
			mouseButtons={{
				left: 1,
				wheel: 16,
			}}
			touches={{
				one: 32,
				two: 512,
			}}
		/>
	);
};

export default Expereience;
