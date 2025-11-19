import { FileText, Lock } from 'lucide-react';

// Mock Data
const databaseEntries = [
    { id: 'LOG-001', title: 'Initial Terraforming Protocols', type: 'LOG', date: '2148.03.12', access: 'PUBLIC' },
    { id: 'LOG-002', title: 'Atmospheric Composition Analysis', type: 'DATA', date: '2148.05.22', access: 'PUBLIC' },
    { id: 'LOG-003', title: 'Sector 7 Anomaly Report', type: 'ALERT', date: '2149.01.15', access: 'RESTRICTED' },
    { id: 'RES-104', title: 'Water Purification Schematics', type: 'BLUEPRINT', date: '2148.02.01', access: 'PUBLIC' },
    { id: 'RES-202', title: 'Seed Bank Inventory', type: 'DATA', date: '2149.06.30', access: 'PUBLIC' },
    { id: 'SEC-999', title: 'Command Override Codes', type: 'KEY', date: '2149.11.01', access: 'CLASSIFIED' },
];

export default async function DatabaseTable({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const query = (await searchParams).q?.toLowerCase() || '';

    const filteredEntries = databaseEntries.filter(entry =>
        entry.title.toLowerCase().includes(query) ||
        entry.id.toLowerCase().includes(query)
    );

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
            <table className="w-full text-left text-sm">
                <thead className="bg-white/5 border-b border-white/10 text-xs font-mono text-white/40">
                    <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">TITLE</th>
                        <th className="px-6 py-3 font-medium">TYPE</th>
                        <th className="px-6 py-3 font-medium">DATE</th>
                        <th className="px-6 py-3 font-medium text-right">ACCESS</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry) => (
                            <tr key={entry.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 font-mono text-cyber-blue">{entry.id}</td>
                                <td className="px-6 py-4 font-medium text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-white/20" />
                                    {entry.title}
                                </td>
                                <td className="px-6 py-4 font-mono text-xs text-white/50">{entry.type}</td>
                                <td className="px-6 py-4 font-mono text-xs text-white/50">{entry.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border ${entry.access === 'CLASSIFIED' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                                            entry.access === 'RESTRICTED' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                                                'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                        }`}>
                                        {entry.access === 'CLASSIFIED' && <Lock className="w-3 h-3" />}
                                        {entry.access}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-white/30 font-mono">
                                NO ENTRIES FOUND MATCHING QUERY "{query}"
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
