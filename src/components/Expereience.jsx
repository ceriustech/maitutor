'use client';

import { Gltf, Environment, CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Camera } from 'three';
import { Teacher } from './Teacher';
import CameraManager from './CameraManager';

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

export default Expereience;
