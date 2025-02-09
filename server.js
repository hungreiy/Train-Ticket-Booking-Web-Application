const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/train-ticket-booking', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes here
app.get('/', (req, res) => {
    res.send('Welcome to the Train Ticket Booking API');
});

// Start server
const PORT = process.env .PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
