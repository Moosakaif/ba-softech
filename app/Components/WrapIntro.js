"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export default function WarpIntro({ onFinish }) {
  const containerRef = useRef();

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-50"
      style={{ perspective: "1000px" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'black' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <SpaceWarp onFinish={() => {
          gsap.timeline()
            .to(containerRef.current, {
              opacity: 0.7,
              duration: 1,
              ease: "power2.inOut",
            })
            .to(containerRef.current, {
              opacity: 0,
              duration: 0.5,
              delay: 0.2,
              ease: "power2.in",
              onComplete: onFinish
            });
        }} />
      </Canvas>
    </div>
  );
}

function SpaceWarp({ onFinish }) {
  const { camera, gl } = useThree();
  const tunnelRef = useRef();
  const starsRef = useRef();
  const groupRef = useRef();

  useEffect(() => {
    gl.setPixelRatio(Math.min(1, window.devicePixelRatio));
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.physicallyCorrectLights = false;
    gl.outputEncoding = THREE.LinearEncoding;
    return () => {
      if (tunnelRef.current) {
        tunnelRef.current.geometry.dispose();
        tunnelRef.current.material.dispose();
      }
    };
  }, [gl]);

  useEffect(() => {
    camera.position.z = 5;
    
    const tl = gsap.timeline({
      onComplete: onFinish
    });

    tl.to(groupRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
      ease: "power2.out",
      from: 0.1
    });

    tl.to(camera.position, {
      z: -100,
      duration: 3,
      ease: "power2.inOut"
    }, "-=0.5");

    tl.to(starsRef.current, {
      speed: 3,
      duration: 2,
      ease: "power2.in"
    }, "-=2.5");

  }, [camera, onFinish]);

  useFrame((state, delta) => {
    if (tunnelRef.current) {
      tunnelRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={0.1}>
      <Stars
        ref={starsRef}
        radius={70} 
        depth={50}  
        count={1500} 
        factor={2}
        fade
        speed={0.3}
      />


      <mesh ref={tunnelRef}>
        <cylinderGeometry args={[5, 0.1, 150, 24, 20, true]} />
        <meshBasicMaterial
          side={THREE.BackSide}
          color="#FFEE8C"
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh>
        <cylinderGeometry args={[5.2, 0.2, 150, 24, 20, true]} />
        <meshBasicMaterial
          side={THREE.BackSide}
          color="#8888ff"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}