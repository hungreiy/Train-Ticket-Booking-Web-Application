import React, { useState, useEffect } from 'react';

function ManageBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch current bookings from the API
        const fetchBookings = async () => {
            const response = await fetch('/api/manage-bookings');
            const data = await response.json();
            setBookings(data);
        };
        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Manage Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        Train : {booking.trainNumber}, Seat: {booking.seatNumber}, Date: {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageBookings;
