"use client";

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }

        startTransition(() => {
            router.replace(`/database?${params.toString()}`);
        });
    }

    return (
        <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
                type="text"
                placeholder="SEARCH DATABASE..."
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-cyber-blue/50 transition-colors"
                defaultValue={searchParams.get('q')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {isPending && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
