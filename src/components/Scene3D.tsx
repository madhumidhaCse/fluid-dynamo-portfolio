import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Box, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh, Group } from "three";

function Spinner({ children, speed = 0.3 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<Group>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.y += d * speed;
      ref.current.rotation.x += d * speed * 0.4;
    }
  });
  return <group ref={ref}>{children}</group>;
}

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame(({ pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.004;
    ref.current.position.x += (pointer.x * 0.6 - ref.current.position.x) * 0.05;
    ref.current.position.y += (pointer.y * 0.4 - ref.current.position.y) * 0.05;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.35, 12]} />
      <MeshDistortMaterial
        color="#5ee7e0"
        emissive="#7a4dff"
        emissiveIntensity={0.35}
        distort={0.42}
        speed={1.6}
        roughness={0.15}
        metalness={0.85}
      />
    </mesh>
  );
}

export function Scene3D({ variant = "hero" }: { variant?: "hero" | "orbs" }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={70} color="#8b5cff" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#39e5df" />
      {variant === "hero" ? (
        <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
          <Blob />
        </Float>
      ) : (
        <>
          <Float speed={2} floatIntensity={1.6}>
            <Spinner speed={0.4}>
              <TorusKnot args={[0.7, 0.22, 128, 24]} position={[-2.2, 0.6, 0]}>
                <meshStandardMaterial color="#39e5df" metalness={0.9} roughness={0.2} />
              </TorusKnot>
            </Spinner>
          </Float>
          <Float speed={1.4} floatIntensity={1.2}>
            <Spinner speed={0.6}>
              <Icosahedron args={[0.85, 0]} position={[0, -0.4, 0]}>
                <meshStandardMaterial color="#a884ff" metalness={0.8} roughness={0.25} flatShading />
              </Icosahedron>
            </Spinner>
          </Float>
          <Float speed={1.8} floatIntensity={1.4}>
            <Spinner speed={0.5}>
              <Box args={[0.9, 0.9, 0.9]} position={[2.3, 0.7, 0]}>
                <meshStandardMaterial color="#ff9e64" metalness={0.7} roughness={0.3} />
              </Box>
            </Spinner>
          </Float>
        </>
      )}
    </Canvas>
  );
}

export default Scene3D;
