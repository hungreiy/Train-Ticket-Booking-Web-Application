import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

function FeedbackAnalytics() {
    const [analyticsData, setAnalyticsData] = useState({});

    useEffect(() => {
        const fetchAnalytics = async () => {
            const response = await fetch('/api/analytics');
            const data = await response.json();
            setAnalyticsData(data);
        };
        fetchAnalytics();
    }, []);

    const data = {
        labels: analyticsData.labels || [],
        datasets: [
            {
                label: 'Feedback Ratings',
                data: analyticsData.values || [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Feedback Analytics</h2>
            <Bar data={data} />
        </div>
    );
}

export default FeedbackAnalytics;
