"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Wind, Droplets } from 'lucide-react';
import clsx from 'clsx';

interface TelemetryItem {
    label: string;
    value: number;
    unit: string;
    icon: any;
    color: string;
    bgColor: string;
}

export default function LiveTelemetry() {
    const [data, setData] = useState<TelemetryItem[]>([
        { label: 'SURFACE TEMP', value: 24.5, unit: '°C', icon: Thermometer, color: 'text-orange-400', bgColor: 'bg-orange-400' },
        { label: 'ATMOS PRESSURE', value: 101.3, unit: 'kPa', icon: Wind, color: 'text-blue-400', bgColor: 'bg-blue-400' },
        { label: 'O2 LEVELS', value: 19.8, unit: '%', icon: Activity, color: 'text-emerald-400', bgColor: 'bg-emerald-400' },
        { label: 'HUMIDITY', value: 45.2, unit: '%', icon: Droplets, color: 'text-cyan-400', bgColor: 'bg-cyan-400' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => prev.map(item => ({
                ...item,
                value: item.value + (Math.random() - 0.5) * 2 // Simulate fluctuation
            })));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item) => (
                <div key={item.label} className="bg-black/40 border border-white/10 p-4 rounded-lg backdrop-blur-sm hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-white/40 tracking-wider">{item.label}</span>
                        <item.icon className={clsx("w-4 h-4", item.color)} />
                    </div>
                    <div className="flex items-end gap-2">
                        <motion.span
                            className="text-2xl font-mono font-bold text-white/90"
                            // Animate number change? For now just opacity pulse
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {item.value.toFixed(1)}
                        </motion.span>
                        <span className="text-xs font-mono text-white/40 mb-1">{item.unit}</span>
                    </div>

                    {/* Mini Chart Line */}
                    <div className="h-1 w-full bg-white/5 mt-3 rounded-full overflow-hidden">
                        <motion.div
                            className={clsx("h-full", item.bgColor)}
                            initial={{ width: '50%' }}
                            animate={{ width: `${Math.min(100, Math.max(0, (item.value / 150) * 100))}%` }} // Normalize roughly
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
