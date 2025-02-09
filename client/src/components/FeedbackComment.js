import React, { useState } from 'react';

function FeedbackComment({ feedbackId, onClose }) {
    const [comment, setComment] = useState('');

    const handleSubmit = async () => {
        const response = await fetch(`/api/feedback/${feedbackId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment }),
        });
        const data = await response.json();
        alert(data.message);
        if (data.success) {
            onClose(); // Close the comment modal
        }
    };

    return (
        <div className="modal">
            <h2>Add Comment</h2>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add your comment here..."
            />
            <button onClick={handleSubmit}>Submit Comment</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}

export default FeedbackComment;
