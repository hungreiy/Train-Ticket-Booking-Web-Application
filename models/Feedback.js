const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    trainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    feedbackDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
