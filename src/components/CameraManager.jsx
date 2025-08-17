'use client';
import { CameraControls } from '@react-three/drei';

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

export default CameraManager;
