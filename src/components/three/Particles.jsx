import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";

const techs = [
  "Next js",
  "Node.js",
  "MongoDB",
  "Express",
  "React",
  "Redux",
  "Tailwind",
  "JavaScript",
];

// 🧠 Distribute points on sphere
function getSpherePosition(i, total, radius) {
  const phi = Math.acos(-1 + (2 * i) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  return [
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi),
  ];
}

function TechOrbit() {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={group}>
      {techs.map((tech, i) => {
        const pos = getSpherePosition(i, techs.length, 3);

        return (
          <Billboard key={i} position={pos}>
            <Text
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {tech}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
}

export default function TechSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      {/* Lighting */}
      <ambientLight intensity={0.8} />

      {/* 🌐 Center sphere */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial
          wireframe
          color="#555"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* 🧠 Tech orbit */}
      <TechOrbit />

      {/* 🎮 Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}