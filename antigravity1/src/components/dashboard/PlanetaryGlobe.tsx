"use client";

import { motion } from 'framer-motion';

export default function PlanetaryGlobe() {
    return (
        <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-12 border border-white/5 rounded-full border-dashed opacity-50" />

            {/* Planet */}
            <motion.div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-900 to-black relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                {/* Texture/Detail (Abstract) */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />

                {/* Grid Lines on Planet */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] rounded-full" />
            </motion.div>

            {/* Scanning Effect */}
            <motion.div
                className="absolute w-full h-0.5 bg-cyber-blue/50 blur-sm top-1/2"
                animate={{ top: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            {/* Data Points */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-2 h-2 bg-alert-red rounded-full shadow-[0_0_10px_#ff2a2a]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Overlay UI */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-4 py-1 rounded-full border border-white/10 text-[10px] font-mono text-cyber-blue whitespace-nowrap">
                SECTOR SCANNING...
            </div>
        </div>
    );
}
