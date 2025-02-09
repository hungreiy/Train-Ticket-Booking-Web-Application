import React, { useState, useEffect } from 'react';

function Profile() {
    const [user, setUser ] = useState({});

    useEffect(() => {
        // Fetch user profile from the API
        const fetchUser Profile = async () => {
            const response = await fetch('/api/profile');
            const data = await response.json();
            setUser (data);
        };
        fetchUser Profile();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
