import SettingsForm from '@/components/settings/SettingsForm';

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-mono font-bold text-white tracking-wider">SYSTEM CONFIGURATION</h1>
                <p className="text-sm text-white/40 font-mono mt-1">USER PREFERENCES & OVERRIDES</p>
            </div>

            <SettingsForm />
        </div>
    );
}
