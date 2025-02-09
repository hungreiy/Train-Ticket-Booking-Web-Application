import React, { useState, useEffect } from 'react';

function SeatingPlan() {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        // Fetch seating plan from the API
        const fetchSeats = async () => {
            const response = await fetch('/api/seating-plan');
            const data = await response.json();
            setSeats(data);
        };
 fetchSeats();
    }, []);

    const handleSeatSelection = async (seatNumber) => {
        // Lock the selected seat
        const response = await fetch(`/api/lock-seat/${seatNumber}`, {
            method: 'POST',
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h2>Seating Plan</h2>
            <div className="seating-layout">
                {seats.map(seat => (
                    <button 
                        key={seat.number} 
                        onClick={() => handleSeatSelection(seat.number)} 
                        disabled={seat.isLocked}
                    >
                        {seat.number} {seat.isLocked ? 'Locked' : 'Available'}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SeatingPlan;
