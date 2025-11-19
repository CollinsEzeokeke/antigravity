"use server";

export async function saveSettings(prevState: any, formData: FormData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const theme = formData.get('theme');
    const notifications = formData.get('notifications');
    const autoSave = formData.get('autoSave');

    console.log('Saving settings:', { theme, notifications, autoSave });

    return {
        message: 'Settings saved successfully',
        timestamp: new Date().toISOString(),
    };
}
