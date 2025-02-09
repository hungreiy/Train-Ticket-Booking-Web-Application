import React, { useState, useEffect } from 'react';

function Admin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the API
        const fetchUsers = async () => {
            const response = await fetch('/api/admin/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>User List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;
