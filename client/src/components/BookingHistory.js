import React, { useState, useEffect } from 'react';

function BookingHistory() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch user's booking history from the API
        const fetchBookings = async () => {
            const response = await fetch('/api/bookings/history');
            const data = await response.json();
            setBookings(data);
        };
        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Booking History</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        Train: {booking.trainNumber}, Seat: {booking.seatNumber}, Date: {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingHistory;
