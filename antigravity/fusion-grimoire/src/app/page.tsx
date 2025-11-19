'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Tokamak3D from '@/components/Tokamak3D';
import AtomSmasher from '@/components/AtomSmasher';
import { Flame, Magnet, Scroll } from 'lucide-react';

export default function Home() {
  const [temperature, setTemperature] = useState(20);
  const [magneticField, setMagneticField] = useState(50);

  return (
    <main className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] bg-[#1a1a1a] text-[#e6d2b5]">

      {/* Header / Title Scroll */}
      <header className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-0"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-[#d4af37] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            The Star in the Bottle
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-serif italic">
            A Grimoire of the Forbidden Sun-Magic
          </p>
        </motion.div>
      </header>

      {/* Section 1: The Concept */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-start gap-4">
          <Scroll className="w-12 h-12 text-[#d4af37] shrink-0" />
          <div>
            <h2 className="text-3xl font-serif text-[#d4af37] mb-4">The Prophecy</h2>
            <p className="text-lg leading-relaxed font-serif">
              Hark, brave knight! Thou knowest of the Sun, that great ball of fire in the heavens?
              The wizards of the future seek to trap a piece of that celestial fire within a cage of invisible iron.
              They call this art <span className="text-[#d4af37] font-bold">"Fusion"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Atom Smasher */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif text-[#d4af37] mb-8 text-center">The Alchemy of Essences</h2>
        <AtomSmasher />
      </section>

      {/* Section 3: The Tokamak Simulation */}
      <section className="relative w-full h-[800px] bg-black border-y-4 border-[#d4af37] my-12">
        <div className="absolute top-4 left-4 z-10 bg-black/50 p-6 rounded-lg border border-[#d4af37] backdrop-blur-sm max-w-sm">
          <h3 className="text-xl font-serif text-[#d4af37] mb-4">The Cauldron Controls</h3>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-red-400">
                <Flame size={18} /> Heat of the Dragon (Temperature)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-red-500 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm mb-2 text-blue-400">
                <Magnet size={18} /> Chains of the Void (Magnetic Field)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={magneticField}
                onChange={(e) => setMagneticField(Number(e.target.value))}
                className="w-full accent-blue-500 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <p className="text-xs text-gray-400 mt-2">
              *Balance the heat and the chains, lest the spirit mist escapes!*
            </p>
          </div>
        </div>

        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <color attach="background" args={['#050505']} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />

          <Suspense fallback={null}>
            <Tokamak3D temperature={temperature} magneticField={magneticField} />
          </Suspense>

          <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={10} />
        </Canvas>

        <div className="absolute bottom-4 right-4 text-xs text-gray-500">
          The "Tokamak" Vessel
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 font-serif">
        <p>Inscribed by the Order of the Silicon Chip, Anno Domini 2025</p>
      </footer>
    </main>
  );
}
