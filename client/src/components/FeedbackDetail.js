import React, { useEffect, useState } from 'react';

function FeedbackDetail({ feedbackId, onClose }) {
    const [ feedbackDetail, setFeedbackDetail] = useState(null);

    useEffect(() => {
        const fetchFeedbackDetail = async () => {
            const response = await fetch(`/api/feedback/${feedbackId}`);
            const data = await response.json();
            setFeedbackDetail(data);
        };
        fetchFeedbackDetail();
    }, [feedbackId]);

    if (!feedbackDetail) return <div>Loading...</div>;

    return (
        <div className="modal">
            <h2>Feedback Details</h2>
            <p><strong>Train:</strong> {feedbackDetail.trainId}</p>
            <p><strong>Rating:</strong> {feedbackDetail.rating}</p>
            <p><strong>Comment:</strong> {feedbackDetail.comment}</p>
            <p><strong>Status:</strong> {feedbackDetail.status}</p>
            <h3>Comments:</h3>
            <ul>
                {feedbackDetail.comments.map((comment) => (
                    <li key={comment._id}>{comment.text}</li>
                ))}
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default FeedbackDetail;
