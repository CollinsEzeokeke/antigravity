import InteractiveMap from '@/components/planet/InteractiveMap';

export default function PlanetPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-mono font-bold text-white tracking-wider">PLANETARY SURFACE VIEW</h1>
                    <p className="text-sm text-white/40 font-mono mt-1">SECTOR ANALYSIS & TERRAIN MAPPING</p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <div className="text-xs text-white/40 font-mono">SURFACE AREA</div>
                        <div className="text-lg font-mono text-cyber-blue">510.1 M km²</div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-right">
                        <div className="text-xs text-white/40 font-mono">TERRAFORMED</div>
                        <div className="text-lg font-mono text-emerald-400">12.4%</div>
                    </div>
                </div>
            </div>

            <InteractiveMap />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-black/20 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                        <div className="text-xs font-mono text-white/40 mb-2">SECTOR 0{i} STATUS</div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-white/20 w-2/3" />
                        </div>
                        <div className="text-xs text-white/60">Scanning in progress...</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
