'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AtomSmasher() {
    const [fusing, setFusing] = useState(false);
    const [fused, setFused] = useState(false);

    const smash = () => {
        if (fusing || fused) return;
        setFusing(true);
        setTimeout(() => {
            setFused(true);
            setFusing(false);
        }, 1000); // Impact time
    };

    const reset = () => {
        setFused(false);
        setFusing(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-black/30 rounded-lg border-2 border-[#d4af37]">
            <h3 className="text-2xl mb-8 font-serif text-[#d4af37]">The Alchemical Wedding</h3>

            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode='wait'>
                    {!fused ? (
                        <>
                            {/* Deuterium Essence */}
                            <motion.div
                                className="absolute w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_#3b82f6]"
                                initial={{ x: -150, opacity: 0 }}
                                animate={{
                                    x: fusing ? 0 : -100,
                                    opacity: 1,
                                    scale: fusing ? 0.5 : 1
                                }}
                                transition={{ duration: fusing ? 0.5 : 1, type: "spring" }}
                            >
                                <span className="text-white font-bold">D</span>
                            </motion.div>

                            {/* Tritium Essence */}
                            <motion.div
                                className="absolute w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_20px_#a855f7]"
                                initial={{ x: 150, opacity: 0 }}
                                animate={{
                                    x: fusing ? 0 : 100,
                                    opacity: 1,
                                    scale: fusing ? 0.5 : 1
                                }}
                                transition={{ duration: fusing ? 0.5 : 1, type: "spring" }}
                            >
                                <span className="text-white font-bold">T</span>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            {/* Helium (Sun Fire) */}
                            <motion.div
                                className="absolute w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_50px_#eab308]"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <span className="text-black font-bold text-xl">He</span>
                            </motion.div>

                            {/* Neutron (Energy) */}
                            <motion.div
                                className="absolute w-8 h-8 rounded-full bg-white shadow-[0_0_30px_#ffffff]"
                                initial={{ x: 0, y: 0 }}
                                animate={{ x: 200, y: -200, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />

                            <motion.div
                                className="absolute text-yellow-200 font-bold text-2xl"
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -50, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                ENERGY!
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={smash}
                    disabled={fusing || fused}
                    className={`px-6 py-2 border-2 border-[#d4af37] text-[#d4af37] font-serif hover:bg-[#d4af37] hover:text-black transition-colors ${fusing || fused ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Combine Essences
                </button>

                {fused && (
                    <button
                        onClick={reset}
                        className="px-6 py-2 border-2 border-red-500 text-red-500 font-serif hover:bg-red-500 hover:text-white transition-colors"
                    >
                        Reset Experiment
                    </button>
                )}
            </div>

            <p className="mt-4 text-sm text-gray-400 italic max-w-md text-center">
                "When the Blue Spirit meets the Purple Spirit in the heart of the sun, they birth Gold and a flash of pure lightning."
            </p>
        </div>
    );
}
