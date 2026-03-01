import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "../Reusable/Car";

const CarThree = () => {
  return (
   <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
  <ambientLight intensity={1} />
  <directionalLight position={[5, 5, 5]} />

  <Car />

  <OrbitControls target={[0, 0, 0]} enableZoom={false} />
</Canvas>
  );
};

export default CarThree;