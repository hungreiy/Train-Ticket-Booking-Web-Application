import React, { useState } from 'react';

function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async () => {
        // Submit feedback to the API
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h2>Feedback Page</h2>
            <textarea 
                placeholder="Enter your feedback" 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
    );
}

export default Feedback;
