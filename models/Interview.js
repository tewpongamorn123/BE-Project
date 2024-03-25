const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    joboffer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Joboffer',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Interview', InterviewSchema);