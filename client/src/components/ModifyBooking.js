import React, { useState, useEffect } from 'react';

function ModifyBooking() {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newSeatNumber, setNewSeatNumber] = useState('');

    useEffect(() => {
        // Fetch current bookings from the API
        const fetchBookings = async () => {
            const response = await fetch('/api/manage-bookings');
            const data = await response.json();
            setBookings(data);
        };
        fetchBookings();
    }, []);

    const handleModify = async () => {
        // Submit modified booking to the API
        const response = await fetch(`/api/modify-booking/${selectedBooking}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ seatNumber: newSeatNumber }),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h2>Modify Booking</h2>
            <select onChange={(e) => setSelectedBooking(e.target.value)}>
                <option value="">Select a Booking</option>
                {bookings.map(booking => (
                    <option key={booking.id} value={booking.id}>{booking.trainNumber} - {booking.seatNumber}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="New Seat Number" 
                value={newSeatNumber} 
                onChange={(e) => setNewSeatNumber(e.target.value)} 
            />
            <button onClick={handleModify}>Modify Booking</button>
        </div>
    );
}

export default ModifyBooking;
