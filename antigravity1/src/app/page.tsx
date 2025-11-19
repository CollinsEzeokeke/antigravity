import { Suspense } from 'react';
import LiveTelemetry from '@/components/dashboard/LiveTelemetry';
import PlanetaryGlobe from '@/components/dashboard/PlanetaryGlobe';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Main Viewport */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="flex-1 bg-black/20 border border-white/10 rounded-xl p-6 relative overflow-hidden group backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-20 group-hover:opacity-50 transition-opacity" />
          <h2 className="text-lg font-mono text-white/70 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-blue rounded-full shadow-[0_0_10px_#00f0ff]" />
            PLANETARY OVERVIEW
          </h2>
          <PlanetaryGlobe />
        </div>

        <div className="h-1/3 bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-sm font-mono text-white/50 mb-4">SYSTEM LOGS</h2>
          <div className="space-y-2 font-mono text-xs text-white/40">
            <p><span className="text-cyber-blue">[14:02:11]</span> ATMOSPHERE STABILIZATION SEQUENCE INITIATED</p>
            <p><span className="text-cyber-blue">[14:01:45]</span> SECTOR 7 TEMPERATURE NOMINAL</p>
            <p><span className="text-alert-red">[13:59:22]</span> WARNING: PRESSURE DROP IN SECTOR 4</p>
            <p><span className="text-cyber-blue">[13:55:10]</span> SOLAR ARRAY EFFICIENCY AT 98%</p>
          </div>
        </div>
      </div>

      {/* Side Panel */}
      <div className="flex flex-col gap-6">
        <div className="bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-sm font-mono text-white/50 mb-4">TELEMETRY</h2>
          <Suspense fallback={<div className="text-white/20 animate-pulse font-mono text-xs">INITIALIZING SENSORS...</div>}>
            <LiveTelemetry />
          </Suspense>
        </div>

        <div className="flex-1 bg-black/20 border border-white/10 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <h2 className="text-sm font-mono text-white/50 mb-4">TERRAFORMING PROGRESS</h2>
          <div className="flex items-center justify-center h-40">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="64" cy="64" r="60" fill="none" stroke="#333" strokeWidth="8" />
                <circle cx="64" cy="64" r="60" fill="none" stroke="var(--color-cyber-blue)" strokeWidth="8" strokeDasharray="377" strokeDashoffset="100" strokeLinecap="round" />
              </svg>
              <div className="absolute text-2xl font-bold font-mono text-white">74%</div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs font-mono text-white/60">
              <span>FLORA GROWTH</span>
              <span>62%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[62%]" />
            </div>

            <div className="flex justify-between text-xs font-mono text-white/60 mt-2">
              <span>WATER LEVELS</span>
              <span>88%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[88%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
