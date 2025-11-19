"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, MapPin } from 'lucide-react';

export default function InteractiveMap() {
    const [scale, setScale] = useState(1);

    return (
        <div className="relative w-full h-[600px] bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm group">
            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button
                    onClick={() => setScale(s => Math.min(s + 0.5, 3))}
                    className="p-2 bg-black/60 border border-white/10 rounded hover:bg-white/10 text-white/70 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                </button>
                <button
                    onClick={() => setScale(s => Math.max(s - 0.5, 1))}
                    className="p-2 bg-black/60 border border-white/10 rounded hover:bg-white/10 text-white/70 transition-colors"
                >
                    <Minus className="w-4 h-4" />
                </button>
            </div>

            {/* Map Content */}
            <motion.div
                className="w-full h-full relative cursor-move"
                drag
                dragConstraints={{ left: -500, right: 0, top: -500, bottom: 0 }}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Grid / Terrain Placeholder */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* Terrain Features (Abstract) */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                {/* Points of Interest */}
                <div className="absolute top-[30%] left-[40%] flex flex-col items-center group/pin">
                    <MapPin className="w-6 h-6 text-alert-red drop-shadow-[0_0_10px_rgba(255,42,42,0.5)]" />
                    <div className="mt-2 px-2 py-1 bg-black/80 border border-alert-red/50 rounded text-[10px] font-mono text-alert-red opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                        SECTOR 7: UNSTABLE
                    </div>
                </div>

                <div className="absolute bottom-[40%] right-[30%] flex flex-col items-center group/pin">
                    <MapPin className="w-6 h-6 text-cyber-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                    <div className="mt-2 px-2 py-1 bg-black/80 border border-cyber-blue/50 rounded text-[10px] font-mono text-cyber-blue opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                        BASE ALPHA: ONLINE
                    </div>
                </div>
            </motion.div>

            {/* Overlay UI */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs font-mono text-white/50">
                COORDS: 45.221, -12.993
            </div>
        </div>
    );
}
