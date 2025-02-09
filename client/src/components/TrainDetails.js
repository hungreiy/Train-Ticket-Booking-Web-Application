import React, { useState, useEffect } from 'react';

function TrainDetails() {
    const [train, setTrain] = useState({});

    useEffect(() => {
        // Fetch train details from the API
        const fetchTrainDetails = async () => {
            const response = await fetch('/api/train-details');
            const data = await response.json();
            setTrain(data);
        };
        fetchTrainDetails();
    }, []);

    return (
        <div>
            <h2>Train Details</h2>
            <p>Train Number: {train.trainNumber}</p>
            <p>Departure Time: {train.departureTime}</p>
            <p>Arrival Time: {train.arrivalTime}</p>
            <p>Total Seats: {train.totalSeats}</p>
        </div>
    );
}

export default TrainDetails;
