'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface Tokamak3DProps {
    temperature: number; // 0 to 100
    magneticField: number; // 0 to 100
}

export default function Tokamak3D({ temperature, magneticField }: Tokamak3DProps) {
    const particlesCount = 2000;
    const positions = useMemo(() => new Float32Array(particlesCount * 3), []);
    const colors = useMemo(() => new Float32Array(particlesCount * 3), []);
    const pointsRef = useRef<THREE.Points>(null);

    // Initial particle setup (random distribution in a torus)
    useMemo(() => {
        for (let i = 0; i < particlesCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2.5 + (Math.random() - 0.5) * 1.5; // Torus major radius + minor radius variance
            const z = (Math.random() - 0.5) * 1.5;

            // Convert polar to cartesian for initial positions (rough torus)
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = Math.sin(angle) * radius;
            positions[i * 3 + 2] = z;

            colors[i * 3] = 0.5;
            colors[i * 3 + 1] = 0.5;
            colors[i * 3 + 2] = 1;
        }
    }, [positions, colors]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();
        const speed = 0.2 + (temperature / 100) * 2.0; // Temperature increases speed
        // Confinement: The maximum radius the particles can stray from the core.
        // Magnetic field 0 -> 1.5 (Full tube)
        // Magnetic field 100 -> 0.3 (Tight beam)
        const confinement = 1.5 - (magneticField / 100) * 1.2;

        const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const colorsArray = pointsRef.current.geometry.attributes.color.array as Float32Array;

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;

            // Current position
            let x = positionsArray[i3];
            let y = positionsArray[i3 + 1];
            let z = positionsArray[i3 + 2];

            // 1. Toroidal movement (around the main ring)
            // Calculate angle around the Z-axis
            let theta = Math.atan2(y, x);
            theta += speed * 0.01; // Move around the ring

            // 2. Poloidal properties (position inside the tube)
            const majorRadius = 2.5;
            const currentMajorRadius = Math.sqrt(x * x + y * y);
            let distFromCore = currentMajorRadius - majorRadius; // Radial distance from tube center

            // 3. Apply noise/heat (Random walk)
            // Higher temperature = more chaotic movement
            const noiseScale = (temperature / 100) * 0.05;
            distFromCore += (Math.random() - 0.5) * noiseScale;
            z += (Math.random() - 0.5) * noiseScale;

            // 4. Confinement (Magnetic Field)
            // Calculate current distance from the tube's center line (minor radius)
            let minorRadius = Math.sqrt(distFromCore * distFromCore + z * z);

            // If the particle is outside the confinement zone, pull it back smoothly
            // or just clamp it. For a "contained flame" look, we want them to fill the space
            // up to the limit.
            if (minorRadius > confinement) {
                // Soft bounce back
                const ratio = confinement / minorRadius;
                distFromCore *= ratio;
                z *= ratio;
            } else if (minorRadius < 0.1) {
                // Prevent them from collapsing into a perfect line (singularity)
                // Push them out slightly if they get too close to the core
                distFromCore += (Math.random() - 0.5) * 0.1;
                z += (Math.random() - 0.5) * 0.1;
            }

            // 5. Reconstruct position
            const newMajorRadius = majorRadius + distFromCore;

            positionsArray[i3] = Math.cos(theta) * newMajorRadius;
            positionsArray[i3 + 1] = Math.sin(theta) * newMajorRadius;
            positionsArray[i3 + 2] = z;

            // Color based on temperature (Dynamic gradients)
            const r = 0.2 + (temperature / 100) * 0.8;
            const g = (temperature / 100) * 0.6; // Reduced green for more "fiery/plasma" look
            const b = 1.0 - (temperature / 100) * 0.8;

            colorsArray[i3] = r;
            colorsArray[i3 + 1] = g;
            colorsArray[i3 + 2] = b;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.geometry.attributes.color.needsUpdate = true;

        // Rotate the whole assembly slowly
        pointsRef.current.rotation.z += 0.001;
        pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    });

    return (
        <group>
            {/* The Plasma Cloud */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesCount}
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={particlesCount}
                        args={[colors, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    vertexColors
                    transparent
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                    sizeAttenuation
                />
            </points>

            {/* The Vessel (Ghostly Structure) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 1.6, 16, 50]} />
                <meshStandardMaterial
                    color="#444"
                    wireframe
                    transparent
                    opacity={0.1}
                    emissive="#d4af37"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Floating Runes/Details */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[3.5, 0, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={2} />
                </mesh>
            </Float>
        </group>
    );
}
