import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";

function Particles({ scrollY }) {
  const mesh = useRef();
  const { mouse } = useThree();

  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // wide space
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (mesh.current) {
      const positionsArray = mesh.current.geometry.attributes.position.array;

      // 🌌 Floating space effect
      for (let i = 0; i < count; i++) {
        positionsArray[i * 3 + 2] += 0.002 + scrollY * 0.00002; // move forward
        positionsArray[i * 3 + 1] += Math.sin(time + i) * 0.0005;

        // reset when too far
        if (positionsArray[i * 3 + 2] > 10) {
          positionsArray[i * 3 + 2] = -10;
        }
      }

      mesh.current.geometry.attributes.position.needsUpdate = true;

      // 🔄 rotation changes with scroll
      mesh.current.rotation.y += 0.0005 + scrollY * 0.00001;

      // 🎯 mouse interaction
      mesh.current.rotation.x = mouse.y * 0.3;
      mesh.current.rotation.y += mouse.x * 0.0005;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

export default function AboutParticles() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <Canvas
  style={{
    position: "fixed",   // 🔥 IMPORTANT
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  }}
  camera={{ position: [0, 0, 5] }}
>
      <ambientLight intensity={0.5} />

      <Particles scrollY={scrollY} />
    </Canvas>
  );
}