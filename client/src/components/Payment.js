import React, { useState } from 'react';

function Payment() {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        // Process payment
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <div>
            <h2>Payment Page</h2>
            <input 
                type="number" 
                placeholder="Enter Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}

export default Payment;
