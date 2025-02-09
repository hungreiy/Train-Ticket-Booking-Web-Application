const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    allFeedbackUpdates: { type: Boolean, default: false },
    ownFeedbackUpdates: { type: Boolean, default: true },
    emailNotifications: { type: Boolean, default: false },
    smsNotifications: { type: Boolean, default: false },
});

module.exports = mongoose.model('User ', userSchema);
