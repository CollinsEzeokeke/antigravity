import { Suspense } from 'react';
import SystemGrid from '@/components/systems/SystemGrid';

export default function LifeSupportPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-mono font-bold text-white tracking-wider">LIFE SUPPORT SYSTEMS</h1>
                <p className="text-sm text-white/40 font-mono mt-1">REAL-TIME DIAGNOSTICS & CONTROL</p>
            </div>

            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-emerald-500">SYSTEMS ONLINE</span>
                </div>

                <Suspense fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-32 bg-white/5 rounded-xl animate-pulse" />
                        ))}
                    </div>
                }>
                    <SystemGrid />
                </Suspense>
            </div>
        </div>
    );
}
