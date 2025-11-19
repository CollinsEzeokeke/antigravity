import SearchInput from '@/components/database/SearchInput';
import DatabaseTable from '@/components/database/DatabaseTable';
import { Suspense } from 'react';

export default function DatabasePage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-mono font-bold text-white tracking-wider">CENTRAL DATABASE</h1>
                    <p className="text-sm text-white/40 font-mono mt-1">ARCHIVES & RESOURCES</p>
                </div>
                <Suspense fallback={<div className="w-full max-w-md h-10 bg-white/5 rounded-lg animate-pulse" />}>
                    <SearchInput />
                </Suspense>
            </div>

            <Suspense fallback={
                <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm h-64 flex items-center justify-center">
                    <div className="text-white/30 font-mono animate-pulse">ACCESSING ARCHIVES...</div>
                </div>
            }>
                <DatabaseTable searchParams={searchParams} />
            </Suspense>
        </div>
    );
}
