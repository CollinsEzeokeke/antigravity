import { Bell, Search, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-16 border-b border-white/10 bg-black/20 flex items-center justify-between px-6 z-10">
            <div className="flex items-center gap-4">
                <div className="text-xs font-mono text-white/40">
                    SECTOR: <span className="text-cyber-blue">ALPHA-9</span>
                </div>
                <div className="h-4 w-px bg-white/10" />
                <div className="text-xs font-mono text-white/40">
                    TIME: <span className="text-white/70">2149.11.04</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-white/40 hover:text-white transition-colors">
                    <Search className="w-4 h-4" />
                </button>
                <button className="p-2 text-white/40 hover:text-white transition-colors relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-alert-red rounded-full" />
                </button>
                <div className="h-6 w-px bg-white/10 mx-2" />
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <div className="text-xs font-medium text-white/90">Cmdr. Shepard</div>
                        <div className="text-[10px] text-white/40 font-mono">LEVEL 5 CLEARANCE</div>
                    </div>
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center border border-white/10">
                        <User className="w-4 h-4 text-white/60" />
                    </div>
                </div>
            </div>
        </header>
    );
}
