import React, { useState, useEffect } from 'react';

function Booking() {
    const [trains, setTrains] = useState([]);
    const [selectedTrain, setSelectedTrain] = useState(null);
    const [seatNumber, setSeatNumber] = useState('');

    useEffect(() => {
        // Fetch available trains from the API
        const fetchTrains = async () => {
            const response = await fetch('/api/trains');
            const data = await response.json();
            setTrains(data);
        };
        fetchTrains();
    }, []);

    const handleBooking = async () => {
        // Submit booking to the API
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trainId: selectedTrain, seatNumber }),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h2>Booking Page</h2>
            <select onChange={(e) => setSelectedTrain(e.target.value)}>
                <option value="">Select a Train</option>
                {trains.map(train => (
                    <option key={train._id} value={train._id}>{train.trainNumber}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="Enter Seat Number" 
                value={seatNumber} 
                onChange={(e) => setSeatNumber(e.target.value)} 
            />
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
}

export default Booking;
