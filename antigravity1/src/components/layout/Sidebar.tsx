import Link from 'next/link';
import { LayoutDashboard, Globe, Activity, Settings, Database } from 'lucide-react';

const navItems = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Planetary View', href: '/planet', icon: Globe },
    { name: 'Life Support', href: '/systems/life-support', icon: Activity },
    { name: 'Database', href: '/database', icon: Database },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-full border-r border-white/10 bg-black/20 flex flex-col z-10">
            <div className="p-6 border-b border-white/10">
                <h1 className="text-xl font-bold tracking-widest text-cyber-blue font-mono">
                    NEXUS<span className="text-white/50">OS</span>
                </h1>
                <p className="text-xs text-white/40 mt-1 font-mono">TERRAFORMING DECK</p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-cyber-blue hover:bg-white/5 transition-colors group"
                    >
                        <item.icon className="w-4 h-4 text-white/40 group-hover:text-cyber-blue transition-colors" />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <div className="bg-white/5 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase text-white/40 font-mono">System Status</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-xs font-mono text-emerald-400">OPTIMAL</div>
                </div>
            </div>
        </aside>
    );
}
