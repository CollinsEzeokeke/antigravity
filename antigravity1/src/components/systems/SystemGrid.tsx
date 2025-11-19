import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import clsx from 'clsx';

interface System {
    id: string;
    name: string;
    status: 'optimal' | 'warning' | 'critical';
    efficiency: number;
}

async function getSystems(): Promise<System[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return [
        { id: 'O2', name: 'Oxygen Generation', status: 'optimal', efficiency: 98 },
        { id: 'H2O', name: 'Water Reclamation', status: 'optimal', efficiency: 95 },
        { id: 'TEMP', name: 'Thermal Regulation', status: 'warning', efficiency: 78 },
        { id: 'GRAV', name: 'Gravity Generators', status: 'optimal', efficiency: 100 },
        { id: 'RAD', name: 'Radiation Shielding', status: 'critical', efficiency: 45 },
        { id: 'BIO', name: 'Biomass Synthesis', status: 'optimal', efficiency: 92 },
    ];
}

export default async function SystemGrid() {
    const systems = await getSystems();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((sys) => (
                <div
                    key={sys.id}
                    className={clsx(
                        "p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.02]",
                        sys.status === 'optimal' ? "bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40" :
                            sys.status === 'warning' ? "bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40" :
                                "bg-red-500/5 border-red-500/20 hover:border-red-500/40"
                    )}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-sm font-mono font-bold text-white/90">{sys.name}</h3>
                            <span className="text-xs font-mono text-white/40">ID: {sys.id}-SYS</span>
                        </div>
                        {sys.status === 'optimal' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                        {sys.status === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                        {sys.status === 'critical' && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-white/60">
                            <span>EFFICIENCY</span>
                            <span>{sys.efficiency}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                            <div
                                className={clsx(
                                    "h-full rounded-full transition-all duration-1000",
                                    sys.status === 'optimal' ? "bg-emerald-500" :
                                        sys.status === 'warning' ? "bg-orange-500" : "bg-red-500"
                                )}
                                style={{ width: `${sys.efficiency}%` }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
