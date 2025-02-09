import React, { useEffect, useState } from 'react';

function NotificationSettings() {
    const [preferences, setPreferences] = useState({ email: false, sms: false });

    useEffect(() => {
        const fetchPreferences = async () => {
            const response = await fetch('/api/notifications');
            const data = await response.json();
            setPreferences(data);
        };
        fetchPreferences();
    }, []);

    const handleChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.checked });
    };

    const handleSubmit = async () => {
        await fetch('/api/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preferences),
        });
        alert('Preferences updated successfully!');
    };

    return (
        <div>
            <h2>Notification Settings</h2>
            <label>
                <input
                    type="checkbox"
                    name="email"
                    checked={preferences.email}
                    onChange={handleChange}
                />
                Email Notifications
            </label>
            <label>
                <input
                    type="checkbox"
                    name="sms"
                    checked={preferences.sms}
                    onChange={handleChange}
                />
                SMS Notifications
            </label>
            <button onClick={handleSubmit}>Save Preferences</button>
        </div>
    );
}

export default NotificationSettings;
