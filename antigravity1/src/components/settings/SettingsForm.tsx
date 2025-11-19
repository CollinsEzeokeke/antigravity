"use client";

import { useActionState } from 'react';
import { saveSettings } from '@/app/settings/actions';
import { Save, Loader2 } from 'lucide-react';

const initialState = {
    message: '',
    timestamp: '',
};

export default function SettingsForm() {
    const [state, formAction, isPending] = useActionState(saveSettings, initialState);

    return (
        <form action={formAction} className="space-y-6 max-w-2xl">
            <div className="bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-6">
                <div>
                    <h3 className="text-sm font-mono font-bold text-white/90 mb-4 border-b border-white/10 pb-2">INTERFACE PREFERENCES</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="theme" className="text-sm text-white/70">HUD Theme</label>
                            <select
                                name="theme"
                                id="theme"
                                className="bg-black/40 border border-white/10 rounded px-3 py-1 text-sm text-white focus:border-cyber-blue outline-none"
                            >
                                <option value="cyber">Cyber Blue</option>
                                <option value="amber">Amber Warning</option>
                                <option value="void">Void High Contrast</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="density" className="text-sm text-white/70">Data Density</label>
                            <select
                                name="density"
                                id="density"
                                className="bg-black/40 border border-white/10 rounded px-3 py-1 text-sm text-white focus:border-cyber-blue outline-none"
                            >
                                <option value="high">High (Engineer)</option>
                                <option value="medium">Medium (Standard)</option>
                                <option value="low">Low (Executive)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-mono font-bold text-white/90 mb-4 border-b border-white/10 pb-2">SYSTEM ALERTS</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" name="notifications" className="w-4 h-4 bg-black/40 border-white/20 rounded checked:bg-cyber-blue" defaultChecked />
                            <span className="text-sm text-white/70 group-hover:text-white transition-colors">Enable Audio Warnings</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" name="autoSave" className="w-4 h-4 bg-black/40 border-white/20 rounded checked:bg-cyber-blue" defaultChecked />
                            <span className="text-sm text-white/70 group-hover:text-white transition-colors">Auto-Archive Logs</span>
                        </label>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs font-mono text-emerald-400">
                        {state.message && <span>{state.message} at {new Date(state.timestamp).toLocaleTimeString()}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="flex items-center gap-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/50 rounded hover:bg-cyber-blue/20 text-cyber-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isPending ? 'SAVING...' : 'SAVE CONFIG'}
                    </button>
                </div>
            </div>
        </form>
    );
}
