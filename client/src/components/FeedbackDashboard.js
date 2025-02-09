import React, { useEffect, useState } from 'react';
import FeedbackFilter from './FeedbackFilter';
import FeedbackComment from './FeedbackComment';
import FeedbackDetail from './FeedbackDetail';

function FeedbackDashboard() {
    const [reportedFeedback, setReportedFeedback] = useState([]);
    const [filteredFeedback, setFilteredFeedback] = useState([]);
    const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);
    const [selectedCommentId, setSelectedCommentId] = useState(null);

    useEffect(() => {
        const fetchReportedFeedback = async () => {
            const response = await fetch('/api/feedback');
            const data = await response.json();
            setReportedFeedback(data);
            setFilteredFeedback(data);
        };
        fetchReportedFeedback();
    }, []);

    const handleFilter = (status) => {
        const filtered = reportedFeedback.filter(feedback => {
            if (status === 'All') return true;
            return feedback.status === status;
        });
        setFilteredFeedback(filtered);
    };

    const openCommentModal = (feedbackId) => {
        setSelectedCommentId(feedbackId);
    };

    const closeCommentModal = () => {
        setSelectedCommentId(null);
    };

    const openDetailModal = (feedbackId) => {
        setSelectedFeedbackId(feedbackId);
    };

    const closeDetailModal = () => {
        setSelectedFeedbackId(null);
    };

    return (
        <div>
            <h2>Your Reported Feedback</h2>
            <FeedbackFilter onFilter={handleFilter} />
            <ul>
                {filteredFeedback.map((feedback) => (
                    <li key={feedback._id}>
                        <strong>Train:</strong> {feedback.trainId} <br />
                        <strong>Rating:</strong> {feedback.rating} <br />
                        <strong>Comment:</strong> {feedback.comment} <br />
                        <strong>Status:</strong> {feedback.status} <br />
                        <button onClick={() => openCommentModal(feedback._id)}>Add Comment</button>
                        <button onClick={() => openDetailModal(feedback._id)}>View Details</button>
                    </li>
                ))}
            </ul>
            {selectedCommentId && (
                <FeedbackComment feedbackId={selectedCommentId} onClose={closeCommentModal} />
            )}
            {selectedFeedbackId && (
                <FeedbackDetail feedbackId={selectedFeedbackId} onClose={closeDetailModal} />
            )}
        </div>
    );
}

export default FeedbackDashboard;
