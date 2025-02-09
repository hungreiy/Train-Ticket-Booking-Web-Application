import React, { useState } from 'react';

function FeedbackFilter({ onFilter }) {
    const [status, setStatus] = useState('All');

    const handleChange = (e) => {
        setStatus(e.target.value);
        onFilter(e.target.value); // Call the onFilter function passed as a prop
    };

    return (
        <div>
            <h3>Filter Feedback</h3>
            <label htmlFor="status">Filter by Status:</label>
            <select id="status" value={status} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
            </select>
        </div>
    );
}

export default FeedbackFilter;
