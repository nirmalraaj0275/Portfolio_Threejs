import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";

const Car = () => {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/car/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().fadeIn(0.5).play();
      });
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.5}
      position={[0, -0.5, 0]}
    />
  );
};

export default Car;